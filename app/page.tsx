export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '240px 1fr 0px',
      background: '#0b0d10',
      color: '#e7eaf0',
      gap: '0px'
    }}>
      <aside style={{padding:'16px', borderRight:'1px solid rgba(255,255,255,0.08)'}}>
        <div style={{opacity:.7, fontSize:12, marginBottom:8}}>Nav</div>
        <a href="/" style={{display:'block', padding:'6px 0'}}>Home</a>
        <a href="/w" style={{display:'block', padding:'6px 0'}}>Workspaces</a>
      </aside>
      <main style={{padding:'16px'}}>
        <h1 style={{fontSize:20, marginBottom:12}}>Welcome to TARX</h1>
        <p style={{opacity:.8}}>Your AI-powered workspace is ready.</p>
      </main>
      <div />
    </div>
  );
}
