import { useState } from 'react';
import QuoteForm from './form/QuoteForm';
import { useQuoteForm } from '../context/useQuoteForm';

const FloatingQuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { closeQuoteForm } = useQuoteForm();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    closeQuoteForm();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <QuoteForm isMobile={true} onClose={handleClose} />
          </div>
        </div>
      )}

      <button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden hover:bg-primary/90 hover:text-white hover:rounded-full"
        aria-label="Get a Quote"
      >
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
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
          <span>Get Quote</span>
        </div>
      </button>
    </>
  );
};

export default FloatingQuoteForm;
