import { useState, useEffect } from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenuButton from './MobileMenuButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCalculatorDropdown, setShowCalculatorDropdown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={`fixed w-[95%] z-40 top-4 left-1/2 -translate-x-1/2 rounded-full px-2 sm:px-10 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/80 shadow-sm'} backdrop-blur-sm`}>
        <div className="px-2 sm:px-6 lg:px-8 sm:py-1">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <NavLogo />
            <div className="hidden md:block">
              <NavLinks 
                showCalculatorDropdown={showCalculatorDropdown}
                setShowCalculatorDropdown={setShowCalculatorDropdown}
              />
            </div>
            <MobileMenuButton 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Modal - Now outside navbar container */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-hidden"
          style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 sm:p-6 border-l border-gray-200 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-primary">Menu</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-primary focus:outline-none transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <NavLinks 
              isMobile 
              showCalculatorDropdown={showCalculatorDropdown}
              setShowCalculatorDropdown={setShowCalculatorDropdown}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
