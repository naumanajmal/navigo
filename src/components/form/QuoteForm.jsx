import { useState } from 'react'

const QuoteForm = ({ isMobile, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mortgageAmount: '',
    propertyType: 'apartment'
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
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    if (isMobile && onClose) {
      onClose()
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
              <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-primary rounded-full"></div>
              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#0A2342]">Get a Call Back Shortly</h3>
            </div>
          </div>
          
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
                  className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="Enter amount"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="propertyType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                >
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="shop">Shop</option>
                </select>
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
                  className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="Enter your name"
                  required
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
                  className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Get Your Quote Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteForm
