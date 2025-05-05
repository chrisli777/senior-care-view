
import DashboardSidebar from '../components/DashboardSidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChartBar, User, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const FamilyDashboard = () => {
  // Mock data for family dashboard
  const recentActivity = [
    { id: 1, type: "medication", description: "Morning medications taken", time: "8:15 AM Today", caregiver: "Lisa Johnson" },
    { id: 2, type: "vitals", description: "Blood pressure measured: 128/82", time: "8:30 AM Today", caregiver: "Lisa Johnson" },
    { id: 3, type: "activity", description: "Completed morning walk - 15 minutes", time: "9:45 AM Today", caregiver: "Lisa Johnson" },
    { id: 4, type: "meal", description: "Breakfast: Oatmeal and fruit", time: "8:00 AM Today", caregiver: "Lisa Johnson" },
    { id: 5, type: "note", description: "Mom seemed in good spirits today, engaged well during conversation.", time: "10:30 AM Today", caregiver: "Lisa Johnson" }
  ];
  
  const upcomingAppointments = [
    { id: 1, title: "Dr. Williams - Checkup", date: "Thursday, May 7", time: "10:30 AM", location: "Memorial Medical Center" },
    { id: 2, title: "Physical Therapy", date: "Monday, May 11", time: "2:00 PM", location: "Wellness Rehabilitation" }
  ];
  
  const caregivers = [
    { id: 1, name: "Lisa Johnson", role: "Primary Caregiver", schedule: "Mon-Wed-Fri", contact: "(555) 123-7890" },
    { id: 2, name: "Robert Chen", role: "Weekend Caregiver", schedule: "Sat-Sun", contact: "(555) 456-7890" },
    { id: 3, name: "Sarah Williams", role: "Substitute Caregiver", schedule: "As needed", contact: "(555) 987-6543" }
  ];
  
  const healthMetrics = [
    { id: 1, metric: "Blood Pressure", value: "128/82", status: "normal", trend: "stable" },
    { id: 2, metric: "Heart Rate", value: "72 bpm", status: "normal", trend: "stable" },
    { id: 3, metric: "Weight", value: "148 lbs", status: "normal", trend: "stable" },
    { id: 4, metric: "Glucose", value: "110 mg/dL", status: "normal", trend: "improving" }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar userType="family" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Family Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, Michael Smith | Tuesday, May 5, 2025</p>
          </header>
          
          {/* Status Overview */}
          <Card className="dashboard-card mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-xl font-bold flex items-center">
                    <User className="mr-2 h-5 w-5 text-carePurple-600" />
                    Margaret Wilson's Status
                  </h2>
                  <p className="text-lg text-gray-600 mt-1">Your mother is doing well today</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                  Status: Good
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                {healthMetrics.map(metric => (
                  <div key={metric.id} className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="text-sm text-gray-500">{metric.metric}</div>
                    <div className="text-xl font-bold mt-1">{metric.value}</div>
                    <div className={`text-sm mt-1 ${
                      metric.status === 'normal' ? 'text-green-600' : 
                      metric.status === 'attention' ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>
                      {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                      {metric.trend === 'improving' && ' ▲'}
                      {metric.trend === 'declining' && ' ▼'}
                      {metric.trend === 'stable' && ' ◆'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Activity Feed */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Recent Activity</h2>
                  <Link to="/dashboard/family/activity">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentActivity.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'medication' ? 'bg-carePurple-100 text-carePurple-600' : 
                        activity.type === 'vitals' ? 'bg-red-100 text-red-600' : 
                        activity.type === 'activity' ? 'bg-blue-100 text-blue-600' : 
                        activity.type === 'meal' ? 'bg-green-100 text-green-600' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {activity.type === 'medication' && <Calendar className="h-5 w-5" />}
                        {activity.type === 'vitals' && <ChartBar className="h-5 w-5" />}
                        {activity.type === 'activity' && <User className="h-5 w-5" />}
                        {activity.type === 'meal' && <Calendar className="h-5 w-5" />}
                        {activity.type === 'note' && <Calendar className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{activity.description}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                          <span className="text-sm text-gray-500">{activity.time}</span>
                          <span className="text-sm text-carePurple-600">{activity.caregiver}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Appointments */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Upcoming Appointments</h2>
                  <Link to="/dashboard/family/appointments">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map(appointment => (
                    <div key={appointment.id} className="p-4 bg-carePurple-50 rounded-lg border border-carePurple-100">
                      <h3 className="font-semibold text-carePurple-900">{appointment.title}</h3>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-carePurple-700" />
                          <span>{appointment.date} at {appointment.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-carePurple-700" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" className="flex-1 bg-carePurple-600 hover:bg-carePurple-700">Add to Calendar</Button>
                        <Button size="sm" variant="outline" className="flex-1">Reschedule</Button>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Button className="w-full bg-carePurple-600 hover:bg-carePurple-700">
                      Schedule New Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Care Team */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Care Team</h2>
                  <Link to="/dashboard/family/caregivers">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {caregivers.map(caregiver => (
                    <div key={caregiver.id} className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-carePurple-100 flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-carePurple-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{caregiver.name}</h3>
                        <p className="text-sm text-gray-600">{caregiver.role}</p>
                        <p className="text-sm text-gray-500">Schedule: {caregiver.schedule}</p>
                      </div>
                      <Button size="sm" className="bg-carePurple-600 hover:bg-carePurple-700">
                        Contact
                      </Button>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      Message Care Team
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Notes */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Caregiver Notes</h2>
                  <Link to="/dashboard/family/notes">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-carePurple-700">Lisa Johnson</span>
                      <span className="text-xs text-gray-500">Today, 10:30 AM</span>
                    </div>
                    <p className="mt-2 text-gray-700">
                      Margaret had a good morning. She completed all her exercises and seemed in good spirits. 
                      She particularly enjoyed the new puzzle book you brought last week.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-carePurple-700">Lisa Johnson</span>
                      <span className="text-xs text-gray-500">Yesterday, 4:45 PM</span>
                    </div>
                    <p className="mt-2 text-gray-700">
                      We went for a 15-minute walk in the garden today. Margaret mentioned she'd like to have some new flowers 
                      planted in the spring. Blood pressure was good at 130/84.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      Add Note for Caregivers
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyDashboard;
