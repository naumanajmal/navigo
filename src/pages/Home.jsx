import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import QuoteForm from '../components/form/QuoteForm'
import FloatingQuoteButton from '../components/form/FloatingQuoteButton'
import HeroSlider from '../components/hero/HeroSlider'

function Home() {
  const [showMobileForm, setShowMobileForm] = useState(false)

  return (
    <div className="font-lexend">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] bg-black pt-20">
        {/* Hero Slider */}
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between">
            {/* Left Side - Content and CTAs */}
            <div className="w-full max-w-xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Your Dream Home with
                <span className="text-secondary"> Smart Financing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12">
                Discover competitive mortgage rates and expert guidance for your perfect home
              </p>

              {/* Contact CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-base font-medium shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-base font-medium shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Form (Hidden on Mobile) */}
            <div className="hidden lg:block w-full max-w-md">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Form Button (Mobile Only) */}
      <FloatingQuoteButton 
        showMobileForm={showMobileForm}
        setShowMobileForm={setShowMobileForm}
      />
    </div>
  )
}

export default Home
