import { useState } from 'react'

const QuoteForm = ({ isMobile, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'purchase',
    message: ''
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
    ? 'bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative'
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
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Get a Quote</h3>
            <p className="mt-2 text-sm text-gray-600">Fill out the form below and we'll get back to you shortly</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-5">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Type
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                >
                  <option value="purchase">Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="heloc">HELOC</option>
                  <option value="reverse">Reverse Mortgage</option>
                </select>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-4 px-6 text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Get Your Quote
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteForm
