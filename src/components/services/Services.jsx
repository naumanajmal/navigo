import { useRef, useState } from 'react'

const services = [
  {
    id: 1,
    title: 'Expert Mortgage Advisory',
    subtitle: 'Personalized Solutions',
    description: 'Our team of seasoned mortgage advisors provides comprehensive guidance tailored to your unique financial situation. We analyze multiple options to find the perfect mortgage solution that aligns with your goals.',
    features: ['Personalized consultation', 'Rate comparison', 'Financial assessment', 'Strategy planning'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Premium Property Search',
    subtitle: 'Find Your Dream Home',
    description: 'Access our exclusive network of premium properties and trusted real estate partners. Our advanced property matching system helps you discover homes that perfectly match your criteria and lifestyle.',
    features: ['Exclusive listings', 'Virtual tours', 'Neighborhood analysis', 'Price negotiation'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Strategic Financial Planning',
    subtitle: 'Secure Your Future',
    description: 'Our financial experts create comprehensive plans that optimize your mortgage investment while maintaining long-term financial stability. We help you make informed decisions for a secure future.',
    features: ['Investment analysis', 'Risk assessment', 'Tax planning', 'Wealth management'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Professional Legal Support',
    subtitle: 'Expert Guidance',
    description: 'Our network of experienced legal professionals ensures your property transactions are handled with precision and care. We provide comprehensive legal support throughout your mortgage journey.',
    features: ['Document review', 'Legal compliance', 'Contract negotiation', 'Title verification'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Advanced Market Analysis',
    subtitle: 'Data-Driven Insights',
    description: 'Leverage our sophisticated market analysis tools and expert insights to make informed property investment decisions. We provide detailed market trends and forecasts to optimize your investment.',
    features: ['Market trends', 'Price analysis', 'Investment forecasting', 'Risk assessment'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  }
]

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

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
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
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
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex-shrink-0 w-[300px] sm:w-[400px] snap-center transform transition-all duration-300 ${
                  activeIndex === index
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-70'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 h-[500px] group hover:bg-primary/5 transition-all duration-500 border border-gray-100 hover:border-primary/20">
                  <div className="h-full flex flex-col">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                    <div className="space-y-4 mb-8">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-lg text-primary/80 font-medium">{service.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="mt-auto">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ? 'bg-primary w-10'
                    : 'bg-gray-300 hover:bg-gray-400'
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
