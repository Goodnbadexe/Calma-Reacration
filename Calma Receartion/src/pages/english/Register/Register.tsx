import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star,
  Shield,
  Bell,
  Gift
} from 'lucide-react';
import './Register.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  propertyType: string;
  budget: string;
  timeline: string;
  message: string;
  newsletter: boolean;
  updates: boolean;
  privacy: boolean;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    propertyType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    updates: false,
    privacy: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsLoading(false);
    
    // Reset form or show success message
    alert('Thank you for your interest! We will contact you soon.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="register-page">
      {/* Hero Section */}
      <section className="register-hero">
        <motion.div 
          className="register-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Register Your Interest</h1>
          <p>
            Join the exclusive Calma community and be the first to discover our luxury real estate opportunities. 
            Share your preferences and let us find the perfect property that matches your vision.
          </p>
        </motion.div>
      </section>

      {/* Registration Form */}
      <section className="register-form-section">
        <div className="form-container">
          <motion.div 
            className="register-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="form-header" variants={itemVariants}>
              <h2>Tell Us About Yourself</h2>
              <p>Help us understand your preferences to provide personalized recommendations</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="form-grid">
              {/* Personal Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </motion.div>

              {/* Location Information */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your country</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="QA">Qatar</option>
                    <option value="KW">Kuwait</option>
                    <option value="BH">Bahrain</option>
                    <option value="OM">Oman</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </motion.div>

              {/* Property Preferences */}
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="propertyType">Property Type of Interest</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="luxury-villa">Luxury Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="office">Office Space</option>
                    <option value="retail">Retail Space</option>
                    <option value="mixed-use">Mixed Use</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-25m">$10M - $25M</option>
                    <option value="25m-50m">$25M - $50M</option>
                    <option value="over-50m">Over $50M</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="timeline">Purchase Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (0-3 months)</option>
                  <option value="short-term">Short term (3-6 months)</option>
                  <option value="medium-term">Medium term (6-12 months)</option>
                  <option value="long-term">Long term (1+ years)</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your requirements, preferences, or any specific questions you have..."
                  rows={4}
                />
              </motion.div>

              {/* Preferences */}
              <motion.div className="checkbox-group" variants={itemVariants}>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="newsletter">
                    Subscribe to our newsletter for market insights and exclusive opportunities
                  </label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="updates"
                    name="updates"
                    checked={formData.updates}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="updates">
                    Receive updates about new projects and investment opportunities
                  </label>
                </div>
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="privacy">
                    I agree to the Privacy Policy and Terms of Service *
                  </label>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className={`submit-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading || !formData.privacy}
                >
                  {isLoading ? 'Submitting...' : 'Register Interest'}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <motion.div 
            className="benefits-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Register with Calma?</h2>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="benefit-card" variants={itemVariants}>
              <Star className="benefit-icon" />
              <h3>Exclusive Access</h3>
              <p>Be the first to know about new luxury properties and investment opportunities before they go public.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={itemVariants}>
              <Shield className="benefit-icon" />
              <h3>Personalized Service</h3>
              <p>Receive tailored recommendations based on your preferences and investment goals.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={itemVariants}>
              <Bell className="benefit-icon" />
              <h3>Market Insights</h3>
              <p>Get exclusive market reports, trends analysis, and investment insights from our experts.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={itemVariants}>
              <Gift className="benefit-icon" />
              <h3>VIP Events</h3>
              <p>Invitations to exclusive property viewings, launch events, and networking opportunities.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
