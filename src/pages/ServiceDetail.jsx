import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { services } from '../components/services/servicesData'
import { serviceImages } from '../components/services/serviceImages'

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Find the service by id
  const service = services.find(s => s.id.toString() === id)
  
  // If service not found, redirect to services page
  if (!service) {
    navigate('/services')
    return null
  }

  // Sample FAQs - replace with actual data
  const faqs = [
    {
      question: "What documents do I need?",
      answer: "You'll need proof of identity, proof of income, and relevant property documents."
    },
    {
      question: "How long does the process take?",
      answer: "The typical processing time is 2-3 weeks, depending on your specific situation."
    },
    {
      question: "What are the fees involved?",
      answer: "Fees vary based on the service type and complexity. Contact us for a detailed quote."
    }
  ]

  return (
    <div className="font-lexend">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
            {service.title}
          </h1>
          <p className="text-xl text-gray-100 mb-8 text-center max-w-2xl mx-auto">
            {service.subtitle}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* About the Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">About the Service</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Process of Service</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              {['Application', 'Documentation', 'Verification', 'Approval'].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step}</h3>
                    <p className="text-gray-600">Description of the {step.toLowerCase()} process step.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Eligibility Criteria</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Must be at least 18 years old</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Valid identification documents</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Proof of income or employment</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-form" className="bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">Contact us now and let us help you with your {service.title.toLowerCase()}</p>
          <button 
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Now
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
