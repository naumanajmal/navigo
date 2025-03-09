import { useState, useMemo } from 'react';

const calculateAffordability = ({ monthlyIncome, monthlyDebts, creditCardLimit, age }) => {
  // Rule 1: Check minimum monthly income
  if (monthlyIncome < 10000) {
    return {
      error: "Monthly income must be minimum AED 10,000",
      isEligible: false
    };
  }

  // Rule 2: Check age limits
  if (age < 21) {
    return {
      error: "Minimum age requirement is 21 years",
      isEligible: false
    };
  }
  if (age > 60) {
    return {
      error: "Age should not be more than 60 years",
      isEligible: false
    };
  }

  // Rule 4: Calculate credit card debt contribution (5% of limit)
  const creditCardDebt = creditCardLimit * 0.05;
  
  // Rule 5: Calculate total current debt (monthly debt + 3% of credit card limit)
  const totalCurrentDebt = monthlyDebts + (creditCardLimit * 0.03);
  
  // Rule 3 & 6: Calculate maximum EMI (50% of monthly income - total current debt)
  const maxDBR = monthlyIncome * 0.5;
  const maxEMI = maxDBR - totalCurrentDebt;

  if (maxEMI <= 0) {
    return {
      error: "Your current debt obligations exceed the maximum allowed DBR of 50%",
      isEligible: false
    };
  }
  
  // Rule 8: Calculate tenure based on age
  const tenureInYears = Math.min(70 - age, 25);
  
  // Rule 7: Fixed interest rate
  const annualInterestRate = 6.25;
  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  const numberOfPayments = tenureInYears * 12;

  // Rule 9: Calculate eligibility using PV formula
  const maxLoanAmount = maxEMI * 
    ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)));

  return {
    maxLoanAmount: Math.floor(maxLoanAmount),
    creditCardDebt: Math.floor(creditCardDebt),
    totalCurrentDebt: Math.floor(totalCurrentDebt),
    maxEMI: Math.floor(maxEMI),
    dbr: maxDBR,
    tenureInYears,
    isEligible: true
  };
};

const AffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(28000);
  const [monthlyDebts, setMonthlyDebts] = useState(3000);
  const [creditCardLimit, setCreditCardLimit] = useState(20000);
  const [age, setAge] = useState(38);

  const formatValue = (value, isMonthly = false) => {
    if (value === null) return '---';
    return value.toLocaleString();
  };

  const formatInputValue = (value) => {
    if (!value) return '';
    return value.toLocaleString();
  };

  const handleInputChange = (e, setter) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setter(rawValue === '' ? 0 : Number(rawValue));
  };

  const handleFocus = (value, setter) => {
    if (value === 0) {
      setter('');
    }
  };

  const result = useMemo(() => {
    return calculateAffordability({
      monthlyIncome,
      monthlyDebts,
      creditCardLimit,
      age
    });
  }, [monthlyIncome, monthlyDebts, creditCardLimit, age]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-xl ring-1 ring-gray-100 hover:shadow-2xl transition-shadow duration-500">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12">
        {/* Left Side - Inputs */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Monthly Income (AED)
            </label>
            <input
              type="text"
              value={formatInputValue(monthlyIncome)}
              onChange={(e) => handleInputChange(e, setMonthlyIncome)}
              onFocus={() => handleFocus(monthlyIncome, setMonthlyIncome)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
           </div>

          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Monthly Debt Obligations (Loan Installments) (AED)
            </label>
            <input
              type="text"
              value={formatInputValue(monthlyDebts)}
              onChange={(e) => handleInputChange(e, setMonthlyDebts)}
              onFocus={() => handleFocus(monthlyDebts, setMonthlyDebts)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Total Credit Card Limit (All cards) (AED)
            </label>
            <input
              type="text"
              value={formatInputValue(creditCardLimit)}
              onChange={(e) => handleInputChange(e, setCreditCardLimit)}
              onFocus={() => handleFocus(creditCardLimit, setCreditCardLimit)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 text-sm font-medium">
              Current Age (In years)
            </label>
            <input
              type="text"
              value={age || ''}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                const numValue = value === '' ? 0 : Number(value);
                if (numValue <= 100) {  
                  setAge(numValue);
                }
              }}
              onFocus={() => handleFocus(age, setAge)}
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Right Side - Results and CTA */}
        <div className="md:col-span-2 flex flex-col justify-between h-full space-y-8">
          {/* Results Section */}
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-6 sm:p-8 ring-1 ring-secondary/20 shadow-sm h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Your Affordability Summary</h3>
              <div className="space-y-8">
                {result.isEligible ? (
                  <>
                    <div>
                      <div className="text-sm sm:text-base text-gray-600 mb-2">Maximum Mortgage Amount</div>
                      <div className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-semibold">
                        {formatCurrency(result.maxLoanAmount)}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm text-gray-500 italic">This calculation is based off of live products in our database</p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-red-600">Not Eligible</p>
                    <p className="text-sm text-red-600">{result.error}</p>
                    {result.error === "Age should not be more than 60 years" && (
                      <p className="text-sm text-gray-600 mt-2">
                        Please note that the maximum age at loan maturity is 70 years. Therefore, applicants above 60 years of age are not eligible for a mortgage.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-medium text-lg hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-200 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffordabilityCalculator;
