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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What documents do I need for a mortgage application?",
      answer: "For a mortgage application in the UAE, you typically need: Valid passport and Emirates ID, Visa (for expats), Salary certificate or employment contract, Bank statements (last 6 months), Property details, and down payment proof. Additional documents may be required based on your employment status and residency."
    },
    {
      question: "How much down payment do I need?",
      answer: "The minimum down payment varies based on your residency status and property value. UAE Nationals need 15%, UAE Residents need 20%, and Non-Residents need 40% of the property value as down payment. For properties above AED 5 million, higher down payments may be required."
    },
    {
      question: "What affects my mortgage eligibility?",
      answer: "Several factors affect your mortgage eligibility: Income level, employment stability, credit history, existing debt obligations (DSCR), age, residency status, and the property's value. Banks also consider your debt burden ratio, which shouldn't exceed 50% of your monthly income."
    },
    {
      question: "What's the difference between fixed and variable rates?",
      answer: "Fixed rates remain constant for a specific period (usually 1-5 years), providing predictable monthly payments. Variable rates fluctuate with market conditions, potentially offering lower initial rates but with the risk of increasing over time. After the fixed period, rates typically convert to variable."
    },
    {
      question: "Can I pay off my mortgage early?",
      answer: "Yes, you can make early mortgage payments in the UAE. However, most banks charge an early settlement fee (typically 1-3% of the outstanding amount). Some banks also have a minimum period before allowing early settlement. It's important to check these terms with your specific lender."
    },
    {
      question: "How long can my mortgage term be?",
      answer: "Mortgage terms in the UAE typically range from 5 to 25 years. The maximum term often depends on your age at maturity (usually shouldn't exceed 65-70 years old for UAE residents or 75 for UAE nationals). Longer terms mean lower monthly payments but more interest paid overall."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-12 sm:py-20 lg:py-32 overflow-hidden">
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
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
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
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
              <FAQItem
                key={index + Math.ceil(faqData.length / 2)}
                index={index + Math.ceil(faqData.length / 2)}
                question={faq.question}
                answer={faq.answer}
                isOpen={index + Math.ceil(faqData.length / 2) === openIndex}
                anyOpen={openIndex !== -1}
                onClick={() => setOpenIndex((index + Math.ceil(faqData.length / 2)) === openIndex ? -1 : index + Math.ceil(faqData.length / 2))}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;
