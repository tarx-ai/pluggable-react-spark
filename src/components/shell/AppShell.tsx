'use client';

import { useState, useEffect } from 'react';
import SplitPane from '@/lib/ui/split/SplitPane';

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
}

const AppShell = ({ children, className = '' }: AppShellProps) => {
  const [collapsed, setCollapsed] = useState(false);

  // Cmd/Ctrl+K handler for toggle collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCollapsed(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`h-full ${className}`}>
      <SplitPane
        direction="horizontal"
        defaultPct={56}
        storageKey="tarx.split.v1"
        collapsed={collapsed}
        renderA={(styleVar) => (
          // Overview/welcome section - this will be the top pane
          <div 
            className="h-full bg-n-1 dark:bg-n-6 rounded-tl-[1.25rem] md:rounded-none"
            style={styleVar}
          >
            <div className="h-full p-6">
              <div className="mb-10 text-center">
                <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
                  TARX CODE
                </div>
                <div className="body1 text-n-4 2xl:body1S max-w-2xl mx-auto">
                  Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. 
                  Your free, always-on coding teammate that works at a college-grad level entirely on your machine.
                </div>
              </div>
            </div>
          </div>
        )}
        renderB={(styleVar) => (
          // Main content area - this will be the bottom pane
          <div 
            className="h-full bg-n-1 dark:bg-n-6 rounded-tr-[1.25rem] md:rounded-none"
            style={styleVar}
          >
            <div className="h-full overflow-y-auto">
              {children}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default AppShell;