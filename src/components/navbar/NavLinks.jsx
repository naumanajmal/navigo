const NavLinks = ({ isMobile = false, showCalculatorDropdown, setShowCalculatorDropdown }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  const calculatorOptions = [
    { name: 'Mortgage Calculator', href: '#' },
    { name: 'Affordability Calculator', href: '#' },
  ]

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        {links.slice(0, 4).map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-white hover:text-secondary transition-colors text-sm font-medium"
          >
            {link.name}
          </a>
        ))}
        <div className="space-y-2 pl-4">
          <p className="text-white/80 text-sm font-medium">Calculators:</p>
          {calculatorOptions.map((option) => (
            <a 
              key={option.name}
              href={option.href} 
              className="block text-white hover:text-secondary transition-colors text-sm font-medium"
            >
              {option.name}
            </a>
          ))}
        </div>
        {links.slice(4).map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-white hover:text-secondary transition-colors text-sm font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.slice(0, 4).map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          className="text-white hover:text-secondary transition-colors text-sm font-medium"
        >
          {link.name}
        </a>
      ))}
      <div className="relative group">
        <button 
          className="text-white hover:text-secondary transition-colors text-sm font-medium flex items-center gap-1"
          onMouseEnter={() => setShowCalculatorDropdown(true)}
          onMouseLeave={() => setShowCalculatorDropdown(false)}
        >
          Calculator
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {showCalculatorDropdown && (
          <div 
            className="absolute top-full left-0 mt-1 bg-primary/90 backdrop-blur-sm rounded-xl shadow-lg py-2 w-48 border border-white/10"
            onMouseEnter={() => setShowCalculatorDropdown(true)}
            onMouseLeave={() => setShowCalculatorDropdown(false)}
          >
            {calculatorOptions.map((option) => (
              <a 
                key={option.name}
                href={option.href} 
                className="block px-4 py-2 text-sm text-white hover:text-secondary hover:bg-primary/80 transition-colors"
              >
                {option.name}
              </a>
            ))}
          </div>
        )}
      </div>
      {links.slice(4).map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          className="text-white hover:text-secondary transition-colors text-sm font-medium"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default NavLinks
