const YearRange = ({ yearRange, setYearRange }) => {
  return (
    <div className="mb-8">
      <label className="block text-gray-700 mb-3 text-sm font-medium">Fixed Rate Period</label>
      <div className="grid grid-cols-3 gap-3">
        {['1-2 Years', '3 Years', '5 Years'].map((range) => (
          <button
            key={range}
            onClick={() => setYearRange(range)}
            className={`relative py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              yearRange === range
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md ring-1 ring-gray-100'
            }`}
          >
            {range} 
          </button>
        ))}
      </div>
    </div>
  )
}

export default YearRange
