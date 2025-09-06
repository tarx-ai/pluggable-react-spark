let root: HTMLDivElement | null = null;
export type ToastKind = 'ok' | 'err';

export function showToast(msg: string, kind: ToastKind = 'ok') {
  if (typeof window === 'undefined') return;
  if (!root) {
    root = document.createElement('div');
    root.id = 'tarx-toast-root';
    Object.assign(root.style, {
      position: 'fixed',
      left: '50%',
      bottom: '24px',
      transform: 'translateX(-50%)',
      zIndex: '9999',
      pointerEvents: 'none',
    });
    document.body.appendChild(root);
  }
  const el = document.createElement('div');
  el.textContent = msg;
  Object.assign(el.style, {
    pointerEvents: 'auto',
    marginTop: '8px',
    padding: '10px 12px',
    borderRadius: '10px',
    fontSize: '12px',
    lineHeight: '16px',
    backdropFilter: 'saturate(1.2) blur(8px)',
    color: kind === 'err' ? '#fee2e2' : '#e6f8ee',
    background: kind === 'err' ? 'rgba(185,28,28,.2)' : 'rgba(16,185,129,.2)',
    border: kind === 'err' ? '1px solid rgba(248,113,113,.35)' : '1px solid rgba(52,211,153,.35)',
    boxShadow: '0 8px 24px rgba(0,0,0,.25)',
    opacity: '0',
    transition: 'opacity .15s ease, transform .15s ease',
    transform: 'translateY(6px)',
  });
  root.appendChild(el);
  requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
  const t = setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => el.remove(), 180);
  }, 2500);
  el.addEventListener('click', () => { clearTimeout(t); el.remove(); });
}