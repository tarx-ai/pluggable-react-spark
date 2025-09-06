'use client';

import { showToast } from '@/lib/ui/toast';

interface WorkspaceHeaderProps {
  className?: string;
  workspaceName?: string;
  lastActive?: string;
}

const WorkspaceHeader = ({ 
  className = '', 
  workspaceName = 'Project Dashboard',
  lastActive = '2 min ago'
}: WorkspaceHeaderProps) => {
  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Link copied');
    } catch {
      showToast('Copy failed', 'err');
    }
  };

  return (
    <div className={`border-b border-n-3 dark:border-n-5 p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="h5 mb-1">{workspaceName}</h1>
            <p className="caption1 text-n-4">tarx-react • Last active {lastActive}</p>
          </div>
        </div>
        
        <button 
          onClick={onCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-n-1 text-n-7 border border-n-3 rounded-xl hover:bg-n-2 transition-colors dark:bg-n-6 dark:text-n-1 dark:border-n-5 dark:hover:bg-n-5"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M10.5 6L13 3.5L10.5 1M13 3.5H3.5M5.5 10l-2.5 2.5L5.5 15M3 12.5h9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Copy Link</span>
        </button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
