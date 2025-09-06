import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>TARX (Vite)</h1>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/ops">Ops</Link>
      </nav>
      <div style={{ marginTop: 24 }}>
        <h2>Welcome to TARX</h2>
        <p>Your AI-powered workspace is ready.</p>
      </div>
    </main>
  );
}

function Features() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Features</h1>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/ops">Ops</Link>
      </nav>
      <div style={{ marginTop: 24 }}>
        <h2>TARX Features</h2>
        <ul>
          <li>AI-powered coding assistance</li>
          <li>Real-time collaboration</li>
          <li>Advanced workspace management</li>
        </ul>
      </div>
    </main>
  );
}

function Ops() {
  return (
    <main style={{ padding: 24 }}>
      <h1>TARX Ops Dashboard</h1>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/ops">Ops</Link>
      </nav>
      <div style={{ marginTop: 24 }}>
        <h2>Operations</h2>
        <p>Manage your TARX workspace</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/ops" element={<Ops />} />
    </Routes>
  );
}
