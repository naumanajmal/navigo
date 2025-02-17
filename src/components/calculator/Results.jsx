const Results = ({ loanAmount = null, monthlyPayment = null, interestRate = null }) => {
  const formatValue = (value) => {
    if (value === null) return '---';
    return value.toLocaleString();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl p-6 mb-6 ring-1 ring-secondary/20 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-600 mb-1">Mortgage Payment</div>
          <div className="text-2xl text-gray-900">
            {formatValue(loanAmount)} {loanAmount !== null && <span className="text-sm font-normal text-gray-500">AED</span>}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">Monthly Cost</div>
          <div className="text-2xl text-gray-900">
            {formatValue(monthlyPayment)} {monthlyPayment !== null && <span className="text-sm font-normal text-gray-500">AED</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
