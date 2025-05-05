
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, ChartBar, Menu, User, Users } from 'lucide-react';
import { useState } from 'react';

interface SidebarLinkProps {
  to: string;
  icon: React.FC<{ className?: string }>;
  children: React.ReactNode;
  userType: string;
}

const SidebarLink = ({ to, icon: Icon, children, userType }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors";
  const activeClasses = {
    elder: "bg-careBlue-100 text-careBlue-800",
    caregiver: "bg-careGreen-100 text-careGreen-800",
    family: "bg-carePurple-100 text-carePurple-800"
  };
  const inactiveClasses = "text-gray-600 hover:bg-gray-100";
  
  return (
    <Link 
      to={to} 
      className={cn(
        baseClasses, 
        isActive ? activeClasses[userType as keyof typeof activeClasses] : inactiveClasses
      )}
    >
      <Icon className={cn("h-5 w-5", isActive ? "opacity-100" : "opacity-70")} />
      <span>{children}</span>
    </Link>
  );
};

interface DashboardSidebarProps {
  userType: 'elder' | 'caregiver' | 'family';
}

const DashboardSidebar = ({ userType }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const userTypeColor = {
    elder: "from-careBlue-600 to-careBlue-800",
    caregiver: "from-careGreen-600 to-careGreen-800",
    family: "from-carePurple-600 to-carePurple-800"
  };
  
  return (
    <div className={cn(
      "h-screen sticky top-0 bg-white border-r border-gray-200 transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <Link to="/" className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${userTypeColor[userType]} flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <span className="text-xl font-bold">CareConnect</span>
            </Link>
          )}
          
          {isCollapsed && (
            <div className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-br ${userTypeColor[userType]} flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">CC</span>
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-gray-900"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="space-y-1">
          {userType === 'elder' && (
            <>
              <SidebarLink to={`/dashboard/elder`} icon={User} userType={userType}>
                {!isCollapsed && "Dashboard"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/elder/medications`} icon={Calendar} userType={userType}>
                {!isCollapsed && "Medications"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/elder/contacts`} icon={Users} userType={userType}>
                {!isCollapsed && "Contacts"}
              </SidebarLink>
            </>
          )}
          
          {userType === 'caregiver' && (
            <>
              <SidebarLink to={`/dashboard/caregiver`} icon={User} userType={userType}>
                {!isCollapsed && "Dashboard"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/caregiver/tasks`} icon={Calendar} userType={userType}>
                {!isCollapsed && "Tasks"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/caregiver/patients`} icon={Users} userType={userType}>
                {!isCollapsed && "Patients"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/caregiver/reports`} icon={ChartBar} userType={userType}>
                {!isCollapsed && "Reports"}
              </SidebarLink>
            </>
          )}
          
          {userType === 'family' && (
            <>
              <SidebarLink to={`/dashboard/family`} icon={User} userType={userType}>
                {!isCollapsed && "Dashboard"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/family/activity`} icon={Calendar} userType={userType}>
                {!isCollapsed && "Activity"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/family/caregivers`} icon={Users} userType={userType}>
                {!isCollapsed && "Caregivers"}
              </SidebarLink>
              <SidebarLink to={`/dashboard/family/reports`} icon={ChartBar} userType={userType}>
                {!isCollapsed && "Reports"}
              </SidebarLink>
            </>
          )}
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">Logged in as:</div>
            <div className="font-semibold text-gray-900">{userType.charAt(0).toUpperCase() + userType.slice(1)}</div>
            <Link to="/login" className="text-sm text-careBlue-600 hover:underline mt-2 block">
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSidebar;
