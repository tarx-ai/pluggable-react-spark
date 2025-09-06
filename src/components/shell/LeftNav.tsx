"use client";
import React from "react";
import Link from "next/link";

export function LeftNav() {
  return (
    <nav className="p-4">
      <div className="space-y-4">
        {/* Search */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-sm">Search</span>
        </div>

        {/* Chats with TARX */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span className="text-sm">Chats with TARX</span>
        </div>

        {/* Workspaces */}
        <div>
          <Link href="/w" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
            <span className="text-sm">Workspaces</span>
          </Link>
          {/* Sub-rows - no icons, left-aligned */}
          <div className="pl-0 mt-1">
            <button className="w-full px-3 py-1.5 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors text-left">
              <span className="text-sm text-n-4 dark:text-n-3">Recent Projects</span>
            </button>
            <button className="w-full px-3 py-1.5 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors text-left">
              <span className="text-sm text-n-4 dark:text-n-3">Templates</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-n-2 dark:hover:bg-n-5 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
          </svg>
          <span className="text-sm">Actions</span>
        </div>
      </div>
    </nav>
  );
}
