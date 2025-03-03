import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { services } from '../components/services/servicesData'
import { serviceImages } from '../components/services/serviceImages'
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock, FiCheckCircle, FiFileText, FiAward, FiMessageSquare } from 'react-icons/fi'
import { IoDocumentTextOutline, IoTimeOutline, IoCheckmarkCircleOutline, IoArrowForward } from 'react-icons/io5'
import QuoteForm from '../components/form/QuoteForm'
import FAQ from '../components/FAQ'

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)

  const [showQuoteForm, setShowQuoteForm] = useState(false)
  
  // Find the service by id
  const service = services.find(s => s.id.toString() === id)
  
  // If service not found, redirect to services page
  if (!service) {
    navigate('/services')
    return null
  }

  const handleOpenForm = () => setShowQuoteForm(true)
  const handleCloseForm = () => setShowQuoteForm(false)



  return (
    <div className="font-lexend overflow-hidden">
      <Navbar />
      


      {/* Service Hero Section - White Background */}
      <section className="bg-white pb-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <div className="flex flex-col order-2 lg:order-1">
              <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold text-primary mb-8">{service.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.description}</p>
           
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features?.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="bg-primary/10 rounded-full p-2">
                      <FiCheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src={service.id === 1 ? 
                    'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg' : 
                    service.id === 2 ? 
                    'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150751.jpg' : 
                    'https://img.freepik.com/free-photo/business-planning-concept-side-view-hands-typing-laptop-with-financial-charts-reports-office-desk_176474-7356.jpg'
                  }
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Gradient Background */}
      <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Process of Service</h2>
            <p className="text-gray-600">Follow our simple step-by-step process to get started with your service application</p>
          </div>
          
          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 md:translate-x-[-1px]"></div>
            
            <div className="space-y-12 relative">
              {[
                { title: 'Application', icon: IoDocumentTextOutline, desc: 'Submit your application with required details' },
                { title: 'Documentation', icon: FiFileText, desc: 'Provide necessary documents and proof' },
                { title: 'Verification', icon: IoCheckmarkCircleOutline, desc: 'We verify your documents and eligibility' },
                { title: 'Approval', icon: FiAward, desc: 'Get your service approved and processed' }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative grid md:grid-cols-2 gap-8 items-center group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Circle on Line */}
                  <div className="absolute left-[-9px] md:left-1/2 top-8 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/10 transition-colors z-10"></div>
                  
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:col-start-1 flex-row-reverse' : 'md:col-start-2 flex-row'}`}>
                    <div className={`hidden md:flex w-16 h-16 rounded-full ${activeStep === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'pl-8 sm:pr-8 sm:text-right' : 'pl-8'}`}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                        <span className="md:hidden inline-flex items-center gap-2">
                          {index % 2 === 0 && <step.icon className="hidden md:block w-6 h-6 text-primary flex-shrink-0" />}
                          {<step.icon className="w-6 h-6 text-primary flex-shrink-0" />}
                          {step.title}
                          {!index % 2 === 0 && <step.icon className="hidden md:block w-6 h-6 text-primary flex-shrink-0" />}
                        </span>
                        <span className="hidden md:block">{step.title}</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria - White Background */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eligibility Criteria</h2>
            <p className="text-gray-600">Check if you meet the requirements to apply for this service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Age Requirement', desc: 'Must be at least 18 years old', icon: IoTimeOutline },
              { title: 'Documentation', desc: 'Valid identification documents', icon: IoDocumentTextOutline },
              { title: 'Income Proof', desc: 'Proof of income or employment', icon: FiAward }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                  <div className={`w-18 h-18 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 transition-all duration-300 transform group-hover:scale-105`}>
                    <item.icon className="w-9 h-9" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQ />


      {/* Floating Contact Button */}
      <motion.button
        onClick={handleOpenForm}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40 flex items-center gap-2 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageSquare className="w-6 h-6" />
        <span className="hidden md:inline">Get a Quote</span>
      </motion.button>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseForm}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg"
            >
              <QuoteForm 
                onClose={handleCloseForm} 
                isMobile={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
