"use client";
import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/Button";

interface ContextItem {
  id: string;
  text: string;
}

interface SendMessageProps {
  onSend?: (message: string, files: File[], context: ContextItem[]) => void;
  initialContext?: string[];
}

export default function SendMessage({ onSend, initialContext = [] }: SendMessageProps) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [context, setContext] = useState<ContextItem[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Seed initial context chips once
  React.useEffect(() => {
    if (initialContext && initialContext.length && context.length === 0) {
      const seeded: ContextItem[] = initialContext.map(t => ({ 
        id: Math.random().toString(36).slice(2, 9), 
        text: t 
      }));
      setContext(seeded);
    }
  }, [initialContext, context.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = useCallback(() => {
    if (message.trim() === "") return;
    
    onSend?.(message.trim(), files, context);
    setMessage("");
    setFiles([]);
    setContext([]);
  }, [message, files, context, onSend]);

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const addContext = () => {
    const text = prompt("Add context:");
    if (text && text.trim()) {
      const newContext: ContextItem = {
        id: Math.random().toString(36).slice(2, 9),
        text: text.trim()
      };
      setContext(prev => [...prev, newContext]);
    }
  };

  const removeContext = (id: string) => {
    setContext(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Context chips */}
      {context.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {context.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-2 px-3 py-1 bg-n-2 rounded-full text-sm border border-n-3 dark:bg-n-5 dark:border-n-4"
            >
              <span className="text-n-6 dark:text-n-2">{item.text}</span>
              <button
                onClick={() => removeContext(item.id)}
                className="text-n-4 hover:text-n-6 dark:text-n-3 dark:hover:text-n-1"
                aria-label={`Remove context: ${item.text}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* File chips */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-n-2 rounded-full text-sm border border-n-3 dark:bg-n-5 dark:border-n-4"
            >
              <span className="text-n-6 dark:text-n-2">{file.name}</span>
              <span className="text-n-4 dark:text-n-3">({(file.size / 1024).toFixed(1)}KB)</span>
              <button
                onClick={() => removeFile(index)}
                className="text-n-4 hover:text-n-6 dark:text-n-3 dark:hover:text-n-1"
                aria-label={`Remove file: ${file.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <div
        className="flex items-end gap-2 p-3 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6"
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask, build, or do anything. Enter to send • Shift+Enter for newline"
            className="w-full resize-none border-none outline-none bg-transparent text-n-7 dark:text-n-1 placeholder:text-n-4 dark:placeholder:text-n-3"
            rows={1}
            style={{
              minHeight: "24px",
              maxHeight: "120px",
              height: "auto"
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
            }}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={addContext}
            className="text-xs opacity-80 border rounded-md px-2 py-1"
          >
            @ Add context
          </Button>
          
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="text-xs opacity-80 border rounded-md px-2 py-1 cursor-pointer hover:bg-n-2 dark:hover:bg-n-5"
          >
            📎 Files
          </label>
          
          <Button
            onClick={handleSend}
            disabled={message.trim() === ""}
            className="bg-primary-1 text-white hover:bg-primary-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
