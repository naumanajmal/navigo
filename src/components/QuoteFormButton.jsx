import { useState, useEffect } from 'react';
import { useQuoteForm } from '../context/useQuoteForm';

const QuoteFormButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const { openQuoteForm } = useQuoteForm();

  useEffect(() => {
    const handleScroll = () => {
      // Get the first section's height (100vh)
      const firstSectionHeight = window.innerHeight;
      
      // Show button after scrolling past the first section on homepage
      // or immediately on other pages
      const isHomePage = window.location.pathname === '/';
      const shouldShow = isHomePage 
        ? window.scrollY > firstSectionHeight
        : true;
      
      // Check if we're near the footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerTop - windowHeight < 100); // 100px before footer
      }
      
      setIsVisible(shouldShow);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteForm = () => {
    openQuoteForm('', 'floating_button');
  };

  return (
    <button
      onClick={handleOpenQuoteForm}
      className={`fixed bottom-6 left-6 z-40 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${isNearFooter ? 'mb-16' : ''}`}
      aria-label="Get a Quote"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
        />
      </svg>
    </button>
  );
};

export default QuoteFormButton;
