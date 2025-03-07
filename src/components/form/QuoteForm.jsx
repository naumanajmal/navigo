import { useState } from 'react'

const QuoteForm = ({ isMobile, onClose }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mortgageAmount: '',
    propertyType: 'apartment',
    // Questionnaire fields
    residencyStatus: '',
    age: '',
    employmentType: '',
    propertyValue: 400000,
    purchaseTimeline: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Handle final form submission logic here
      console.log('Form submitted:', formData)
      if (isMobile && onClose) {
        onClose()
      }
    }
  }

  const formClasses = isMobile
    ? 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
    : 'w-full max-w-md bg-white rounded-2xl shadow-xl p-8'

  const formContentClasses = isMobile
    ? 'bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md relative'
    : ''

  return (
    <div className={formClasses}>
      <div className={formContentClasses}>
        {isMobile && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {step === 1 ? 'Get a Call Back Shortly' : 'Tell Us More About You'}
              </h3>
            </div>
          </div>
          
          <div className={`${step === 2 ? 'h-[400px] overflow-y-auto pr-4 -mr-4' : ''}`}>
            {step === 1 ? (
              <div className="space-y-6">
                <div className="space-y-5">
                  <div className="relative">
                    <label htmlFor="mortgageAmount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Mortgage Amount
                    </label>
                    <input
                      type="number"
                      id="mortgageAmount"
                      name="mortgageAmount"
                      value={formData.mortgageAmount}
                      onChange={handleChange}
                      className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none"
                      style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                      placeholder="Enter amount"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="propertyType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Property Type
                    </label>
                    <div className="relative">
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 pr-10 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base appearance-none"
                        style={{ WebkitAppearance: 'none' }}
                      >
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="shop">Shop</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none"
                      style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none"
                      style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-5">
                  {/* Residency Status */}
                  <div className="relative">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Are you a resident or a non resident in UAE?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="residencyStatus"
                          value="resident"
                          checked={formData.residencyStatus === 'resident'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">Resident</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="residencyStatus"
                          value="non-resident"
                          checked={formData.residencyStatus === 'non-resident'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">Non-resident</span>
                      </label>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="relative">
                    <label htmlFor="age" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      What is your current age?
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none"
                      style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                      placeholder="Enter your age"
                    />
                  </div>

                  {/* Employment Type */}
                  <div className="relative">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Are you salaried or self-employed?
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="employmentType"
                          value="salaried"
                          checked={formData.employmentType === 'salaried'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">Salaried</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="employmentType"
                          value="self-employed"
                          checked={formData.employmentType === 'self-employed'}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary"
                        />
                        <span className="ml-2 text-sm text-gray-700">Self-employed</span>
                      </label>
                    </div>
                  </div>

                  {/* Property Value */}
                  <div className="relative">
                    <label htmlFor="propertyValue" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      What is the approximate value of the property you are planning to purchase?
                    </label>
                    <input
                      type="range"
                      id="propertyValue"
                      name="propertyValue"
                      min="400000"
                      max="2000000"
                      step="50000"
                      value={formData.propertyValue}
                      onChange={handleChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">AED 400,000</span>
                      <span className="text-xs text-gray-500">Selected: AED {formData.propertyValue.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">AED 2,000,000+</span>
                    </div>
                  </div>

                  {/* Purchase Timeline */}
                  <div className="relative">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      What is your anticipated timeline for finalizing and purchasing the property?
                    </label>
                    <div className="space-y-2">
                      {['Less than a month', '1-2 months', '2-3 months', 'More than 3 months'].map((timeline) => (
                        <label key={timeline} className="flex items-center">
                          <input
                            type="radio"
                            name="purchaseTimeline"
                            value={timeline}
                            checked={formData.purchaseTimeline === timeline}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{timeline}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {step === 1 ? 'Get Your Quote Now' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteForm
