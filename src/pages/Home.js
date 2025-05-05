
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';
// Import the icons we need from Lucide React
import { Calendar, Users, BarChart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-heading">
                Connecting Elders, Caregivers, and Families
              </h1>
              <p className="hero-description">
                CareConnect provides a comprehensive platform to coordinate senior care, 
                track health metrics, and keep family members informed.
              </p>
              <div className="button-container">
                <Link to="/register" className="primary-button">
                  Get Started
                </Link>
                <Link to="/features" className="secondary-button">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-inner">
                <img 
                  src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Senior woman with caregiver" 
                  className="hero-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* User Types Section */}
      <section className="user-types-section">
        <div className="container">
          <h2 className="section-title">Tailored For Everyone</h2>
          
          <div className="card-grid">
            <div className="card card-blue">
              <div className="card-content">
                <h3 className="card-title title-blue">For Elders</h3>
                <p className="card-description">
                  Simple, large-text interface designed with accessibility in mind. 
                  Medication reminders, emergency contacts, and easy communication with family.
                </p>
                <Link to="/login?type=elder" className="card-button">
                  Elder Dashboard
                </Link>
              </div>
            </div>
            
            <div className="card card-green">
              <div className="card-content">
                <h3 className="card-title title-green">For Caregivers</h3>
                <p className="card-description">
                  Comprehensive tools for managing care plans, tracking tasks, 
                  documenting health metrics, and coordinating with family members.
                </p>
                <Link to="/login?type=caregiver" className="card-button">
                  Caregiver Dashboard
                </Link>
              </div>
            </div>
            
            <div className="card card-purple">
              <div className="card-content">
                <h3 className="card-title title-purple">For Families</h3>
                <p className="card-description">
                  Stay connected with your loved ones through activity feeds, 
                  appointment calendars, and direct communication with caregivers.
                </p>
                <Link to="/login?type=family" className="card-button">
                  Family Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon icon-blue">
                <Calendar className="icon" size={24} color="#3182ce" />
              </div>
              <h3 className="feature-title">Medication Tracking</h3>
              <p className="feature-description">
                Schedule and track medications with reminders and adherence reporting.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon icon-green">
                <Users className="icon" size={24} color="#38a169" />
              </div>
              <h3 className="feature-title">Care Coordination</h3>
              <p className="feature-description">
                Seamlessly coordinate care tasks between family members and professional caregivers.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon icon-purple">
                <BarChart className="icon" size={24} color="#805ad5" />
              </div>
              <h3 className="feature-title">Health Monitoring</h3>
              <p className="feature-description">
                Track and visualize important health metrics over time.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon icon-blue">
                <Calendar className="icon" size={24} color="#3182ce" />
              </div>
              <h3 className="feature-title">Appointment Calendar</h3>
              <p className="feature-description">
                Manage and remind about upcoming doctor visits and important events.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon icon-green">
                <Users className="icon" size={24} color="#38a169" />
              </div>
              <h3 className="feature-title">Secure Messaging</h3>
              <p className="feature-description">
                Private and secure communication between family members and caregivers.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon icon-purple">
                <BarChart className="icon" size={24} color="#805ad5" />
              </div>
              <h3 className="feature-title">Activity Reports</h3>
              <p className="feature-description">
                Regular reports on elder activities, care tasks, and health status.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Connect Your Care Circle?</h2>
          <p className="cta-description">
            Start coordinating care, sharing updates, and bringing peace of mind to everyone involved.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="cta-primary-button">
              Get Started
            </Link>
            <Link to="/contact" className="cta-secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">CareConnect</h3>
              <p className="footer-description">
                Connecting elders, caregivers, and families through technology.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><Link to="/" className="footer-link">Home</Link></li>
                <li className="footer-link-item"><Link to="/features" className="footer-link">Features</Link></li>
                <li className="footer-link-item"><Link to="/about" className="footer-link">About</Link></li>
                <li className="footer-link-item"><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Dashboards</h4>
              <ul className="footer-links">
                <li className="footer-link-item"><Link to="/login?type=elder" className="footer-link">Elder Dashboard</Link></li>
                <li className="footer-link-item"><Link to="/login?type=caregiver" className="footer-link">Caregiver Dashboard</Link></li>
                <li className="footer-link-item"><Link to="/login?type=family" className="footer-link">Family Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Contact</h4>
              <address className="footer-address">
                <p>123 Care Street</p>
                <p>Suite 456</p>
                <p>San Francisco, CA 94103</p>
                <p style={{ marginTop: '0.5rem' }}>support@careconnect.com</p>
              </address>
            </div>
          </div>
          <div className="footer-divider">
            <p>&copy; 2025 CareConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
