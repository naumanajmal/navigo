import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import QuoteForm from '../components/form/QuoteForm';

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-lexend">
      <Navbar />
      
      {/* Main Contact Section */}
      <section id="contact-section" className="py-16 pt-20 sm:pt-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 pt-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                  Our team of experts is ready to assist you with any questions about mortgages, property financing, or our services.
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Office Address */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary/5 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiMapPin className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-600 text-sm">
                        511, Clover Bay, Business Bay, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Phone Number */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-r from-primary/5 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiPhone className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone Number</h3>
                      <p className="text-gray-600 text-sm">
                        <a href="tel:+971552522508" className="hover:text-primary transition-colors">+971 55 252 2508</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Email Address */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-r from-primary/5 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiMail className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:admin@navigo.ae" className="hover:text-primary transition-colors">admin@navigo.ae</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Business Hours */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-primary/5 to-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FiClock className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Media */}
              {/* <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                    <FiInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                    <FiFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                    <FiTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>
                <div className="pr-0">
                  <QuoteForm isContactPage={true} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section - Full Width */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783896247!2d55.2729!3d25.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d353d52701%3A0xea5908e654d1ea82!2sClover%20Bay%20Tower%20-%206a%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1742097910032!5m2!1sen!2sae&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0x1e40af&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc8e1ff&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navigo Office Location"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white py-3 px-5 rounded-xl shadow-lg z-10 flex items-center space-x-3 border-l-4 border-primary">
              <div className="bg-primary p-2 rounded-full">
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Navigo</h3>
                <p className="text-sm text-gray-600">Clover Bay Tower, Business Bay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
