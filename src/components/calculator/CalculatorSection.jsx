import { useState } from 'react';
import MortgageCalculator from './MortgageCalculator';
import AffordabilityCalculator from './AffordabilityCalculator';

const CalculatorSection = () => {
  const [activeCalculator, setActiveCalculator] = useState('mortgage');

  const pageTitle = activeCalculator === 'affordability' ? (
     
      <div className='space-y-2  items-center text-center'> 
      <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold   text-primary">
      Affordability Calculator
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-600">
      How much can you afford? Check your affordability based on your income and expense with Navigo's Affordability Calculator.
      </p>
    </div>
    
  ) : (
    <div className='space-y-2  items-center text-center'> 
      <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold   text-primary">
        Mortgage Calculator
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-600">
        Calculate your mortgage now! Plan the home financing with Navigo's Mortgage Calculator.
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-[#e5f6ff] to-white py-10 md:py-16 lg:py-20 relative overflow-hidden border-b border-gray-100">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Calculator Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-white/80 backdrop-blur-lg p-1 ring-1 ring-gray-100 shadow-lg">
            <button
              onClick={() => setActiveCalculator('mortgage')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCalculator === 'mortgage'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mortgage Calculator
            </button>
            <button
              onClick={() => setActiveCalculator('affordability')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCalculator === 'affordability'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Affordability Calculator
            </button>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="lg:grid lg:grid-cols-1 lg:gap-12 lg:items-start">
          {/* Left Side - Title and Description */}
          <div className="h-full flex flex-col justify-center items-center mb-8 lg:mb-0">
              {pageTitle}
          </div>

          {/* Right Side - Calculator */}
          <div className="space-y-6">
            {activeCalculator === 'affordability' ? (
              <AffordabilityCalculator />
            ) : (
              <MortgageCalculator />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
