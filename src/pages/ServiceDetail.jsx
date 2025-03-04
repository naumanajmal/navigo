import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { services } from '../components/services/servicesData'
import { serviceImages } from '../components/services/serviceImages'
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock, FiCheckCircle, FiFileText, FiAward, FiMessageSquare } from 'react-icons/fi'
import { IoDocumentTextOutline, IoTimeOutline, IoCheckmarkCircleOutline, IoArrowForward } from 'react-icons/io5'
import QuoteForm from '../components/form/QuoteForm'
import FAQ from '../components/FAQ'
import ProcessSection from '../components/services/ProcessSection'

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
      
      {/* Service Hero Section - White Background */}
      <section className="bg-white pb-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h2>
            <p className="text-gray-600 text-lg">{service.subtitle}</p>
          </div>
          
          {/* Description and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Left Side - Descriptions */}
            <div className="flex flex-col space-y-8 items-center justify-center">
              <div className="prose max-w-none">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">{service.description_1}</p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{service.description_2}</p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src={`/services/${service.picture}`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <ProcessSection /> */}

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-32 relative">
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
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => handleCloseForm()}
          />
          <div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2     overflow-auto z-50 bg-white rounded-2xl shadow-2xl  "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end items-center  p-4">
              <button
                type="button"
                onClick={handleCloseForm}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <QuoteForm onClose={handleCloseForm} />
          </div>
        </>
      )}

      {/* Eligibility Criteria - White Background */}
      <section className="bg-white py-32">
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
