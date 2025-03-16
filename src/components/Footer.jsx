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
                <Link to="/" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
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
                <Link to="/services" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm sm:text-base text-white/80 hover:text-secondary transition-colors">
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
                to="/privacy"
                className="text-xs text-white hover:text-secondary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/terms"
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
