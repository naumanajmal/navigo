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
                Our dedicated team of experts works tirelessly to provide clear, straightforward guidance at every step. Whether you&apos;re a first-time homebuyer or looking to upgrade your living space, we&apos;re here to make the journey seamless. We firmly believe that purchasing a home should be a moment of celebration, not a source of anxiety. That&apos;s why our motto is, &quot;Making home buying a moment of celebration, not a stressful event.&quot;
              </p>
            </motion.div>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Navigo was founded with a vision to transform the home buying experience. Through innovative digital tools, a user-friendly platform, and personalized support, we&apos;ve redefined what it means to find a home.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team combines years of expertise in real estate with cutting-edge technology to create a more accessible, efficient, and enjoyable process for our clients. By fostering open and honest relationships, we build long-lasting partnerships.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                At Navigo, we&apos;re not just making home buying easier—we&apos;re making it a joyful experience. Let us help you turn your dreams of homeownership into reality, with ease, transparency, and support every step of the way.
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
                content: "We prioritize our clients' needs, ensuring a smooth and rewarding home-buying journey through personalized solutions and attentive support.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: 'Respect & Empathy',
                content: "We value every client's unique experience and treat them with kindness and understanding to build lasting relationships.",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      {/* Temporarily hidden as requested
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
              <h2 className="text-[38px] font-bold mb-6 text-primary leading-[1.1]">
                Message from Our Managing Partner
              </h2>
              <blockquote className="text-xl sm:text-2xl font-light italic text-gray-600 mb-6 text-center md:text-left">
                &quot;Dream about your home, we&apos;ll make it a reality!&quot;
              </blockquote>
              <p className="text-base sm:text-lg text-gray-600 mb-8 text-center md:text-left">
                At Navigo, we understand that buying a home is more than just a transaction - it&apos;s a milestone in your life&apos;s journey. Our commitment goes beyond providing mortgage solutions; we&apos;re here to make your dream of homeownership a celebration, not a source of stress.
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
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-contain px-8 pt-8"
              />
            </div>
          </motion.div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
};


export default AboutUs;
