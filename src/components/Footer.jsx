import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerData = {
    company_name: 'Navigo',
    company_address: 'Your address here',
    services_item_1: 'Residential Mortgages',
    services_item_2: 'Commercial Mortgages',
    services_item_3: 'International Mortgages',
    services_item_4: 'Expert Mortgage Advisory',
  };

  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  return (
    <footer className="bg-primary border-t border-gray-100 text-white">
      <div className=" pt-8 sm:pt-12 lg:pt-16 flex flex-col items-center justify-center">
        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          {/* Contact Info */}
          <div className='space-y-4 '>
            <div className="">
              <img src="/Navigo_logo2.png" alt="Brand Logo" className="w-32 h-auto sm:w-4/5 " />
            </div>
            <div className="text-sm sm:text-base text-white mb-4 space-y-2 pl-1">
              <div>
               Your trusted partner in mortgage solutions.
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-white hover:text-secondary transition-colors">
                  {footerData.services_item_1}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white hover:text-secondary transition-colors">
                  {footerData.services_item_2}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white hover:text-secondary transition-colors">
                  {footerData.services_item_3}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white hover:text-secondary transition-colors">
                  {footerData.services_item_4}
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Contact Information</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base text-white">
                Address: {footerData.company_address}
              </li>
              <li className="text-sm sm:text-base text-white">
                Email: <a href="mailto:info@company.com" className="hover:text-secondary transition-colors">info@company.com</a>
              </li>
              <li className="text-sm sm:text-base text-white">
                Phone: <a href="tel:+1234567890" className="hover:text-secondary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm sm:text-base text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full py-2 bg-white text-primary rounded-md hover:bg-secondary hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

         
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 py-6 border-t border-gray-400 w-full flex items-center justify-center  ">
          <div className="flex flex-row items-center justify-between w-full max-w-7xl  mx-auto px-4  sm:px-6 lg:px-8">
            <p className="text-xs text-white">
              &copy; {currentYear} {footerData.company_name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 relative">
              <button
                className="text-xs text-white hover:text-secondary transition-colors font-medium"
              >
                Privacy Policy
              </button>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:contact@nexatech.com"
                className="text-xs text-white hover:text-secondary transition-colors font-medium"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {/* <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} /> */}
    </footer>
  );
};

export default Footer;
