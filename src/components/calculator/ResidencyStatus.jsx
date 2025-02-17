const ResidencyStatus = ({ residencyStatus, setResidencyStatus }) => {
  return (
    <div className="mb-8">
      <label className="block text-gray-700 mb-3 text-sm font-medium">Residency status</label>
      <div className="grid grid-cols-3 gap-3">
        {['UAE National', 'UAE Resident', 'Non-Resident'].map((status) => (
          <button
            key={status}
            onClick={() => setResidencyStatus(status)}
            className={`relative py-2 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              residencyStatus === status
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                : 'bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md ring-1 ring-gray-100'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ResidencyStatus
