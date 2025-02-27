import { useState, useMemo } from 'react';

const calculateAffordability = ({ monthlyIncome, monthlyDebts, creditCardLimit, maxDownPayment }) => {
  // Check if disposable income meets minimum requirement
  const disposableIncome = monthlyIncome - monthlyDebts;
  if (disposableIncome <= 7000) {
    return {
      maxLoanAmount: 0,
      minimumDownPayment: 50000,
      isInsufficientIncome: true
    };
  }

  // Calculate Debt Burden Ratio (DBR)
  const dbr = (monthlyDebts / monthlyIncome) * 100;
  
  // Maximum allowed DBR is typically 50%
  const maxAllowedDBR = 50;
  
  // Calculate available monthly payment capacity
  const availableMonthlyPayment = monthlyIncome * (maxAllowedDBR/100) - monthlyDebts;

  // Calculate maximum loan amount using the PMT formula
  const annualInterestRate = 4.99; // Using fixed interest rate
  const monthlyInterestRate = (annualInterestRate / 100) / 12;
  const numberOfPayments = 25 * 12; // Fixed 25-year loan duration

  // PMT formula reversed to find Principal (maximum loan amount)
  let maxLoanAmount = availableMonthlyPayment * 
    ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)));

  // Minimum down payment should be 50,000 AED (20% of minimum mortgage 250,000)
  const minimumDownPayment = 50000;

  // Check if down payment meets minimum requirement
  const isDownPaymentSufficient = maxDownPayment >= minimumDownPayment;

  // If down payment is insufficient or calculated loan is less than minimum, set to 0
  if (!isDownPaymentSufficient || maxLoanAmount < 250000) {
    maxLoanAmount = 0;
  }

  return {
    maxLoanAmount: isNaN(maxLoanAmount) ? 0 : maxLoanAmount,
    minimumDownPayment: isNaN(minimumDownPayment) ? 0 : minimumDownPayment,
    isDownPaymentSufficient,
    isBelowMinimumLoan: maxLoanAmount === 0,
    isInsufficientIncome: false
  };
};

const AffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(15000);
  const [monthlyDebts, setMonthlyDebts] = useState(3000);
  const [creditCardLimit, setCreditCardLimit] = useState(20000);
  const [maxDownPayment, setMaxDownPayment] = useState(200000);

  const { 
    maxLoanAmount,
    minimumDownPayment,
    isDownPaymentSufficient,
    isBelowMinimumLoan,
    isInsufficientIncome
  } = useMemo(() => {
    return calculateAffordability({
      monthlyIncome,
      monthlyDebts,
      creditCardLimit,
      maxDownPayment
    });
  }, [monthlyIncome, monthlyDebts, creditCardLimit, maxDownPayment]);

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
              {/* Monthly Income Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Monthly Income (AED)
                </label>
                <input
                  type="text"
                  value={monthlyIncome || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setMonthlyIncome(value === '' ? 0 : Number(value));
                  }}
                  onFocus={(e) => {
                    if (e.target.value === '0') {
                      setMonthlyIncome('');
                    }
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Monthly Debts Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Monthly Debts (AED)
                </label>
                <input
                  type="text"
                  value={monthlyDebts || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setMonthlyDebts(value === '' ? 0 : Number(value));
                  }}
                  onFocus={(e) => {
                    if (e.target.value === '0') {
                      setMonthlyDebts('');
                    }
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Credit Card Limit Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Total Credit Card Limit (AED)
                </label>
                <input
                  type="text"
                  value={creditCardLimit || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setCreditCardLimit(value === '' ? 0 : Number(value));
                  }}
                  onFocus={(e) => {
                    if (e.target.value === '0') {
                      setCreditCardLimit('');
                    }
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Maximum Down Payment Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Maximum Down Payment (AED)
                </label>
                <input
                  type="text"
                  value={maxDownPayment || ''}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setMaxDownPayment(value === '' ? 0 : Number(value));
                  }}
                  onFocus={(e) => {
                    if (e.target.value === '0') {
                      setMaxDownPayment('');
                    }
                  }}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>


              {/* Results Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 ring-1 ring-secondary/20 shadow-sm">
                {maxLoanAmount > 0 ? (
                  <div>
                    <p className="text-sm text-gray-600">Maximum Mortgage Amount</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(maxLoanAmount)}
                    </p>
                  </div>
                ) : (
                  <div className="text-red-600 space-y-2">
                    {isInsufficientIncome ? (
                      <p>Based on your monthly income and debts, you are unlikely to be offered a mortgage from UAE lenders.</p>
                    ) : (
                      <>
                        <p>Your down payment should be at least 20% of property value.</p>
                        <p>The minimum loan you can get in UAE is AED 250,000</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
    </div>
  );
};

export default AffordabilityCalculator;
