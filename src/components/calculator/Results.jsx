const Results = ({ loanAmount = null, monthlyPayment = null, interestRate = null }) => {
  const formatValue = (value, isMonthly = false) => {
    if (value === null) return '---';
    if (isMonthly) {
      return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return value.toLocaleString();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-6 sm:p-8 mb-4 sm:mb-6 ring-1 ring-secondary/20 shadow-sm h-full">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Your Mortgage Summary</h3>
      <div className="space-y-8">
        <div>
          <div className="text-sm sm:text-base text-gray-600 mb-2">Total Mortgage Amount</div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-semibold">
            {formatValue(loanAmount)} {loanAmount !== null && <span className="text-base sm:text-lg font-normal text-gray-500 ml-1">AED</span>}
          </div>
        </div>
        <div>
          <div className="text-sm sm:text-base text-gray-600 mb-2">Monthly Payment</div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-semibold">
            {formatValue(monthlyPayment, true)} {monthlyPayment !== null && <span className="text-base sm:text-lg font-normal text-gray-500 ml-1">AED</span>}
          </div>
        </div>
        <div className="pt-2">
          <p className="text-sm text-gray-500 italic">This calculation is based off of live products in our database</p>
        </div>
      </div>
    </div>
  )
}

export default Results
