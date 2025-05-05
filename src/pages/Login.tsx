
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Get user type from URL query parameter
  const queryParams = new URLSearchParams(location.search);
  const defaultType = queryParams.get('type') || 'elder';
  
  const [userType, setUserType] = useState<'elder' | 'caregiver' | 'family'>(
    defaultType as 'elder' | 'caregiver' | 'family'
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would authenticate against a backend
    // For now, just navigate to the appropriate dashboard
    toast({
      title: "Success",
      description: "Logging you in...",
    });
    
    navigate(`/dashboard/${userType}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Login to CareConnect</h1>
              <p className="text-gray-600">Access your personal dashboard</p>
            </div>
            
            {/* User Type Selection */}
            <div className="flex border border-gray-200 rounded-lg mb-6">
              <button
                className={`flex-1 py-3 text-center ${userType === 'elder' ? 'bg-careBlue-600 text-white' : 'hover:bg-gray-50'} rounded-l-lg transition-colors`}
                onClick={() => setUserType('elder')}
              >
                Elder
              </button>
              <button
                className={`flex-1 py-3 text-center ${userType === 'caregiver' ? 'bg-careGreen-600 text-white' : 'hover:bg-gray-50'} border-x border-gray-200 transition-colors`}
                onClick={() => setUserType('caregiver')}
              >
                Caregiver
              </button>
              <button
                className={`flex-1 py-3 text-center ${userType === 'family' ? 'bg-carePurple-600 text-white' : 'hover:bg-gray-50'} rounded-r-lg transition-colors`}
                onClick={() => setUserType('family')}
              >
                Family
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-900">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full ${
                    userType === 'elder' ? 'bg-careBlue-600 hover:bg-careBlue-700' : 
                    userType === 'caregiver' ? 'bg-careGreen-600 hover:bg-careGreen-700' : 
                    'bg-carePurple-600 hover:bg-carePurple-700'
                  }`}
                >
                  Login
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-gray-900 hover:underline">
                Sign up
              </Link>
            </div>
            
            {/* Demo Account Quick Access */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-center text-gray-500 mb-3">Demo Quick Access</p>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setUserType('elder');
                    navigate('/dashboard/elder');
                  }}
                >
                  Elder Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setUserType('caregiver');
                    navigate('/dashboard/caregiver');
                  }}
                >
                  Caregiver Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setUserType('family');
                    navigate('/dashboard/family');
                  }}
                >
                  Family Demo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
