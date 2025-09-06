import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Zap,
  Activity,
  Clock,
  CheckCircle
} from "lucide-react";

const stats = [
  {
    title: "Total Conversations",
    value: "2,847",
    change: "+12%",
    icon: MessageSquare,
    trend: "up"
  },
  {
    title: "Active Models",
    value: "24",
    change: "+3",
    icon: Bot,
    trend: "up"
  },
  {
    title: "Response Time",
    value: "1.2s",
    change: "-0.3s",
    icon: Clock,
    trend: "up"
  },
  {
    title: "Success Rate",
    value: "98.7%",
    change: "+0.5%",
    icon: CheckCircle,
    trend: "up"
  }
];

const recentActivity = [
  { type: "conversation", user: "John Doe", action: "Started new conversation", time: "2 minutes ago" },
  { type: "model", user: "System", action: "Model GPT-4 deployed", time: "15 minutes ago" },
  { type: "user", user: "Jane Smith", action: "Joined workspace", time: "1 hour ago" },
  { type: "automation", user: "System", action: "Workflow automation completed", time: "2 hours ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your TARX AI platform.
          </p>
        </div>
        <Button>
          <Zap className="h-4 w-4 mr-2" />
          Quick Actions
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingUp className={`h-3 w-3 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest events and updates from your workspace
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start New Conversation
              </Button>
              <Button variant="outline" className="justify-start">
                <Bot className="h-4 w-4 mr-2" />
                Deploy New Model
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="h-4 w-4 mr-2" />
                Invite Team Member
              </Button>
              <Button variant="outline" className="justify-start">
                <Zap className="h-4 w-4 mr-2" />
                Create Automation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Active Models
          </CardTitle>
          <CardDescription>
            Current status of your AI models
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "GPT-4", status: "Active", responses: "1,247", latency: "1.1s" },
              { name: "Claude-3", status: "Active", responses: "892", latency: "0.9s" },
              { name: "Gemini Pro", status: "Standby", responses: "234", latency: "1.4s" },
            ].map((model, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{model.name}</h4>
                  <Badge variant={model.status === "Active" ? "default" : "secondary"}>
                    {model.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Responses: {model.responses}</div>
                  <div>Avg. Latency: {model.latency}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}