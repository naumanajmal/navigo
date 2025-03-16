import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick, index, anyOpen }) => {
  const isExpanded = isOpen;
  return (
    <div 
      className={`backdrop-blur-xl bg-white/80 rounded-2xl overflow-hidden transition-all duration-500 transform h-fit ${isExpanded ? 'scale-[1.02] shadow-2xl ring-1 ring-primary/20' : 'shadow-lg'}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <button
        className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-center space-x-4">
          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isExpanded ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'} transition-colors duration-300`}>
            <span className="text-sm font-medium">{index + 1}</span>
          </span>
          <span className={`text-sm sm:text-base font-normal transition-all duration-300 ${isExpanded ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
            {question}
          </span>
        </div>
        <span className={`ml-6 flex-shrink-0 transition-all duration-500 ${isExpanded ? 'rotate-45 text-primary' : 'text-gray-400 group-hover:text-primary group-hover:rotate-45'}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 sm:px-8 pb-4 sm:pb-6 pl-12 sm:pl-20">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ faqData = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqData = [
    {
      question: "What is the process of breaking down mortgage payments into interest and principal?",
      answer: "Amortization refers to the gradual reduction of a mortgage loan balance through scheduled payments that cover both interest and principal."
    },
    {
      question: "How does a combination mortgage rate work in the UAE?",
      answer: "A combination mortgage rate in the UAE offers a fixed interest rate for an initial period, which then transitions into a variable rate for the remaining loan term."
    },
    {
      question: "What types of properties are classified as commercial in the UAE?",
      answer: "Commercial properties include offices, retail shops, warehouses, industrial sheds, labor camps, and commercial plots."
    },
    {
      question: "What does content insurance cover, and is it mandatory in the UAE?",
      answer: "Content insurance covers personal belongings within a property, such as furniture and electronics. It is optional and not a mandatory requirement in the UAE."
    },
    {
      question: "What is the Debt Burden Ratio (DBR), and how is it regulated in the UAE?",
      answer: "DBR is the percentage of a borrower's total monthly debt repayments compared to their income. The UAE Central Bank caps this ratio at 50%."
    },
    {
      question: "What is the minimum down payment required for a mortgage in the UAE?",
      answer: "For completed properties, the down payment ranges from 20% to 40% depending on the borrower's nationality and purpose (self-occupancy or investment). For under-construction properties, a 50% down payment is required."
    }
  ];

  // Use provided faqData if available, otherwise use default
  const faqs = faqData.length > 0 ? faqData : defaultFaqData;

  return (
    <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" 
        style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold pb-4 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about mortgages and property buying in the UAE
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 px-2 sm:px-4">
          <div className="flex-1 space-y-3 sm:space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                anyOpen={openIndex !== -1}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
          <div className="flex-1 space-y-3 sm:space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQItem
                key={index + Math.ceil(faqs.length / 2)}
                index={index + Math.ceil(faqs.length / 2)}
                question={faq.question}
                answer={faq.answer}
                isOpen={index + Math.ceil(faqs.length / 2) === openIndex}
                anyOpen={openIndex !== -1}
                onClick={() => setOpenIndex((index + Math.ceil(faqs.length / 2)) === openIndex ? -1 : index + Math.ceil(faqs.length / 2))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
