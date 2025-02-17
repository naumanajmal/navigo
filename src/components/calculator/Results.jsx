const Results = ({ loanAmount = null, monthlyPayment = null, interestRate = null }) => {
  const formatValue = (value, isMonthly = false) => {
    if (value === null) return '---';
    if (isMonthly) {
      return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return value.toLocaleString();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 ring-1 ring-secondary/20 shadow-sm">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div>
          <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Mortgage Payment</div>
          <div className="text-lg sm:text-xl md:text-2xl text-gray-900 font-semibold">
            {formatValue(loanAmount)} {loanAmount !== null && <span className="text-xs sm:text-sm font-normal text-gray-500 ml-0.5">AED</span>}
          </div>
        </div>
        <div>
          <div className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">Monthly Cost</div>
          <div className="text-lg sm:text-xl md:text-2xl text-gray-900 font-semibold">
            {formatValue(monthlyPayment, true)} {monthlyPayment !== null && <span className="text-xs sm:text-sm font-normal text-gray-500 ml-0.5">AED</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
