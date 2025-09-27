import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  FileText,
  MessageSquare,
  Star,
  Briefcase,
  Users,
  TrendingUp,
  Clock,
  Plus,
  Eye,
  Settings,
  Upload
} from 'lucide-react';

// ===========================================
// ADMIN DASHBOARD HOME
// Comprehensive Analytics & Quick Actions
// ===========================================

interface DashboardStats {
  totalCaseStudies: number;
  totalTestimonials: number;
  totalExperiences: number;
  unreadMessages: number;
  recentActivity: Array<{
    id: string;
    action: string;
    entityType: string;
    createdAt: string;
  }>;
}

export default function AdminDashboard() {
  // Fetch dashboard statistics
  const { data: stats, isLoading } = useQuery<DashboardStats>({
    queryKey: ['/api/dashboard/stats'],
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="glass-morphism border-glass-border animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const quickActions = [
    {
      title: "Add Case Study",
      description: "Create a new project showcase",
      icon: FileText,
      href: "/admin/case-studies/new",
      color: "from-electric-cyan to-blue-500"
    },
    {
      title: "Add Testimonial",
      description: "Include client feedback",
      icon: Star,
      href: "/admin/testimonials/new",
      color: "from-neon-pink to-purple-500"
    },
    {
      title: "Upload Media",
      description: "Add images and assets",
      icon: Upload,
      href: "/admin/media",
      color: "from-neon-green to-green-500"
    },
    {
      title: "Theme Settings",
      description: "Customize appearance",
      icon: Settings,
      href: "/admin/settings/theme",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const statsCards = [
    {
      title: "Case Studies",
      value: stats?.totalCaseStudies || 0,
      description: "Published projects",
      icon: FileText,
      color: "text-electric-cyan",
      href: "/admin/case-studies"
    },
    {
      title: "Testimonials",
      value: stats?.totalTestimonials || 0,
      description: "Client reviews",
      icon: Star,
      color: "text-neon-pink",
      href: "/admin/testimonials"
    },
    {
      title: "Experience",
      value: stats?.totalExperiences || 0,
      description: "Work positions",
      icon: Briefcase,
      color: "text-neon-green",
      href: "/admin/experiences"
    },
    {
      title: "Messages",
      value: stats?.unreadMessages || 0,
      description: "Unread contacts",
      icon: MessageSquare,
      color: "text-yellow-400",
      href: "/admin/messages",
      urgent: (stats?.unreadMessages || 0) > 0
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-cool-gray">
            Welcome to your portfolio management center
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-electric-cyan to-neon-pink hover:from-electric-cyan/90 hover:to-neon-pink/90"
          data-testid="button-view-site"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Site
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => (
          <Card
            key={stat.title}
            className="glass-morphism border-glass-border hover:border-electric-cyan/50 transition-all duration-300 cursor-pointer group"
            data-testid={`card-stat-${stat.title.toLowerCase()}`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-cool-gray">
                {stat.title}
                {stat.urgent && (
                  <Badge className="ml-2 bg-red-500 text-white text-xs">
                    New
                  </Badge>
                )}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">
                {stat.value}
              </div>
              <p className="text-xs text-cool-gray">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-morphism border-glass-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Plus className="h-5 w-5 mr-2 text-electric-cyan" />
              Quick Actions
            </CardTitle>
            <CardDescription className="text-cool-gray">
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action) => (
              <div
                key={action.title}
                className="flex items-center p-4 rounded-lg bg-glass-white border border-glass-border hover:border-electric-cyan/50 transition-all duration-300 cursor-pointer group"
                data-testid={`quick-action-${action.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mr-4`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white group-hover:text-electric-cyan transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-cool-gray">
                    {action.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-morphism border-glass-border">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-electric-cyan" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-cool-gray">
              Latest changes and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            {stats?.recentActivity && stats.recentActivity.length > 0 ? (
              <div className="space-y-4">
                {stats.recentActivity.slice(0, 5).map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center p-3 rounded-lg bg-glass-white border border-glass-border"
                    data-testid={`activity-${activity.id}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center mr-3">
                      <TrendingUp className="h-4 w-4 text-electric-cyan" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white">
                        {activity.action} {activity.entityType}
                      </p>
                      <p className="text-xs text-cool-gray">
                        {new Date(activity.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-cool-gray mx-auto mb-4" />
                <p className="text-cool-gray">No recent activity</p>
                <p className="text-sm text-cool-gray/60">
                  Your actions will appear here
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card className="glass-morphism border-glass-border">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-electric-cyan" />
            Content Overview
          </CardTitle>
          <CardDescription className="text-cool-gray">
            Portfolio content summary and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-glass-white border border-glass-border">
              <div className="text-2xl font-bold text-electric-cyan mb-1">
                {((stats?.totalCaseStudies || 0) / 10 * 100).toFixed(0)}%
              </div>
              <p className="text-sm text-cool-gray">Portfolio Completion</p>
              <p className="text-xs text-cool-gray/60 mt-1">
                Target: 10 case studies
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-glass-white border border-glass-border">
              <div className="text-2xl font-bold text-neon-pink mb-1">
                {stats?.totalTestimonials || 0}
              </div>
              <p className="text-sm text-cool-gray">Social Proof</p>
              <p className="text-xs text-cool-gray/60 mt-1">
                Client testimonials
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-glass-white border border-glass-border">
              <div className="text-2xl font-bold text-neon-green mb-1">
                {stats?.totalExperiences || 0}
              </div>
              <p className="text-sm text-cool-gray">Experience Years</p>
              <p className="text-xs text-cool-gray/60 mt-1">
                Professional positions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}