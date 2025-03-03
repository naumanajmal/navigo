import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServicesMegaMenu from './ServicesMegaMenu'

const NavLinks = ({ isMobile = false, showCalculatorDropdown, setShowCalculatorDropdown }) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const servicesRef = useRef(null)
  const calculatorRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServicesDropdown(false)
      }
      if (calculatorRef.current && !calculatorRef.current.contains(event.target)) {
        setShowCalculatorDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const calculatorOptions = [
    { 
      name: 'Mortgage Calculator', 
      href: '/mortgage-calculator',
      description: 'Calculate your monthly mortgage payments and view amortization schedule',
      features: ['Monthly payment calculation', 'Amortization schedule', 'Interest breakdown'],

      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Affordability Calculator', 
      href: '/affordability-calculator',
      description: 'Find out how much house you can afford based on your income and expenses',
      features: ['Income analysis', 'Debt-to-income ratio', 'Maximum loan amount'],

      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ]

  if (isMobile) {
    return (
      <div className="flex flex-col">
        {/* Main Links */}
        <div className="space-y-4 mb-8">
          {links.slice(0, 4).map((link) => (
            link.name === 'Services' ? (
              <div key={link.name}>
                <Link 
                  to={link.href}
                  className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
                >
                  {link.name}
                </Link>
                <ServicesMegaMenu isMobile={true} onClose={() => setShowServicesDropdown(false)} />
              </div>
            ) : (
              <Link 
                key={link.name}
                to={link.href} 
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Calculator Section */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 px-4 mb-2">CALCULATORS</h3>
          <div className="space-y-1">
            {calculatorOptions.map((option) => (
              <Link 
                key={option.name}
                to={option.href} 
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          {links.slice(4).map((link) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.slice(0, 4).map((link) => (
        link.name === 'Services' ? (
          <div key={link.name} className="relative group" ref={servicesRef}>
            <button 
              className="text-primary hover:text-secondary transition-colors text-base font-medium flex items-center gap-1"
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showServicesDropdown && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-xl shadow-xl py-8 w-[90vw] max-w-7xl border border-gray-100"
              >
                <ServicesMegaMenu isMobile={false} onClose={() => setShowServicesDropdown(false)} />
              </div>
            )}
          </div>
        ) : (
          <Link 
            key={link.name}
            to={link.href} 
            className="text-primary hover:text-secondary transition-colors text-base font-medium"
          >
            {link.name}
          </Link>
        )
      ))}
      <div className="relative group" ref={calculatorRef}>
        <button 
          className="text-primary hover:text-secondary transition-colors text-base font-medium flex items-center gap-1"
          onClick={() => setShowCalculatorDropdown(!showCalculatorDropdown)}
        >
          Calculator
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {showCalculatorDropdown && (
          <div 
            className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-6 w-[600px] border border-gray-100"
          >
            <div className="px-6 py-3 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-primary">Financial Calculators</h3>
              <p className="text-sm text-gray-500 mt-1">Professional tools to help you make informed financial decisions</p>
            </div>
            <div className="grid grid-cols-2 gap-6 p-6">
              {calculatorOptions.map((option) => (
                <Link 
                  to={option.href}
                  key={option.name} 
                  className="block group p-4 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-secondary group-hover:text-primary transition-colors">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-primary group-hover:text-secondary transition-colors">{option.name}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:text-primary transition-colors mt-4">
                    Try Calculator
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {links.slice(4).map((link) => (
        <Link 
          key={link.name}
          to={link.href} 
          className="text-primary hover:text-secondary transition-colors text-base font-medium"
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLinks
