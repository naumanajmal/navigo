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
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[52px] font-bold pb-4 sm:pb-6 md:pb-10 text-primary text-center lg:text-left">About Us</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                At Navigo, we understand that the journey to homeownership can be overwhelming and costly, filled with uncertainties and complexities. Our mission is to simplify this process, ensuring that every individual can experience the joy of home buying without the stress.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                Our dedicated team of experts works tirelessly to provide clear, straightforward guidance at every step. Whether you&apos;re a first-time homebuyer or looking to upgrade your living space, we&apos;re here to make the journey seamless. We firmly believe that purchasing a home should be a moment of celebration, not a source of anxiety. That&apos;s why our motto is, <span className="font-semibold text-primary">&quot;Making home buying a moment of celebration, not a stressful event.&quot;</span>
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                Navigo was founded with a vision to transform the home buying experience. Through innovative digital tools, a user-friendly platform, and personalized support, we&apos;ve redefined what it means to find a home. We focus on transparency, communication, and trust, ensuring that you are empowered with the knowledge and confidence you need to make informed decisions.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                Our team combines years of expertise in real estate with cutting-edge technology to create a more accessible, efficient, and enjoyable process for our clients. By fostering open and honest relationships, we build long-lasting partnerships that extend beyond just a transaction – we&apos;re here to guide you on your journey to finding a place to call home.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
                At Navigo, we&apos;re not just making home buying easier—we&apos;re making it a joyful experience. Let us help you turn your dreams of homeownership into reality, with ease, transparency, and support every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
            <h2 className="text-[38px] font-bold mb-6 text-primary inline-block">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Navigo, our core values shape how we operate and guide our interactions with clients and partners. These principles ensure we deliver exceptional service and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Client-Centric Approach',
                content: 'We prioritize our clients&apos; needs, ensuring a smooth and rewarding home-buying journey through personalized solutions and attentive support.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'Respect & Empathy',
                content: 'We value every client&apos;s unique experience and treat them with kindness and understanding to build lasting relationships.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Excellence in Service',
                content: 'We are committed to delivering top-notch service at every step, constantly improving to exceed expectations.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              },
              {
                title: 'Collaboration & Partnerships',
                content: 'We believe in the power of collaboration. By building strong partnerships, we combine expertise and resources to create the best solutions for our clients.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Commitment to Growth & Innovation',
                content: 'We are dedicated to continuous growth and innovation, staying ahead of industry trends to provide the most efficient and modern home-buying experience.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Integrity & Transparency',
                content: 'We prioritize honesty and transparency in all our dealings. Our commitment to integrity ensures that clients can trust us to provide clear, reliable advice and services.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-primary/5"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-all duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
