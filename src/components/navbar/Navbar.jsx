import { useState } from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import MobileMenuButton from './MobileMenuButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCalculatorDropdown, setShowCalculatorDropdown] = useState(false)

  return (
    <nav className="bg-white fixed w-full z-50 text-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLogo />
          <NavLinks 
            showCalculatorDropdown={showCalculatorDropdown}
            setShowCalculatorDropdown={setShowCalculatorDropdown}
          />
          <MobileMenuButton 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <NavLinks isMobile />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
