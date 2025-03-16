import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { services } from '../components/services/servicesData'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiAward } from 'react-icons/fi'
import { IoArrowForward } from 'react-icons/io5'
import QuoteForm from '../components/form/QuoteForm'
import FAQ from '../components/FAQ'

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  // Find the service by id
  const service = services.find(s => s.id.toString() === id)
  
  // If service not found, redirect to services page
  if (!service) {
    navigate('/services')
    return null
  }

  const handleOpenForm = () => {
    console.log('Opening form...') // Debug log
    console.log('showQuoteForm before:', showQuoteForm) // Additional debug
    setShowQuoteForm(true)
    console.log('showQuoteForm after:', showQuoteForm) // Additional debug
  }
  
  const handleCloseForm = () => {
    console.log('Closing form...') // Debug log
    console.log('showQuoteForm before:', showQuoteForm) // Additional debug
    setShowQuoteForm(false)
    console.log('showQuoteForm after:', showQuoteForm) // Additional debug
  }

  return (
    <div className="font-lexend overflow-hidden">
      <Navbar />
      
      {/* Service Hero Section - Enhanced with gradient background and design elements */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract shapes */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#008cc9" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00203f" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M300,150 L300,650 L600,150 L900,650 L900,150" fill="none" stroke="url(#service-grad)" strokeWidth="120" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="300" cy="150" r="50" fill="url(#service-grad)" />
            <circle cx="900" cy="150" r="50" fill="url(#service-grad)" />
          </svg>
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#008cc920_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#00203f20_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Title and Subtitle with enhanced styling */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{service.title}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">{service.subtitle}</p>
          </div>
          
          {/* Description and Image Grid with enhanced styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Side - Image with enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src={`/services/${service.picture}`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                
                {/* Service highlights overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-primary/0 p-6 pt-20">
                  <ul className="flex flex-wrap gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Left Side - Descriptions with card styling */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-8 order-2 lg:order-1"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10">
                <div className="prose max-w-none">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{service.description_1}</p>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{service.description_2}</p>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleOpenForm}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
                  >
                    Get Started Now
                    <IoArrowForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <ProcessSection /> */}

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-6 sm:py-8 md:py-12 lg:py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.benefits?.title || 'Benefits'}</h2>
            <p className="text-gray-600">Discover the advantages of our service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits?.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 ">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <FiAward className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center relative z-20 pointer-events-auto">
            <button
              type="button"
              onClick={handleOpenForm}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative"
            >
              Get a Quote Now
              <IoArrowForward className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote Form Dialog */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl   w-full max-w-md relative  ">
            <button
              type="button"
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <QuoteForm onClose={handleCloseForm} />
          </div>
        </div>
      )}

      {/* Eligibility Criteria - White Background */}
      <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.eligibility?.title || 'Eligibility Criteria'}</h2>
            <p className="text-gray-600">Check if you meet the requirements to apply for this service</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {service.eligibility?.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 ">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <FiCheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-700">
                    <span className="font-bold">{item.split(':')[0]}</span>
                    {item.includes(':') ? ':' : ''}{item.split(':')[1] || ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && <FAQ faqData={service.faqs} />}

     

      <Footer />
    </div>
  );
};

export default ServiceDetail;
