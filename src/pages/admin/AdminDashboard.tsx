import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Activity, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Admins',
      value: '3',
      description: 'Active admin users',
      icon: Users,
      trend: '+1 from last month'
    },
    {
      title: 'Content Items',
      value: '12',
      description: 'Published content pieces',
      icon: FileText,
      trend: '+3 from last week'
    },
    {
      title: 'Page Views',
      value: '2,847',
      description: 'This month',
      icon: Activity,
      trend: '+12% from last month'
    },
    {
      title: 'Conversions',
      value: '89',
      description: 'Sign-ups this month',
      icon: TrendingUp,
      trend: '+23% from last month'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Content updated',
      description: 'Hero section content was modified',
      timestamp: '2 hours ago',
      user: 'Admin User'
    },
    {
      id: 2,
      action: 'Admin added',
      description: 'New admin user was created',
      timestamp: '1 day ago',
      user: 'Admin User'
    },
    {
      id: 3,
      action: 'Pricing updated',
      description: 'Pro plan pricing was modified',
      timestamp: '3 days ago',
      user: 'Admin User'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Welcome to your admin dashboard. Here's what's happening with your site.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {stat.description}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Recent Activity</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              Latest changes and updates to your site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {activity.description}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {activity.timestamp} by {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Quick Actions</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="font-medium text-slate-900 dark:text-white">Add New Admin</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Create a new administrator account</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="font-medium text-slate-900 dark:text-white">Update Content</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Modify landing page content</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="font-medium text-slate-900 dark:text-white">View Analytics</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Check site performance metrics</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;