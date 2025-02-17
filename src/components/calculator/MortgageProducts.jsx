const MortgageProducts = ({ mortgageType, setMortgageType }) => {
  return (
    <div className="mb-8">
      <label className="block text-gray-700 mb-3 text-sm font-medium">Rates</label>
      <div className="grid grid-cols-2 gap-3">
        {['Fixed', 'Variable'].map((type) => (
          <button
            key={type}
            onClick={() => setMortgageType(type)}
            className={`relative py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              mortgageType === type
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md ring-1 ring-gray-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MortgageProducts
