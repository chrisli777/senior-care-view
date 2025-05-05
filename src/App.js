
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ElderDashboard from "./pages/ElderDashboard";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import FamilyDashboard from "./pages/FamilyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Elder Routes */}
          <Route path="/dashboard/elder" element={<ElderDashboard />} />
          <Route path="/dashboard/elder/medications" element={<ElderDashboard />} />
          <Route path="/dashboard/elder/contacts" element={<ElderDashboard />} />
          <Route path="/dashboard/elder/calendar" element={<ElderDashboard />} />
          <Route path="/dashboard/elder/activities" element={<ElderDashboard />} />
          
          {/* Caregiver Routes */}
          <Route path="/dashboard/caregiver" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/tasks" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/patients" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/patients/:id" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/reports" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/notes" element={<CaregiverDashboard />} />
          <Route path="/dashboard/caregiver/schedule" element={<CaregiverDashboard />} />
          
          {/* Family Routes */}
          <Route path="/dashboard/family" element={<FamilyDashboard />} />
          <Route path="/dashboard/family/activity" element={<FamilyDashboard />} />
          <Route path="/dashboard/family/appointments" element={<FamilyDashboard />} />
          <Route path="/dashboard/family/caregivers" element={<FamilyDashboard />} />
          <Route path="/dashboard/family/reports" element={<FamilyDashboard />} />
          <Route path="/dashboard/family/notes" element={<FamilyDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
