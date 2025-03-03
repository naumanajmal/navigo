import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-lexend">
      <Navbar />
      
      {/* Hero Section - About Us */}
      <section className="py-8 md:py-16 bg-white pt-28 md:pt-32" id="about">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-24 pt-8 md:pt-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="/real-estate-purchase-concept-idea.jpg"
                alt="Team of mortgage professionals"
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[52px] font-bold pb-4 sm:pb-6 md:pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center lg:text-left">About Us</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                The Navigo team understands how complicated and expensive the process is. Our team is dedicated to making the process of home buying easy for everyone. Our motto is "making home buying a moment of celebration not a stressful event." Navigo brought this dream to life making home buying a simple process and easy for everyone. Our digitized and expert team builds transparent relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 pb-20 bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
        
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-[38px] font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We are a company of proactive, professional and commitment. We are not just a team,
              but committed to make the mortgage process easy for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Mortgage Access',
                content: 'Access to all mortgage and home loan plans',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: 'Financial Solutions',
                content: 'Plans for all type of financial needs',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: '24/7 Support',
                content: 'Experts available 24X7',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Best Plans',
                content: 'Negotiating the best plans',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Transparent Fees',
                content: 'No hidden fees',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Long-term Partnership',
                content: 'Long-term relationship',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'Expert Team',
                content: 'Experienced people on department',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
   

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0 order-2 md:order-1">
              <h2 className="text-[38px] font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Message from Our Managing Partner
              </h2>
              <blockquote className="text-xl sm:text-2xl font-light italic text-gray-600 mb-6 text-center md:text-left">
                "Dream about your home, we'll make it a reality!"
              </blockquote>
              <p className="text-base sm:text-lg text-gray-600 mb-8 text-center md:text-left">
                At Navigo, we understand that buying a home is more than just a transaction - it's a milestone in your life's journey. Our commitment goes beyond providing mortgage solutions; we're here to make your dream of homeownership a celebration, not a source of stress.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nimish Modi</h3>
                  <p className="text-gray-600">Managing Partner</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 sm:px-0 order-1 md:order-2">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                src="/nimishimg.JPG"
                alt="Nimish Modi - Managing Partner"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      
      </section>

      <Footer />
    </div>
  );
};


export default AboutUs;
