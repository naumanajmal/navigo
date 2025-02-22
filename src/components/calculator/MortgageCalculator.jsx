import { useState, useMemo, useEffect } from 'react'
import PropertyDetails from './PropertyDetails'
import LoanDuration from './LoanDuration'
import MortgageProducts from './MortgageProducts'
import YearRange from './YearRange'
import Results from './Results'
const getInterestRate = (residencyStatus, mortgageType, yearRange) => {
  if (mortgageType === 'Variable') {
    switch (residencyStatus) {
      case 'UAE National':
      case 'UAE Resident':
        return 4.99;
      case 'Non-Resident':
        return 5.24;
      default:
        return 4.99;
    }
  } else { // Fixed
    const rates = {
      'UAE National': {
        '1-2 Years': 3.75,
        '3 Years': 3.94,
        '5 Years': 3.99
      },
      'UAE Resident': {
        '1-2 Years': 3.75,
        '3 Years': 3.94,
        '5 Years': 3.99
      },
      'Non-Resident': {
        '1-2 Years': 4.10,
        '3 Years': 4.24,
        '5 Years': 4.59
      }
    };
    return rates[residencyStatus]?.[yearRange] || 3.75;
  }
};

const calculateMonthlyPayment = ({ propertyValue, downPayment, loanDuration, mortgageType, residencyStatus, yearRange }) => {
  const loanAmount = propertyValue - downPayment;
  const interestRate = getInterestRate(residencyStatus, mortgageType, yearRange);
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanDuration * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return {
    monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
    loanAmount,
    interestRate
  };
};

const MortgageCalculator = () => {
  const [residencyStatus, setResidencyStatus] = useState('UAE National')
  const [propertyValue, setPropertyValue] = useState(1000000)
  const [downPayment, setDownPayment] = useState(150000) // 15% of 1000000 for UAE National

  // Update down payment when residency status changes
  useEffect(() => {
    const minPercentage = {
      'UAE National': 15,
      'UAE Resident': 20,
      'Non-Resident': 40
    }[residencyStatus] || 20;
    
    const minDownPayment = (propertyValue * minPercentage) / 100;
    if (downPayment < minDownPayment) {
      setDownPayment(minDownPayment);
    }
  }, [residencyStatus, propertyValue]);
  const [loanDuration, setLoanDuration] = useState(25)
  const [mortgageType, setMortgageType] = useState('Fixed')
  const [yearRange, setYearRange] = useState('1-2 yrs')

  // Calculate minimum down payment
  const minDownPaymentPercentage = {
    'UAE National': 15,
    'UAE Resident': 20,
    'Non-Resident': 40
  }[residencyStatus] || 20;
  
  const minDownPayment = (propertyValue * minDownPaymentPercentage) / 100;
  
  // Check if values are valid
  const isValidInput = propertyValue >= 200000 && 
                      downPayment >= minDownPayment && 
                      downPayment <= propertyValue;

  // Calculate mortgage and monthly payments
  const { monthlyPayment, loanAmount, interestRate } = useMemo(() => {
    if (!isValidInput) {
      return { monthlyPayment: null, loanAmount: null, interestRate: null };
    }
    return calculateMonthlyPayment({
      propertyValue,
      downPayment,
      loanDuration,
      mortgageType,
      residencyStatus,
      yearRange
    });
  }, [propertyValue, downPayment, loanDuration, mortgageType, residencyStatus, yearRange, isValidInput])
  
  return (
    <section className="bg-gradient-to-b from-[#e5f6ff] to-white py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Background decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          {/* Left Side - Text */}
          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6 md:pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Calculate Your Mortgage Instantly
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Enter your details and see exactly what your monthly mortgage payments could look like.
            </p>
          </div>

          {/* Right Side - Calculator */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow duration-500">
            {/* Residency Status */}
            <div className="mb-8">
              <label className="block text-gray-700 mb-3 text-sm font-medium">Residency status</label>
              <div className="grid grid-cols-3 gap-3">
                {['UAE National', 'UAE Resident', 'Non-Resident'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setResidencyStatus(status)}
                    className={`relative py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      residencyStatus === status
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                        : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md ring-1 ring-gray-100'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            

            {/* Property Value & Down Payment */}
            <PropertyDetails
              propertyValue={propertyValue}
              setPropertyValue={setPropertyValue}
              downPayment={downPayment}
              setDownPayment={setDownPayment}
              residencyStatus={residencyStatus}
            />

            {/* Loan Duration */}
            <LoanDuration
              loanDuration={loanDuration}
              setLoanDuration={setLoanDuration}
            />

            {/* Popular mortgage products */}
            <MortgageProducts
              mortgageType={mortgageType}
              setMortgageType={setMortgageType}
            />

            {/* Year Range - Only show for Fixed rate */}
            {mortgageType === 'Fixed' && (
              <YearRange
                yearRange={yearRange}
                setYearRange={setYearRange}
              />
            )}

            {/* Results */}
            <Results
              loanAmount={loanAmount}
              monthlyPayment={monthlyPayment}
              interestRate={interestRate}
            />

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-medium text-lg hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MortgageCalculator