import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LayoutDashboard,
  FileText,
  Star,
  Briefcase,
  User,
  MessageSquare,
  Settings,
  Upload,
  Palette,
  Eye,
  LogOut,
  Menu,
  X,
  Home,
  Award,
  GraduationCap,
  Users,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ===========================================
// ADMIN LAYOUT COMPONENT
// Professional Dashboard Layout with Navigation
// ===========================================

interface AdminLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
  description?: string;
}

const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and analytics'
  },
  {
    name: 'Case Studies',
    href: '/admin/case-studies',
    icon: FileText,
    description: 'Project portfolio'
  },
  {
    name: 'Work Experience',
    href: '/admin/experiences',
    icon: Briefcase,
    description: 'Professional history'
  },
  {
    name: 'Testimonials',
    href: '/admin/testimonials',
    icon: Star,
    description: 'Client feedback'
  },
  {
    name: 'Education',
    href: '/admin/education',
    icon: GraduationCap,
    description: 'Academic background'
  },
  {
    name: 'Achievements',
    href: '/admin/achievements',
    icon: Award,
    description: 'Awards and recognition'
  },
  {
    name: 'Skills',
    href: '/admin/skills',
    icon: Users,
    description: 'Technical competencies'
  },
  {
    name: 'Messages',
    href: '/admin/messages',
    icon: MessageSquare,
    description: 'Contact submissions'
  },
  {
    name: 'Media Library',
    href: '/admin/media',
    icon: Upload,
    description: 'Assets and uploads'
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    description: 'Configuration'
  },
  {
    name: 'Theme',
    href: '/admin/settings/theme',
    icon: Palette,
    description: 'Appearance customization'
  },
  {
    name: 'Activity',
    href: '/admin/activity',
    icon: Activity,
    description: 'System logs'
  }
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const [, setLocation] = useLocation();
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setLocation('/admin/login');
  };

  const handleViewSite = () => {
    window.open('/', '_blank');
  };

  const currentPath = location;

  return (
    <div className="min-h-screen bg-deep-black flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-charcoal border-r border-glass-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-glass-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Admin Panel</h2>
              <p className="text-xs text-cool-gray">Portfolio CMS</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-cool-gray hover:text-white"
            data-testid="button-close-sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = currentPath === item.href || currentPath.startsWith(item.href + '/');
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setLocation(item.href);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30"
                      : "text-cool-gray hover:text-white hover:bg-glass-white"
                  )}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <item.icon className={cn(
                    "mr-3 h-4 w-4 transition-colors",
                    isActive ? "text-electric-cyan" : "text-cool-gray group-hover:text-white"
                  )} />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{item.name}</div>
                    {item.description && (
                      <div className="text-xs opacity-70">{item.description}</div>
                    )}
                  </div>
                  {item.badge && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </ScrollArea>

        {/* User Profile Section */}
        <div className="border-t border-glass-border p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-glass-white transition-colors group"
                data-testid="dropdown-user-menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-r from-electric-cyan to-neon-pink text-white text-sm">
                    {user?.username?.charAt(0).toUpperCase() || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="text-sm font-medium text-white group-hover:text-electric-cyan">
                    {user?.username || 'Admin'}
                  </div>
                  <div className="text-xs text-cool-gray">{user?.email || 'admin@example.com'}</div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-charcoal border-glass-border" align="end">
              <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-glass-border" />
              <DropdownMenuItem 
                onClick={handleViewSite}
                className="text-cool-gray hover:text-white hover:bg-glass-white cursor-pointer"
                data-testid="menu-view-site"
              >
                <Eye className="mr-2 h-4 w-4" />
                <span>View Site</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLocation('/admin/settings/profile')}
                className="text-cool-gray hover:text-white hover:bg-glass-white cursor-pointer"
                data-testid="menu-profile-settings"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-glass-border" />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="text-red-400 hover:text-red-300 hover:bg-red-900/20 cursor-pointer"
                data-testid="menu-logout"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:pl-0">
        {/* Top Bar */}
        <header className="bg-charcoal/50 backdrop-blur-xl border-b border-glass-border h-16 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-cool-gray hover:text-white p-2"
              data-testid="button-open-sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="hidden lg:block">
              <h1 className="text-lg font-semibold text-white">
                {navigation.find(item => currentPath === item.href || currentPath.startsWith(item.href + '/'))?.name || 'Dashboard'}
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewSite}
              className="border-glass-border text-cool-gray hover:text-white hover:border-electric-cyan"
              data-testid="button-view-site-header"
            >
              <Eye className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">View Site</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation('/')}
              className="border-glass-border text-cool-gray hover:text-white hover:border-electric-cyan"
              data-testid="button-home"
            >
              <Home className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}