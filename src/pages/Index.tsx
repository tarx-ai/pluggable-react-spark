import Dashboard from "./Dashboard";

const Index = () => {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <a href="/" style={{ textDecoration: "none", color: "#007bff" }}>Home</a>
        <a href="/features" style={{ textDecoration: "none", color: "#007bff" }}>Features</a>
        <a href="/ops" style={{ textDecoration: "none", color: "#007bff" }}>Ops</a>
      </nav>
      <Dashboard />
    </div>
  );
};

export default Index;
