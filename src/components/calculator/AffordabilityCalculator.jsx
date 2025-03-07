import { useState, useMemo } from 'react';

const calculateAffordability = ({ monthlyIncome, monthlyDebts, creditCardLimit, age }) => {
  // Rule 1: Check minimum monthly income
  if (monthlyIncome < 10000) {
    return {
      error: "Monthly income must be minimum AED 10,000",
      isEligible: false
    };
  }

  // Rule 2: Check age limit
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
  const tenureInYears = 70 - age;
  
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

  const handleInputChange = (e, setter) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setter(value === '' ? 0 : Number(value));
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
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl ring-1 ring-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Monthly Income (AED)
          </label>
          <input
            type="text"
            value={monthlyIncome || ''}
            onChange={(e) => handleInputChange(e, setMonthlyIncome)}
            onFocus={() => handleFocus(monthlyIncome, setMonthlyIncome)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
          <p className="text-xs text-gray-500 mt-1">Minimum AED 10,000</p>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 text-sm font-medium">
            Monthly Debt Obligations (Loan Installments) (AED)
          </label>
          <input
            type="text"
            value={monthlyDebts || ''}
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
            value={creditCardLimit || ''}
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
          <p className="text-xs text-gray-500 mt-1">Age above 60 years will not be eligible for mortgage</p>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-4 sm:p-6 mt-4 ring-1 ring-secondary/20 shadow-sm">
          {result.isEligible ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Maximum Mortgage Amount</p>
                <p className="text-3xl font-bold text-primary">
                  {formatCurrency(result.maxLoanAmount)}
                </p>
              </div>
{/*               
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Credit Card Monthly Debt (5%)</p>
                  <p>{formatCurrency(result.creditCardDebt)}</p>
                </div>
                <div>
                  <p className="font-medium">Total Current Debt (3%)</p>
                  <p>{formatCurrency(result.totalCurrentDebt)}</p>
                </div>
                <div>
                  <p className="font-medium">Maximum Monthly EMI</p>
                  <p>{formatCurrency(result.maxEMI)}</p>
                </div>
                <div>
                  <p className="font-medium">Debt Burden Ratio (DBR)</p>
                  <p>{formatCurrency(result.dbr)} (50%)</p>
                </div>
                <div>
                  <p className="font-medium">Interest Rate</p>
                  <p>6.25% per annum</p>
                </div>
                <div>
                  <p className="font-medium">Loan Tenure</p>
                  <p>{result.tenureInYears} years</p>
                </div>
              </div> */}
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-lg font-medium text-red-600">Not Eligible</p>
              <p className="text-sm text-red-600">{result.error}</p>
              {result.error === "Age should not be more than 60 years" && (
                <p className="text-sm text-gray-600 mt-2">
                  The maximum eligible age for a mortgage is 60 years. This ensures the loan can be completed before retirement age.
                </p>
              )}
              {result.error === "Monthly income must be minimum AED 10,000" && (
                <p className="text-sm text-gray-600 mt-2">
                  A minimum monthly income of AED 10,000 is required to ensure adequate repayment capacity.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffordabilityCalculator;
