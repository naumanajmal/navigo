import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { services } from './servicesData.jsx'

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)
  const autoPlayRef = useRef(null)
  const intervalRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  // Memoize scrollToCard function
  const scrollToCard = useCallback((index) => {
    if (carouselRef.current) {
      const container = carouselRef.current
      const cardWidth = 300 // Width of each card on mobile
      const cardGap = 8 // Gap between cards (gap-2)
      const scrollLeft = index * (cardWidth + cardGap)
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }, [])

  // Memoize autoPlay function
  const autoPlay = useCallback(() => {
    if (!isPaused) {
      const nextIndex = (activeIndex + 1) % services.length
      setActiveIndex(nextIndex)
      scrollToCard(nextIndex)
    }
  }, [activeIndex, isPaused, scrollToCard])

  // Reset auto-play with new timer
  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setIsPaused(false)
    intervalRef.current = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }, 3500)
  }, [])

  // Update autoPlayRef when autoPlay changes
  useEffect(() => {
    autoPlayRef.current = autoPlay
  }, [autoPlay])

  // Memoize startAutoPlay function
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    intervalRef.current = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }, 3500)
  }, [])

  // Initialize auto-play
  useEffect(() => {
    resetAutoPlay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [resetAutoPlay])

  // Track if we're manually scrolling
  const isManualScrolling = useRef(false)

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    if (!isManualScrolling.current) {
      isManualScrolling.current = true
      setIsPaused(true)
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (carouselRef.current) {
        const container = carouselRef.current
        const cardWidth = 300
        const cardGap = 8
        const scrollPosition = container.scrollLeft
        const newIndex = Math.round(scrollPosition / (cardWidth + cardGap))
        
        if (newIndex >= 0 && newIndex < services.length) {
          setActiveIndex(newIndex)
          // Ensure proper alignment
          scrollToCard(newIndex)
          // Reset scroll state and restart auto-play
          isManualScrolling.current = false
          resetAutoPlay()
        }
      }
    }, 200)
  }, [scrollToCard, resetAutoPlay])

  // Memoize card click handler
  const handleCardClick = useCallback((index) => {
    setActiveIndex(index)
    scrollToCard(index)
    startAutoPlay()
  }, [scrollToCard, startAutoPlay])

  // Initialize scroll position and event listener
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth
      const initialScroll = window.innerWidth <= 640 ? (cardWidth - window.innerWidth) / 2 : 0
      carouselRef.current.scrollLeft = initialScroll
      
      const currentRef = carouselRef.current
      currentRef.addEventListener('scroll', handleScroll)
      return () => currentRef.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden border-b border-gray-100">
      {/* Background with SVG and fade effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90" />
        
        {/* SVG Pattern */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="navigo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#008cc9" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#008cc9" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#008cc9" stopOpacity="0.04" />
              </linearGradient>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
              </filter>
            </defs>

            {/* Abstract N Pattern */}
            <path
              d="M300,150 L300,650 L600,150 L900,650 L900,150"
              fill="none"
              stroke="url(#navigo-grad)"
              strokeWidth="120"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#blur)"
              opacity="0.7"
            />
            
            {/* Additional decorative elements */}
            <circle cx="300" cy="150" r="50" fill="url(#navigo-grad)" filter="url(#blur)" />
            <circle cx="900" cy="150" r="50" fill="url(#navigo-grad)" filter="url(#blur)" />
            <circle cx="600" cy="400" r="80" fill="url(#navigo-grad)" filter="url(#blur)" opacity="0.5" />
          </svg>
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60" />
      </div>
      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Premium Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 mb-6">
            Discover our comprehensive range of mortgage and property services designed to make your journey smooth and successful.
          </p>
          <Link 
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={carouselRef}
            className={`${showAllServices 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' 
              : 'flex gap-2 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 sm:pb-12 scrollbar-hide pl-[calc(50%-150px)] sm:pl-[max(2rem,calc((100%-1280px)/2))] pr-[calc(50%-150px)] sm:pr-8'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => {
              !showAllServices && setIsPaused(true)
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
              }
            }}
            onMouseLeave={() => {
              setIsPaused(false)
              startAutoPlay()
            }}
            onScroll={handleScroll}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleCardClick(index)}
                className={`flex-shrink-0 w-[300px] sm:w-[320px] md:w-[360px] lg:w-[400px] snap-center transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'opacity-100'
                    : 'opacity-70'
                }`}
              >
                <div className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-[470px] sm:h-[500px] md:h-[550px] group transition-all duration-500 border shadow-sm ${activeIndex === index ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-secondary/20 shadow-md' : 'border-gray-100 shadow-sm hover:shadow-md'}`}>
                  <div className="h-full flex flex-col">
                    <div className="mb-4 sm:mb-6 transition-all duration-500">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br transition-all duration-500 ${activeIndex === index ? 'from-secondary/10 to-primary/10 scale-110' : 'from-primary/5 to-secondary/5 group-hover:scale-110'}`}>
                        <div className={`transition-colors duration-500 ${activeIndex === index ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>{service.title}</h3>
                      <p className="text-base sm:text-lg text-secondary font-medium">{service.subtitle}</p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="">
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-primary to-secondary w-6 sm:w-10'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
