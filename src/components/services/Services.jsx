import { useRef, useState, useEffect } from 'react'
import { services } from './servicesData.jsx'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    const autoPlay = () => {
      if (!isPaused) {
        const nextIndex = (activeIndex + 1) % services.length
        setActiveIndex(nextIndex)
        scrollToCard(nextIndex)
      }
    }

    autoPlayRef.current = autoPlay
  }, [activeIndex, isPaused])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }, 3500) // Change slide every 3.5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleCardClick = (index) => {
    setActiveIndex(index)
    scrollToCard(index)
    // Reset autoplay to start from this card
    if (autoPlayRef.current) {
      autoPlayRef.current()
    }
  }

  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index]
      if (card) {
        const scrollLeft = card.offsetLeft - (carouselRef.current.offsetWidth - card.offsetWidth) / 2
        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
    }
    setActiveIndex(index)
  }

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-50/50 to-white overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of mortgage and property services designed to make your journey smooth and successful.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide pl-[max(2rem,calc((100%-1280px)/2))] pr-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleCardClick(index)}
                className={`flex-shrink-0 w-[300px] sm:w-[400px] snap-center transform transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-70'
                }`}
              >
                <div className={`bg-white rounded-2xl p-8 h-[500px] group transition-all duration-500 border shadow-sm ${activeIndex === index ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-secondary/20 shadow-md scale-100' : 'hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 border-gray-100 hover:border-secondary/20 hover:shadow-md scale-95'}`}>
                  <div className="h-full flex flex-col">
                    <div className={`mb-6 transition-all duration-500 ${activeIndex === index ? 'text-secondary scale-110' : 'text-primary group-hover:text-secondary group-hover:scale-110'}`}>{service.icon}</div>
                    <div className="space-y-4 mb-8">
                      <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>{service.title}</h3>
                      <p className="text-lg text-secondary font-medium">{service.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="mt-auto">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
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
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-primary to-secondary w-10'
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
