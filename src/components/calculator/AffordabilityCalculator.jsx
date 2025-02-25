import { useState, useMemo } from 'react';

const calculateAffordability = ({ monthlyIncome, monthlyExpenses, downPayment, interestRate, loanDuration }) => {
  // Maximum monthly payment (50% of disposable income as a general rule)
  const disposableIncome = monthlyIncome - monthlyExpenses;
  const maxMonthlyPayment = disposableIncome * 0.5;

  // Calculate maximum loan amount using the PMT formula
  const monthlyInterestRate = (interestRate / 100) / 12;
  const numberOfPayments = loanDuration * 12;

  // PMT formula reversed to find Principal (maximum loan amount)
  const maxLoanAmount = maxMonthlyPayment * 
    ((Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)));

  // Maximum property value (loan amount + down payment)
  const maxPropertyValue = maxLoanAmount + downPayment;

  return {
    maxPropertyValue: isNaN(maxPropertyValue) ? 0 : maxPropertyValue,
    maxMonthlyPayment: isNaN(maxMonthlyPayment) ? 0 : maxMonthlyPayment,
    maxLoanAmount: isNaN(maxLoanAmount) ? 0 : maxLoanAmount
  };
};

const AffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(30000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(10000);
  const [downPayment, setDownPayment] = useState(200000);
  const [loanDuration, setLoanDuration] = useState(25);
  const [residencyStatus, setResidencyStatus] = useState('UAE National');

  // Use the same interest rate logic as the mortgage calculator
  const interestRate = 4.99; // Using variable rate as default

  const { maxPropertyValue, maxMonthlyPayment, maxLoanAmount } = useMemo(() => {
    return calculateAffordability({
      monthlyIncome,
      monthlyExpenses,
      downPayment,
      interestRate,
      loanDuration
    });
  }, [monthlyIncome, monthlyExpenses, downPayment, interestRate, loanDuration]);

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
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  min="0"
                />
              </div>

              {/* Monthly Expenses Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Monthly Expenses (AED)
                </label>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  min="0"
                />
              </div>

              {/* Down Payment Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Down Payment (AED)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  min="0"
                />
              </div>

              {/* Loan Duration Input */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Loan Duration (Years)
                </label>
                <input
                  type="number"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  min="1"
                  max="35"
                />
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 ring-1 ring-secondary/20 shadow-sm space-y-5">
                <div>
                  <p className="text-sm text-gray-600">Maximum Property Value</p>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(maxPropertyValue)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Maximum Monthly Payment</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {formatCurrency(maxMonthlyPayment)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Maximum Loan Amount</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {formatCurrency(maxLoanAmount)}
                  </p>
                </div>
              </div>
            </div>
    </div>
  );
};

export default AffordabilityCalculator;
