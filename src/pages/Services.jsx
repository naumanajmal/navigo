import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { services } from '../components/services/servicesData.jsx'
import ContactSection from '../components/ContactSection'
import FAQ from '../components/FAQ'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-lexend">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30 animate-gradient"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url(data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)"}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-up px-4 sm:px-0">
              Our Complete Range of
              <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent"> Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 px-4 sm:px-6 md:px-0">
              Discover our comprehensive range of mortgage and financial services designed to meet your unique needs
            </p>
          </div>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up animation-delay-400">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1 relative flex flex-col h-full"
              >
                <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-secondary text-sm sm:text-base font-medium mb-3 sm:mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="mt-6 sm:mt-7 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center justify-center w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-500 shadow-lg hover:shadow-xl active:scale-[0.98] group-hover:translate-y-0 relative overflow-hidden before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-10"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* FAQ Section */}
      <FAQ />

      <ContactSection />
      
      <Footer />
    </div>
  )
}

export default Services
