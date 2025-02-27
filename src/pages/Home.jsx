import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import QuoteForm from '../components/form/QuoteForm'
import FloatingQuoteButton from '../components/form/FloatingQuoteButton'
import HeroSlider from '../components/hero/HeroSlider'
import MortgageCalculator from '../components/calculator/MortgageCalculator'
import BankPartners from '../components/BankPartners'
import Services from '../components/services/Services'
import About from '../components/about/About'
import '../components/services/services.css'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import GoogleReviews from '../components/GoogleReviews'
import ContactSection from '../components/ContactSection'
function Home() {
  const [showMobileForm, setShowMobileForm] = useState(false)

  const handleOpenForm = () => {
    console.log('Opening form...') // Debug log
    setShowMobileForm(true)
  }

  const handleCloseForm = () => {
    console.log('Closing form...') // Debug log
    setShowMobileForm(false)
  }

  console.log('Current form state:', showMobileForm) // Debug log

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
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="tel:+1234567890" 
                  className="w-full sm:w-48 flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98]"
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
                  className="w-full sm:w-48 flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all duration-200 text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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

      {/* Mobile Form and Button */}
      <div className="relative">
        <FloatingQuoteButton onClick={handleOpenForm} />
        {showMobileForm && (
          <div className="fixed inset-0 z-[9999] overflow-hidden">
            <div className="absolute inset-0 bg-black/50" onClick={handleCloseForm}></div>
            <div className="relative z-[10000]">
              <QuoteForm 
                isMobile={true} 
                onClose={handleCloseForm} 
              />
            </div>
          </div>
        )}
      </div>

      
            {/* About Section */}
            <About />
      {/* Calculator Section */}
      <MortgageCalculator />

      {/* Services Section */}
      <Services />


<FAQ />
      <GoogleReviews />
      <BankPartners />
{/* <ContactSection/> */}
      <Footer />
    </div>
  )
}

export default Home
