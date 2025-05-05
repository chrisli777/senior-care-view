
import DashboardSidebar from '../components/DashboardSidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChartBar, User, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const CaregiverDashboard = () => {
  // Mock data for caregiver dashboard
  const todaysTasks = [
    { id: 1, title: "Morning Medication", patient: "Margaret Wilson", time: "8:00 AM", priority: "high", completed: true },
    { id: 2, title: "Physical Therapy", patient: "Margaret Wilson", time: "10:30 AM", priority: "medium", completed: false },
    { id: 3, title: "Blood Pressure Check", patient: "John Davis", time: "1:15 PM", priority: "medium", completed: false },
    { id: 4, title: "Evening Medication", patient: "Margaret Wilson", time: "6:00 PM", priority: "high", completed: false },
    { id: 5, title: "Evening Medication", patient: "John Davis", time: "7:00 PM", priority: "high", completed: false }
  ];
  
  const patients = [
    { id: 1, name: "Margaret Wilson", age: 78, status: "Stable", lastVisit: "Today" },
    { id: 2, name: "John Davis", age: 82, status: "Needs Attention", lastVisit: "Yesterday" },
    { id: 3, name: "Elizabeth Taylor", age: 75, status: "Stable", lastVisit: "May 3, 2025" }
  ];
  
  const recentNotes = [
    { id: 1, patient: "Margaret Wilson", note: "Increased water intake as recommended. Blood pressure normal today.", time: "9:15 AM Today" },
    { id: 2, patient: "John Davis", note: "Complained of mild joint pain. Applied prescribed ointment and noted for doctor.", time: "Yesterday, 4:30 PM" }
  ];
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar userType="caregiver" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Caregiver Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, Lisa Johnson | Tuesday, May 5, 2025</p>
          </header>
          
          {/* Dashboard Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="dashboard-card">
              <CardContent className="p-6 stat-card">
                <div className="text-careGreen-600">
                  <Users className="h-8 w-8" />
                </div>
                <div className="stat-value">3</div>
                <div className="stat-label">Active Patients</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-6 stat-card">
                <div className="text-careGreen-600">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="stat-value">8</div>
                <div className="stat-label">Tasks Today</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-6 stat-card">
                <div className="text-red-500">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="stat-value">2</div>
                <div className="stat-label">High Priority</div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-6 stat-card">
                <div className="text-careGreen-600">
                  <ChartBar className="h-8 w-8" />
                </div>
                <div className="stat-value">92%</div>
                <div className="stat-label">Task Completion</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Today's Tasks */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Today's Tasks</h2>
                  <Link to="/dashboard/caregiver/tasks">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {todaysTasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`caregiver-task task-${task.priority} ${task.completed ? 'opacity-60' : ''}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm text-gray-600">Patient: {task.patient}</p>
                        </div>
                        <span className="text-sm font-medium">{task.time}</span>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          task.priority === 'high' ? 'bg-red-200 text-red-800' : 
                          task.priority === 'medium' ? 'bg-yellow-200 text-yellow-800' : 
                          'bg-green-200 text-green-800'
                        }`}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                        </span>
                        {task.completed ? (
                          <span className="text-sm text-careGreen-700">✓ Complete</span>
                        ) : (
                          <Button size="sm" className="bg-careGreen-600 hover:bg-careGreen-700">
                            Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Patient List */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">My Patients</h2>
                  <Link to="/dashboard/caregiver/patients">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {patients.map(patient => (
                    <div key={patient.id} className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-careGreen-100 flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-careGreen-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{patient.name}</h3>
                        <p className="text-sm text-gray-600">Age: {patient.age} | Last Visit: {patient.lastVisit}</p>
                        <div className="flex mt-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            patient.status === 'Stable' ? 'bg-green-200 text-green-800' : 
                            'bg-yellow-200 text-yellow-800'
                          }`}>
                            {patient.status}
                          </span>
                        </div>
                      </div>
                      <Link to={`/dashboard/caregiver/patients/${patient.id}`}>
                        <Button size="sm" variant="outline">View</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Notes */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Recent Care Notes</h2>
                  <Link to="/dashboard/caregiver/notes">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentNotes.map(note => (
                    <div key={note.id} className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{note.patient}</h3>
                        <span className="text-xs text-gray-500">{note.time}</span>
                      </div>
                      <p className="mt-2 text-gray-700">{note.note}</p>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Button className="w-full bg-careGreen-600 hover:bg-careGreen-700">
                      Add New Note
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Schedule */}
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Upcoming Schedule</h2>
                  <Link to="/dashboard/caregiver/schedule">
                    <Button variant="outline" size="sm">Full Schedule</Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-careGreen-50 rounded-lg border border-careGreen-100">
                    <div className="font-semibold">Tomorrow, May 6</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Margaret Wilson - Home Visit</span>
                        <span>9:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Team Meeting</span>
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>John Davis - Home Visit</span>
                        <span>4:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-careGreen-50 rounded-lg border border-careGreen-100">
                    <div className="font-semibold">Thursday, May 7</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Elizabeth Taylor - Home Visit</span>
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Dr. Williams Visit - Margaret Wilson</span>
                        <span>1:00 PM - 2:00 PM</span>
                      </div>
                    </div>
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

export default CaregiverDashboard;
