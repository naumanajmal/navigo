import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-white" id="about">
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
              src="https://img.freepik.com/free-photo/realtor-showing-senior-couple-around-new-house_329181-19599.jpg"
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
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold pb-4 sm:pb-6 md:pb-10 text-primary leading-[1.15]">Why choose Navigo?</h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              At Navigo, we make the homeownership process simple by finding the best mortgage rates in UAE for you—all at one place!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Access to all mortgage and home loan options</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Plans for all types of financial needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Experts available 24x7</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Negotiating the best plans</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">No hidden fees</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Long-term relationship</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Experienced people in every department</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
