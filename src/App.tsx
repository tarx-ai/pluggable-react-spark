import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Index />} />
      <Route path="/ops" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
