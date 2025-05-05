
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-careBlue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Connecting Elders, Caregivers, and Families
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                CareConnect provides a comprehensive platform to coordinate senior care, 
                track health metrics, and keep family members informed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="bg-careBlue-600 hover:bg-careBlue-700 text-lg py-6 px-8">
                    Get Started
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" className="text-lg py-6 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Senior woman with caregiver" 
                  className="rounded-xl w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tailored For Everyone</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-t-4 border-careBlue-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-careBlue-800">For Elders</h3>
                <p className="text-gray-700 mb-4">
                  Simple, large-text interface designed with accessibility in mind. 
                  Medication reminders, emergency contacts, and easy communication with family.
                </p>
                <Link to="/login?type=elder">
                  <Button variant="outline" className="w-full mt-4">
                    Elder Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-t-4 border-careGreen-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-careGreen-800">For Caregivers</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive tools for managing care plans, tracking tasks, 
                  documenting health metrics, and coordinating with family members.
                </p>
                <Link to="/login?type=caregiver">
                  <Button variant="outline" className="w-full mt-4">
                    Caregiver Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-t-4 border-carePurple-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-carePurple-800">For Families</h3>
                <p className="text-gray-700 mb-4">
                  Stay connected with your loved ones through activity feeds, 
                  appointment calendars, and direct communication with caregivers.
                </p>
                <Link to="/login?type=family">
                  <Button variant="outline" className="w-full mt-4">
                    Family Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-careBlue-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-careBlue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medication Tracking</h3>
              <p className="text-gray-600">
                Schedule and track medications with reminders and adherence reporting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-careGreen-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-careGreen-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care Coordination</h3>
              <p className="text-gray-600">
                Seamlessly coordinate care tasks between family members and professional caregivers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-carePurple-100 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-carePurple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Monitoring</h3>
              <p className="text-gray-600">
                Track and visualize important health metrics over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-careBlue-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-careBlue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Appointment Calendar</h3>
              <p className="text-gray-600">
                Manage and remind about upcoming doctor visits and important events.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-careGreen-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-careGreen-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Messaging</h3>
              <p className="text-gray-600">
                Private and secure communication between family members and caregivers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-carePurple-100 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-carePurple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Activity Reports</h3>
              <p className="text-gray-600">
                Regular reports on elder activities, care tasks, and health status.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-careBlue-600 to-careGreen-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect Your Care Circle?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start coordinating care, sharing updates, and bringing peace of mind to everyone involved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-careBlue-700 hover:bg-gray-100 text-lg py-6 px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CareConnect</h3>
              <p className="text-gray-400">
                Connecting elders, caregivers, and families through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dashboards</h4>
              <ul className="space-y-2">
                <li><Link to="/login?type=elder" className="text-gray-400 hover:text-white transition-colors">Elder Dashboard</Link></li>
                <li><Link to="/login?type=caregiver" className="text-gray-400 hover:text-white transition-colors">Caregiver Dashboard</Link></li>
                <li><Link to="/login?type=family" className="text-gray-400 hover:text-white transition-colors">Family Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Care Street</p>
                <p>Suite 456</p>
                <p>San Francisco, CA 94103</p>
                <p className="mt-2">support@careconnect.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 CareConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
