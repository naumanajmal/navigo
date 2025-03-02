import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen font-lexend">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-28 sm:pt-40 pb-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/real-estate-purchase-concept-idea.jpg"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-center text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Navigo</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission and Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Navigo, we're dedicated to simplifying the mortgage journey for everyone. 
              We believe that finding and securing the right mortgage should be transparent, 
              straightforward, and accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a team of mortgage experts, financial advisors, and technology 
              enthusiasts working together to revolutionize the mortgage industry. 
              With years of experience in finance and real estate, we understand the 
              challenges that come with mortgage applications.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            Our Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Transparency',
              content: 'We believe in complete transparency throughout the mortgage process, ensuring you understand every step of your journey.',
              delay: 0
            },
            {
              title: 'Innovation',
              content: 'We leverage cutting-edge technology to provide you with the most efficient and user-friendly mortgage experience possible.',
              delay: 0.2
            },
            {
              title: 'Customer First',
              content: 'Your success is our success. We\'re committed to providing personalized solutions that meet your unique needs.',
              delay: 0.4
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: value.delay }}
              className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {value.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {value.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default AboutUs;
