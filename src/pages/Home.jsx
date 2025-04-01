import { useState } from 'react'
import { useSliderContent } from '../hooks/useSliderContent'
import Navbar from '../components/navbar/Navbar'
import AnimateOnScroll from '../components/animations/AnimateOnScroll'
import QuoteForm from '../components/form/QuoteForm'
import FloatingQuoteButton from '../components/form/FloatingQuoteButton'
import HeroSlider from '../components/hero/HeroSlider'
import CalculatorSection from '../components/calculator/CalculatorSection'
import BankPartners from '../components/BankPartners'
import Services from '../components/services/Services'
import About from '../components/about/About'
import '../components/services/services.css'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import GoogleReviews from '../components/GoogleReviews'
function Home() {
  const [showMobileForm, setShowMobileForm] = useState(false)
  const { activeContent, setActiveIndex } = useSliderContent()

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
    <div className="font-lexend overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero-section" className="relative h-[100vh] bg-black pt-28 md:pt-32 overflow-hidden">
        {/* Hero Slider */}
        <div className="absolute inset-0 z-0">
          <HeroSlider onSlideChange={setActiveIndex} />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between gap-16 xl:gap-24">
            <div className="flex-1 ">
            {/* Left Side - Content and CTAs */}
            <AnimateOnScroll className="w-full lg:max-w-2xl xl:max-w-3xl text-white" animation="fade-up">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[56px] font-bold mb-3 sm:mb-4 md:mb-6 leading-[1.18] sm:leading-[1.18] lg:leading-[1.18] xl:leading-[1.18] max-w-[35ch] xl:max-w-[40ch]">
                {activeContent.title.start}
                <span className="text-secondary inline-block">{activeContent.title.highlight}</span>
                {activeContent.title.end}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-[45ch] leading-relaxed">
                {activeContent.description}
              </p>

              {/* Contact CTAs */}
              <div className="flex flex-row gap-2 sm:gap-4  sm:w-auto w-4/5">
                <a
                  href="tel:+971552522508"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-primary px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-white/90 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98] min-w-[140px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/971552522508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 bg-secondary text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-secondary/90 transition-all duration-200 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl active:scale-[0.98] min-w-[140px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </AnimateOnScroll>
            </div>

            {/* Right Side - Form (Hidden on Mobile) */}
            <div className="w-[35%] hidden lg:block">
            <AnimateOnScroll className="hidden lg:block w-full max-w-sm xl:max-w-md mt-4" animation="fade-in">
              <QuoteForm />
            </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form and Button */}
      {/* <div className="relative">
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
      </div> */}

      {/* About Section */}
      <AnimateOnScroll>
        <About />
      </AnimateOnScroll>
      
      {/* Calculator Section */}
      <AnimateOnScroll>
        <CalculatorSection />
      </AnimateOnScroll>

      {/* Services Section */}
      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <BankPartners />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <GoogleReviews />
      </AnimateOnScroll>
      
      
      <AnimateOnScroll>
        <FAQ limitCount={true} />
      </AnimateOnScroll>

      {/* <ContactSection/> */}
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Home
