import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8fafc]" id="about">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background accent */}
          <div className="absolute top-1/2 left-0 w-full h-[400px] bg-[#00203f]/5 -translate-y-1/2 transform skew-y-3 rounded-3xl"></div>
          
          <div className="relative flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#008cc9]/10 rounded-[2.5rem] transform -rotate-6"></div>
                <div className="absolute -inset-4 bg-[#00203f]/10 rounded-[2.5rem] transform rotate-3"></div>
                <img
                  src="/real-estate-purchase-concept-idea.jpg"
                  alt="Team of mortgage professionals"
                  className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 lg:pl-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative">
                <span className="absolute -top-8 text-[#008cc9]/20 text-8xl font-bold">NAVIGO</span>
                <h2 className="text-6xl font-bold mb-8 text-[#00203f] leading-tight">
                  Your Dream Home <span className="text-[#008cc9]">Awaits</span>
                </h2>
                <div className="h-2 w-20 bg-[#008cc9] rounded-full mb-8"></div>
                <p className="text-gray-700 text-2xl leading-relaxed">
                  At Navigo, we're dedicated to turning your homeownership dreams into reality. With years of experience in the mortgage industry, our team of experts provides personalized solutions tailored to your unique financial situation. We understand that every journey to homeownership is different, which is why we work closely with you to find the perfect mortgage solution that fits your needs and goals.  
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
