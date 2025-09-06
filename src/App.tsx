import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Main from "./templates/HomePage/Main";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Main /></Layout>} />
          <Route path="/ops" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">TARX Ops Dashboard</h1><p className="text-muted-foreground">Manage your TARX workspace</p></div></Layout>} />
          <Route path="/search" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Search</h1><p className="text-muted-foreground">Search your TARX workspace</p></div></Layout>} />
          <Route path="/settings" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">TARX settings</p></div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
