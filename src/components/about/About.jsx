import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-8 md:py-16 bg-white" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <motion.div 
            className="lg:w-1/2"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 sm:pb-6 md:pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Find Your Dream</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
              At Navigo, we're dedicated to turning your homeownership dreams into reality. With years of experience in the mortgage industry, our team of experts provides personalized solutions tailored to your unique financial situation. We understand that every journey to homeownership is different, which is why we work closely with you to find the perfect mortgage solution that fits your needs and goals.  
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
