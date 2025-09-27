import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { startUXMonitoring } from "@/lib/ux-validation";
import { AuthProvider, ProtectedRoute } from "@/hooks/use-auth";
import { AdminLayout } from "@/components/admin/admin-layout";
import Home from "@/pages/home";
import CaseStudy from "@/pages/case-study";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";

function AdminRouter() {
  const [location] = useLocation();
  
  // If accessing admin area but not authenticated, show login
  if (location.startsWith('/admin') && location !== '/admin/login') {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <Switch>
            <Route path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/admin/case-studies" component={() => <div className="text-white">Case Studies Management (Coming Soon)</div>} />
            <Route path="/admin/experiences" component={() => <div className="text-white">Work Experience Management (Coming Soon)</div>} />
            <Route path="/admin/testimonials" component={() => <div className="text-white">Testimonials Management (Coming Soon)</div>} />
            <Route path="/admin/education" component={() => <div className="text-white">Education Management (Coming Soon)</div>} />
            <Route path="/admin/achievements" component={() => <div className="text-white">Achievements Management (Coming Soon)</div>} />
            <Route path="/admin/skills" component={() => <div className="text-white">Skills Management (Coming Soon)</div>} />
            <Route path="/admin/messages" component={() => <div className="text-white">Messages Management (Coming Soon)</div>} />
            <Route path="/admin/media" component={() => <div className="text-white">Media Library (Coming Soon)</div>} />
            <Route path="/admin/settings" component={() => <div className="text-white">Settings (Coming Soon)</div>} />
            <Route path="/admin/settings/theme" component={() => <div className="text-white">Theme Settings (Coming Soon)</div>} />
            <Route path="/admin/activity" component={() => <div className="text-white">Activity Logs (Coming Soon)</div>} />
            {/* Redirect /admin to dashboard */}
            <Route path="/admin" component={() => { window.location.href = '/admin/dashboard'; return null; }} />
            <Route component={() => <div className="text-white">Admin Page Not Found</div>} />
          </Switch>
        </AdminLayout>
      </ProtectedRoute>
    );
  }
  
  if (location === '/admin/login') {
    return <AdminLogin />;
  }
  
  // Redirect bare /admin to dashboard
  if (location === '/admin') {
    window.location.href = '/admin/dashboard';
    return null;
  }
  
  return null;
}

function Router() {
  const [location] = useLocation();
  
  // Handle admin routes
  if (location.startsWith('/admin')) {
    return <AdminRouter />;
  }
  
  // Handle public routes
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/case-study/:slug" component={CaseStudy}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // UX Enhancement: Initialize comprehensive UX monitoring system
  useEffect(() => {
    startUXMonitoring();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Router />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
