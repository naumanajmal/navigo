import { useState } from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenuButton from './MobileMenuButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCalculatorDropdown, setShowCalculatorDropdown] = useState(false)

  return (
    <nav className="bg-white/80 fixed w-[95%] backdrop-blur-sm z-50 text-primary shadow-sm top-4 left-1/2 -translate-x-1/2 rounded-full px-10">
      <div className="  px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between items-center h-20 ">
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

      {/* Mobile Navigation Modal */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
          <div 
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="p-6 border-l border-gray-200 h-full overflow-y-auto">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <NavLinks isMobile />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
