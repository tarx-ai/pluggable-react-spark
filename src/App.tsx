import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conversations" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Conversations</h1><p className="text-muted-foreground">Manage your AI conversations</p></div></Layout>} />
          <Route path="/models" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Models</h1><p className="text-muted-foreground">AI model management</p></div></Layout>} />
          <Route path="/data" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Data Sources</h1><p className="text-muted-foreground">Manage your data sources</p></div></Layout>} />
          <Route path="/users" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Users</h1><p className="text-muted-foreground">User management</p></div></Layout>} />
          <Route path="/automation" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Automation</h1><p className="text-muted-foreground">Workflow automation</p></div></Layout>} />
          <Route path="/settings" element={<Layout><div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Platform settings</p></div></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
