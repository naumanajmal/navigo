import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerData = {
    company_name: 'Navigo',
    company_address: '511, Clover Bay, Business Bay, Dubai, UAE',
    services_item_1: 'Residential Mortgages',
    services_item_2: 'Commercial Mortgages',
    services_item_3: 'International Mortgages',
    services_item_4: 'Expert Mortgage Advisory',
  };

  // Function to scroll to hero section
  const scrollToHeroSection = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      window.scrollTo({
        top: heroSection.offsetTop,
        behavior: 'smooth'
      });
    } else {
      // If hero section not found on current page, navigate to home page
      window.location.href = '/';
    }
  };

  // Function to handle About Us navigation
  const navigateToAboutUs = (e) => {
    e.preventDefault();
    // Navigate to About Us page
    window.location.href = '/about-us';
    // The useEffect in AboutUs component will handle scrolling to top
  };

  // Function to handle Mortgage Calculator navigation
  const navigateToMortgageCalculator = (e) => {
    e.preventDefault();
    // Navigate to Mortgage Calculator page
    window.location.href = '/mortgage-calculator';
    // The useEffect in MortgageCalculatorPage component will handle scrolling to top
  };

  // Function to handle Contact Us navigation
  const navigateToContact = (e) => {
    e.preventDefault();
    // Navigate to Contact page
    window.location.href = '/contact';
    // The useEffect in ContactPage component will handle scrolling to top
  };

  // Function to handle FAQ navigation
  const navigateToFaq = (e) => {
    e.preventDefault();
    // Navigate to FAQ page
    window.location.href = '/faq';
    // The useEffect in FaqPage component will handle scrolling to top
  };

  // Function to handle Privacy Policy navigation
  const navigateToPrivacyPolicy = (e) => {
    e.preventDefault();
    // Navigate to Privacy Policy page
    window.location.href = '/privacy-policy';
    // The useEffect in Privacy Policy component will handle scrolling to top
  };

  // Function to handle Terms & Conditions navigation
  const navigateToTermsConditions = (e) => {
    e.preventDefault();
    // Navigate to Terms & Conditions page
    window.location.href = '/terms-conditions';
    // The useEffect in Terms component will handle scrolling to top
  };

  return (
    <footer className="bg-primary border-t border-gray-100 text-white">
      <div className="pt-12 sm:pt-8 lg:pt-16 flex flex-col items-center justify-center">
        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Info */}
          <div className='space-y-4'>
            <div className="">
              <img src="/Navigo_logo2.png" alt="Brand Logo" className="w-32 h-auto sm:w-4/5" />
            </div>
            <div className="text-sm sm:text-base text-white mb-4 space-y-2 pl-1">
              <div>
               Your trusted partner in mortgage solutions. 
              </div>
            </div>
          </div>

          {/* Sitemap Column 1 */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">SITEMAP</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToHeroSection}
                  className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-us" 
                  onClick={navigateToAboutUs}
                  className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/mortgage-calculator" 
                  onClick={navigateToMortgageCalculator}
                  className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300"
                >
                  Mortgage Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap Column 2 */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/services" className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={navigateToContact}
                  className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  onClick={navigateToFaq}
                  className="text-sm sm:text-base text-white/80 hover:text-white hover:bg-primary hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Contact Information</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base text-white/80 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {footerData.company_address}
              </li>
              <li className="text-sm sm:text-base text-white/80 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:admin@navigo.ae" className="hover:text-secondary transition-colors">admin@navigo.ae</a>
              </li>
              <li className="text-sm sm:text-base text-white/80 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+971552522508" className="hover:text-secondary transition-colors">+971 55 252 2508</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-6 border-t border-gray-400 w-full flex- items-center justify-center">
          <div className="flex flex-col-reverse gap-4 sm:flex-row space-y-6 sm:space-y-0 items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-white">
              &copy; {currentYear} {footerData.company_name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 relative">
              <Link
                to="/privacy-policy"
                onClick={navigateToPrivacyPolicy}
                className="text-xs text-white hover:text-secondary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/terms-conditions"
                onClick={navigateToTermsConditions}
                className="text-xs text-white hover:text-secondary transition-colors font-medium"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
