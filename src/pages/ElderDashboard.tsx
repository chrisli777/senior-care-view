
import { Link } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Users } from "lucide-react";

const ElderDashboard = () => {
  // Mock data for elder dashboard
  const upcomingMedications = [
    { id: 1, name: "Lisinopril", time: "8:00 AM", instructions: "Take with food" },
    { id: 2, name: "Metformin", time: "1:00 PM", instructions: "Take after lunch" },
    { id: 3, name: "Atorvastatin", time: "8:00 PM", instructions: "Take with dinner" }
  ];
  
  const emergencyContacts = [
    { id: 1, name: "Dr. Sarah Johnson", relationship: "Primary Doctor", phone: "(555) 123-4567" },
    { id: 2, name: "Michael Smith", relationship: "Son", phone: "(555) 987-6543" },
    { id: 3, name: "CareConnect Support", relationship: "Care Service", phone: "(800) 555-1234" }
  ];
  
  const upcomingVisits = [
    { id: 1, visitor: "Lisa Smith", relationship: "Caregiver", date: "Today, 2:00 PM" },
    { id: 2, visitor: "Dr. Williams", relationship: "Doctor", date: "May 7, 10:30 AM" }
  ];
  
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar userType="elder" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="elder-dashboard p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Good Morning, Margaret</h1>
            <p className="text-xl text-gray-600 mt-2">Today is Tuesday, May 5, 2025</p>
          </header>
          
          {/* Emergency Button */}
          <div className="mb-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white text-xl py-6 px-10 rounded-xl shadow-lg">
              Emergency Assistance
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Medication Reminders */}
            <Card className="dashboard-card border-t-4 border-careBlue-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-6 w-6 text-careBlue-600" />
                  Today's Medications
                </h2>
                <div className="space-y-4">
                  {upcomingMedications.map(med => (
                    <div key={med.id} className="p-4 bg-careBlue-50 rounded-lg border border-careBlue-100">
                      <div className="flex justify-between">
                        <span className="font-bold text-xl">{med.name}</span>
                        <span className="text-careBlue-800">{med.time}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{med.instructions}</p>
                    </div>
                  ))}
                  <Link to="/dashboard/elder/medications">
                    <Button variant="outline" className="w-full mt-2">
                      View All Medications
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Emergency Contacts */}
            <Card className="dashboard-card border-t-4 border-careGreen-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Users className="mr-2 h-6 w-6 text-careGreen-600" />
                  Emergency Contacts
                </h2>
                <div className="space-y-4">
                  {emergencyContacts.map(contact => (
                    <div key={contact.id} className="p-4 bg-careGreen-50 rounded-lg border border-careGreen-100">
                      <div className="font-bold text-xl">{contact.name}</div>
                      <div className="text-gray-600">{contact.relationship}</div>
                      <Button 
                        className="mt-2 bg-careGreen-600 hover:bg-careGreen-700 w-full"
                      >
                        Call: {contact.phone}
                      </Button>
                    </div>
                  ))}
                  <Link to="/dashboard/elder/contacts">
                    <Button variant="outline" className="w-full mt-2">
                      View All Contacts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Visits */}
            <Card className="dashboard-card border-t-4 border-carePurple-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <User className="mr-2 h-6 w-6 text-carePurple-600" />
                  Upcoming Visits
                </h2>
                <div className="space-y-4">
                  {upcomingVisits.map(visit => (
                    <div key={visit.id} className="p-4 bg-carePurple-50 rounded-lg border border-carePurple-100">
                      <div className="font-bold text-xl">{visit.visitor}</div>
                      <div className="text-gray-600">{visit.relationship}</div>
                      <div className="text-carePurple-800 mt-1 font-medium">{visit.date}</div>
                    </div>
                  ))}
                  <Link to="/dashboard/elder/calendar">
                    <Button variant="outline" className="w-full mt-2">
                      View Full Calendar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Today's Activities */}
            <Card className="dashboard-card border-t-4 border-careBlue-600">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-6 w-6 text-careBlue-600" />
                  Today's Activities
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-careBlue-50 rounded-lg border border-careBlue-100">
                    <div className="font-bold text-xl">Morning Walk</div>
                    <div className="text-gray-600">9:00 AM - with Caregiver Lisa</div>
                  </div>
                  <div className="p-4 bg-careBlue-50 rounded-lg border border-careBlue-100">
                    <div className="font-bold text-xl">Lunch</div>
                    <div className="text-gray-600">12:00 PM</div>
                  </div>
                  <div className="p-4 bg-careBlue-50 rounded-lg border border-careBlue-100">
                    <div className="font-bold text-xl">Art Therapy</div>
                    <div className="text-gray-600">3:00 PM - Community Room</div>
                  </div>
                  <Link to="/dashboard/elder/activities">
                    <Button variant="outline" className="w-full mt-2">
                      View All Activities
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderDashboard;
