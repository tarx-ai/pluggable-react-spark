import React, { useState } from 'react';
import { Send, Paperclip, Plus, X, Search, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Tab {
  id: string;
  title: string;
  isActive: boolean;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const TarxChatInterface: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', title: 'Good evening, John', isActive: false },
    { id: '2', title: 'IDE Refactoring', isActive: false },
    { id: '3', title: 'Install Tarx', isActive: false },
    { id: '4', title: 'New Chat', isActive: true },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'user',
      content: 'Can you whip this ui into shape. here is direction: https://www.figma.com/design/4YJSN8i1DVWyje2EGP055K/Tarx-1.0?node-id=61-2140&m=dev',
      timestamp: new Date(),
    }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleTabSelect = (tabId: string) => {
    setTabs(tabs.map(tab => ({ ...tab, isActive: tab.id === tabId })));
  };

  const handleCloseTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTabs(tabs.filter(tab => tab.id !== tabId));
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#0A0A0B] border-r border-[#1C1C1E] flex flex-col">
        {/* Logo/Profile Section */}
        <div className="p-4 border-b border-[#1C1C1E]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">TF</span>
            </div>
            <span className="text-sm font-medium">Tarx Foundation</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#1C1C1E] cursor-pointer">
            <div className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7L12 2L21 7M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm">Search files, the interwebs, chats, etc.</span>
          </div>
          
          <div className="space-y-1">
            <div className="text-xs text-[#8E8E93] px-2 py-1">CHATS</div>
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#1C1C1E] cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm">Chats with TARX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with Search and Share */}
        <div className="h-12 bg-[#0A0A0B] border-b border-[#1C1C1E] flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#1C1C1E] rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="secondary" 
              size="sm"
              leftIcon={<Share2 className="w-4 h-4" />}
            >
              Share
            </Button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="bg-[#0A0A0B] border-b border-[#1C1C1E]">
          <div className="flex items-center">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center space-x-2 px-4 py-3 border-r border-[#1C1C1E] cursor-pointer min-w-0 max-w-64 ${
                  tab.isActive 
                    ? 'bg-[#1C1C1E] text-white' 
                    : 'bg-[#0A0A0B] text-[#8E8E93] hover:bg-[#1C1C1E]'
                }`}
                onClick={() => handleTabSelect(tab.id)}
              >
                <span className="text-sm truncate">{tab.title}</span>
                <button
                  className="ml-auto hover:bg-[#2C2C2E] rounded p-1"
                  onClick={(e) => handleCloseTab(tab.id, e)}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <Button 
              variant="ghost" 
              size="icon"
              className="w-10 h-12 border-r border-[#1C1C1E] hover:bg-[#1C1C1E] rounded-none"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-2xl ${message.type === 'user' ? 'bg-[#1C1C1E]' : 'bg-transparent'} rounded-lg p-4`}>
                <div className="text-sm text-white whitespace-pre-wrap">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-[#1C1C1E] p-4">
          <div className="flex items-end space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="p-2 hover:bg-[#1C1C1E] rounded-lg"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
            
            <div className="flex-1 min-h-[44px] max-h-32 bg-[#1C1C1E] rounded-lg border border-[#2C2C2E] focus-within:border-[#0A84FF]">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask, build, or do anything."
                className="w-full h-full p-3 bg-transparent resize-none outline-none placeholder-[#8E8E93] text-white"
                rows={1}
              />
            </div>
            
            <Button 
              onClick={handleSendMessage}
              variant="ghost" 
              size="icon"
              className="p-2 hover:bg-[#1C1C1E] rounded-lg"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-xs text-[#8E8E93]">
            <div className="flex items-center space-x-4">
              <button className="hover:text-white">@ Add context</button>
              <select className="bg-transparent border-none text-xs hover:text-white">
                <option>HI-M-omni</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-white">@ Add context</button>
              <select className="bg-transparent border-none text-xs hover:text-white">
                <option>HI-M-omni</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarxChatInterface;