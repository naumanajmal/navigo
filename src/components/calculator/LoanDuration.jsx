const LoanDuration = ({ loanDuration, setLoanDuration }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2 text-sm">Loan Duration</label>
      <input
        type="range"
        min="1"
        max="25"
        value={loanDuration}
        onChange={(e) => setLoanDuration(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary hover:bg-gray-300 transition-colors"
      />
      <div className="text-right text-gray-700 mt-2 text-sm">{loanDuration} Years</div>
    </div>
  )
}

export default LoanDuration
