"use client";

interface RPCRequest {
  jsonrpc: "2.0";
  id: string;
  method: string;
  params?: any;
}

interface RPCResponse {
  jsonrpc: "2.0";
  id: string;
  result?: any;
  error?: { code: number; message: string };
}

class MCPClient {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;

  private async connect(): Promise<WebSocket> {
    if (this.ws?.readyState === WebSocket.OPEN) {
      return this.ws;
    }

    return new Promise((resolve, reject) => {
      try {
        const ws = new WebSocket('ws://127.0.0.1:7420');
        
        ws.onopen = () => {
          this.ws = ws;
          this.reconnectAttempts = 0;
          resolve(ws);
        };
        
        ws.onerror = (error) => {
          reject(error);
        };
        
        ws.onclose = () => {
          this.ws = null;
          this.attemptReconnect();
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  private attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        this.connect().catch(() => {
          // Silent fail for reconnection
        });
      }, this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1));
    }
  }

  private async callRPC(method: string, params?: any): Promise<any> {
    try {
      const ws = await this.connect();
      const id = Math.random().toString(36).substr(2, 9);
      
      const request: RPCRequest = {
        jsonrpc: "2.0",
        id,
        method,
        params
      };

      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('RPC timeout'));
        }, 5000);

        const handleMessage = (event: MessageEvent) => {
          try {
            const response: RPCResponse = JSON.parse(event.data);
            if (response.id === id) {
              clearTimeout(timeout);
              ws.removeEventListener('message', handleMessage);
              
              if (response.error) {
                reject(new Error(response.error.message));
              } else {
                resolve(response.result);
              }
            }
          } catch (error) {
            // Ignore malformed messages
          }
        };

        ws.addEventListener('message', handleMessage);
        ws.send(JSON.stringify(request));
      });
    } catch (error) {
      // Return defaults on connection failure
      if (method === 'model.getPref') {
        return 'local';
      }
      throw error;
    }
  }

  async getPref(): Promise<'local' | 'cloud'> {
    try {
      const result = await this.callRPC('model.getPref');
      return result?.mode || 'local';
    } catch {
      return 'local';
    }
  }

  async setPref(mode: 'local' | 'cloud'): Promise<void> {
    try {
      await this.callRPC('model.setPref', { mode });
    } catch {
      // Silent fail
    }
  }

  async pushContext(meta: any, snippets: any[] = []): Promise<void> {
    try {
      await this.callRPC('session.push', { meta, snippets });
    } catch {
      // Silent fail
    }
  }
}

export const mcpClient = new MCPClient();