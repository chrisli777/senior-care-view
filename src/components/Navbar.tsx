
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-care flex items-center justify-center">
              <span className="text-white font-bold text-xl">CC</span>
            </div>
            <span className="text-xl font-bold text-careBlue-700">CareConnect</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-careBlue-600 transition-colors">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-careBlue-600 transition-colors">Features</Link>
            <Link to="/about" className="text-gray-700 hover:text-careBlue-600 transition-colors">About</Link>
            <Link to="/login">
              <Button variant="outline" className="mr-2">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-careBlue-600 hover:bg-careBlue-700">Get Started</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 py-3 space-y-3 animate-fade-in">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-careBlue-50">Home</Link>
            <Link to="/features" className="block px-3 py-2 rounded-md hover:bg-careBlue-50">Features</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-careBlue-50">About</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="w-full bg-careBlue-600 hover:bg-careBlue-700">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
