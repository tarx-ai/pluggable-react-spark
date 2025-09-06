"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { useLayoutState } from "./useLayoutState";
import { mcpClient } from "@/lib/mcp/client";
import { showToast } from "@/lib/ui/toast";

export function TopBar() {
  const [{ leftOpen, rightOpen }, setState] = useLayoutState();
  const [mode, setMode] = useState<'local' | 'cloud'>('local');

  const toggleLeft = () => {
    setState({ leftOpen: !leftOpen });
  };

  const openActions = () => {
    setState({ leftOpen: true });
  };

  const toggleRight = () => {
    setState({ rightOpen: !rightOpen });
  };

  const fetchMode = async () => {
    try {
      const currentMode = await mcpClient.getPref();
      setMode(currentMode);
    } catch (error) {
      // Default to local on error
      setMode('local');
    }
  };

  const toggleMode = async () => {
    try {
      const newMode = mode === 'local' ? 'cloud' : 'local';
      await mcpClient.setPref(newMode);
      setMode(newMode);
      showToast(`Mode: ${newMode === 'local' ? 'Local' : 'Cloud'}`);
    } catch (error) {
      showToast('Failed to change mode', 'err');
    }
  };

  useEffect(() => {
    fetchMode();
    
    const handleFocus = () => {
      fetchMode();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-n-3 bg-n-1/80 backdrop-blur dark:border-n-6 dark:bg-n-6/80">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
        {/* Left cluster: Panel controls */}
        <div className="flex items-center gap-2">
          {/* PanelLeft */}
          <button
            onClick={toggleLeft}
            aria-label="Toggle left panel"
            title="Toggle left panel"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-n-3 hover:bg-n-2 transition-colors dark:border-n-5 dark:hover:bg-n-5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
          </button>

          {/* Zap (Actions) */}
          <button
            onClick={openActions}
            aria-label="Open Actions"
            title="Open Actions"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-n-3 hover:bg-n-2 transition-colors dark:border-n-5 dark:hover:bg-n-5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
            </svg>
          </button>

          {/* PanelRight */}
          <button
            onClick={toggleRight}
            aria-label="Toggle right panel"
            title="Toggle right panel"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-n-3 hover:bg-n-2 transition-colors dark:border-n-5 dark:hover:bg-n-5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="15" y1="3" x2="15" y2="21"/>
            </svg>
          </button>
        </div>

        {/* Right: Mode pill and Share button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="px-3 py-1 text-xs font-medium rounded-full border border-n-3 hover:bg-n-2 transition-colors dark:border-n-5 dark:hover:bg-n-5"
          >
            {mode === 'local' ? 'Local' : 'Cloud'}
          </button>
          
          <Button
            variant="secondary"
            className="rounded-full"
            aria-label="Share"
            title="Share"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mr-2">
              <path
                d="M10.5 6L13 3.5L10.5 1M13 3.5H3.5M5.5 10l-2.5 2.5L5.5 15M3 12.5h9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Share
          </Button>
        </div>
      </div>
    </header>
  );
}
