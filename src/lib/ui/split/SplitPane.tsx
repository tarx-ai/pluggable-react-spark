'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  direction?: 'vertical' | 'horizontal'; // vertical = left|right, horizontal = top|bottom
  defaultPct?: number;                    // 56 means 56%
  storageKey?: string;                    // persist position
  collapsed?: boolean;                    // external control (optional)
  onChangePct?: (pct: number) => void;
  renderA: (styleVar: React.CSSProperties) => React.ReactNode; // pane A
  renderB: (styleVar: React.CSSProperties) => React.ReactNode; // pane B
};

export default function SplitPane({
  direction = 'horizontal',
  defaultPct = 56,
  storageKey,
  collapsed,
  onChangePct,
  renderA,
  renderB
}: Props) {
  const [pct, setPct] = useState(defaultPct);
  const [drag, setDrag] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // hydrate
  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && typeof saved.pct === 'number') setPct(saved.pct);
    } catch {}
  }, [storageKey]);

  // persist
  useEffect(() => {
    if (!storageKey) return;
    try { localStorage.setItem(storageKey, JSON.stringify({ pct })); } catch {}
  }, [pct, storageKey]);

  // drag logic
  useEffect(() => {
    if (!drag) return;
    const onMove = (e: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let next = pct;
      if (direction === 'horizontal') {
        const y = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        next = ((y - rect.top) / rect.height) * 100;
      } else {
        const x = Math.max(rect.left, Math.min(e.clientX, rect.right));
        next = ((x - rect.left) / rect.width) * 100;
      }
      next = Math.max(0, Math.min(100, Math.round(next)));
      setPct(next);
      onChangePct?.(next);
    };
    const off = () => setDrag(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', off);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', off); };
  }, [drag, direction, pct, onChangePct]);

  const varName = direction === 'horizontal' ? '--split-h' : '--split-v';
  const aStyle: React.CSSProperties = collapsed ? { [varName as any]: '0%' } : { [varName as any]: `${pct}%` };
  const cursor = direction === 'horizontal' ? 'row-resize' : 'col-resize';

  return (
    <div
      ref={rootRef}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      onDoubleClick={() => setPct(defaultPct)}
      role="separator"
      aria-orientation={direction === 'horizontal' ? 'horizontal' : 'vertical'}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      tabIndex={0}
      onKeyDown={(e) => {
        if (direction === 'horizontal') {
          if (e.key === 'ArrowUp') setPct(p => Math.min(100, p + 2));
          if (e.key === 'ArrowDown') setPct(p => Math.max(0, p - 2));
        } else {
          if (e.key === 'ArrowRight') setPct(p => Math.min(100, p + 2));
          if (e.key === 'ArrowLeft') setPct(p => Math.max(0, p - 2));
        }
      }}
    >
      {/* Pane A */}
      <div style={direction === 'horizontal'
        ? { height: `var(${varName})`, overflow: 'hidden' }
        : { width: `var(${varName})`, height: '100%', overflow: 'hidden' }}>
        {renderA(aStyle)}
      </div>

      {/* Divider hit area (invisible) */}
      <div
        onMouseDown={() => setDrag(true)}
        style={{
          position: 'absolute',
          left: direction === 'horizontal' ? 0 : `calc(var(${varName}) - 8px)`,
          top: direction === 'horizontal' ? `calc(var(${varName}) - 8px)` : 0,
          width: direction === 'horizontal' ? '100%' : '16px',
          height: direction === 'horizontal' ? '16px' : '100%',
          cursor,
          // keep it invisible; you can add a subtle line behind in your existing CSS if desired
        }}
      />

      {/* Pane B */}
      <div style={direction === 'horizontal'
        ? { height: `calc(100% - var(${varName}))`, overflow: 'auto' }
        : { width: `calc(100% - var(${varName}))`, height: '100%', overflow: 'auto', position: 'absolute', right: 0, top: 0 }}>
        {renderB(aStyle)}
      </div>
    </div>
  );
}
