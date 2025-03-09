import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServicesMegaMenu from './ServicesMegaMenu'

const NavLinks = ({ isMobile = false, showCalculatorDropdown, setShowCalculatorDropdown }) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [showKnowledgeDropdown, setShowKnowledgeDropdown] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileCalculator, setShowMobileCalculator] = useState(false);
  const [showMobileKnowledge, setShowMobileKnowledge] = useState(false);
  const servicesRef = useRef(null)
  const calculatorRef = useRef(null)
  const moreMenuRef = useRef(null)
  const knowledgeRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServicesDropdown(false)
      }
      if (calculatorRef.current && !calculatorRef.current.contains(event.target)) {
        setShowCalculatorDropdown(false)
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setShowMoreMenu(false)
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
 

      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Affordability Calculator', 
      href: '/affordability-calculator',
      

      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ]

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        {/* Main Links */}
        
          {[links[0], links[2]].map((link) => (
            link.name === 'Services' ? (
              <div key={link.name}>
                <button 
                  onClick={() => setShowMobileServices(!showMobileServices)}
                  className="flex items-center justify-between w-full px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
                >
                  <span>Services</span>
                  <div className="relative w-6 h-6">
                    <div className={`absolute inset-0 transform transition-transform duration-300 ${showMobileServices ? 'rotate-45' : 'rotate-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${showMobileServices ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ServicesMegaMenu isMobile={true} onClose={() => setShowMobileServices(false)} />
                </div>
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
          {/* Knowledge Point Section */}
          <div>
            <button 
              onClick={() => setShowMobileKnowledge(!showMobileKnowledge)}
              className="flex items-center justify-between w-full px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
            >
              <span>Knowledge Point</span>
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transform transition-transform duration-300 ${showMobileKnowledge ? 'rotate-45' : 'rotate-0'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                  </svg>
                </div>
              </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${showMobileKnowledge ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-1">
                <Link 
                  to="/faq" 
                  className="block px-6 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
                >
                  FAQs
                </Link>
                <Link 
                  to="/blog" 
                  className="block px-6 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        

        {/* Calculator Section */}
        <div>
          <button 
            onClick={() => setShowMobileCalculator(!showMobileCalculator)}
            className="flex items-center justify-between w-full px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
          >
            <span>Calculator</span>
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transform transition-transform duration-300 ${showMobileCalculator ? 'rotate-45' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                </svg>
              </div>
            </div>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${showMobileCalculator ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-1">
              {calculatorOptions.map((option) => (
                <Link 
                  key={option.name}
                  to={option.href} 
                  className="block px-6 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
                >
                  {option.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="pt-2 border-t border-gray-100">
          <Link 
            to="/about-us" 
            className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className="text-primary hover:text-secondary transition-colors text-base font-medium"
      >
        Home
      </Link>
      <div className="relative group" ref={servicesRef}>
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
      <div className="relative group" ref={calculatorRef}>
        <button 
          className="text-primary hover:text-secondary transition-colors text-base font-medium flex items-center gap-1"
          onClick={() => setShowCalculatorDropdown(!showCalculatorDropdown)}
        >
          Calculator
          
        </button>
        {showCalculatorDropdown && (
          <div 
            className="absolute top-full right-0 mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[200px]"
          >
            {calculatorOptions.map((option) => (
              <Link 
                to={option.href}
                key={option.name} 
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 transition-all text-base font-medium"
              >
                {option.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative" ref={moreMenuRef}>
        <button 
          className="text-primary hover:text-secondary transition-colors text-base font-medium flex items-center gap-1"
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transform transition-transform duration-300 ${showMoreMenu ? 'rotate-45' : 'rotate-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
              </svg>
            </div>
          </div>
        </button>
        {showMoreMenu && (
          <div className="absolute top-full right-0 mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[200px]">
            <Link 
              to="/about-us" 
              className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 transition-all text-base font-medium"
            >
              About Us
            </Link>
            <div className="py-2 px-4 text-sm font-semibold text-gray-500">
              Knowledge Point
            </div>
            <Link 
              to="/faq" 
              className="block px-6 py-2 text-primary hover:text-secondary hover:bg-gray-50 transition-all text-base font-medium"
            >
              FAQs
            </Link>
            <Link 
              to="/blog" 
              className="block px-6 py-2 text-primary hover:text-secondary hover:bg-gray-50 transition-all text-base font-medium"
            >
              Blogs
            </Link>
            <div className="my-1 border-t border-gray-100"></div>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 transition-all text-base font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavLinks
