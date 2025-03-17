import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import { useQuoteForm } from '../../context/useQuoteForm'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'

const getInitialFormState = (prefilledAmount) => ({
  name: '',
  email: '',
  phone: '',
  countryCode: '',
  mortgageAmount: prefilledAmount || ''
})

const SimpleQuoteForm = () => {
  const { isQuoteFormOpen: isOpen, closeQuoteForm: onClose, prefilledAmount, source } = useQuoteForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState(() => getInitialFormState(prefilledAmount))

  // Update form when prefilledAmount changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      mortgageAmount: prefilledAmount || ''
    }))
  }, [prefilledAmount])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhoneChange = (value, country) => {
    const phoneDigits = value.replace(/\D/g, '')
    if (phoneDigits.length < 8) {
      setErrors(prev => ({
        ...prev,
        phone: 'Phone number is invalid'
      }))
    } else {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors.phone
        return newErrors
      })
    }
    setFormData(prev => ({
      ...prev,
      phone: value,
      countryCode: country.dialCode
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {}
    if (!formData.mortgageAmount) newErrors.mortgageAmount = 'Mortgage amount is required'
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    else if (formData.phone.replace(/\D/g, '').length < 8) newErrors.phone = 'Phone number is invalid'
    
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      countryCode: formData.countryCode,
      mortgageAmount: parseFloat(formData.mortgageAmount) || 0,
      source
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('https://navigo.ae/navigoadmin/wp-json/navigo/v1/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit form')
      }

      // Clear form data and errors on successful submission
      setFormData(getInitialFormState(''))
      setErrors({}) // Clear all errors
      setShowSuccess(true)
      
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {showSuccess ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              Your request has been submitted successfully. Our team will contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get a Call Back Shortly
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="mortgageAmount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Mortgage Amount (AED)
                </label>
                <input
                  type="number"
                  name="mortgageAmount"
                  id="mortgageAmount"
                  value={formData.mortgageAmount}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 sm:py-2.5 border rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${
                    errors.mortgageAmount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter amount"
                />
                {errors.mortgageAmount && (
                  <p className="mt-1 text-xs text-red-600">{errors.mortgageAmount}</p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 sm:py-2.5 border rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 sm:py-2.5 border rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  country={'ae'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputClass={`block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 pl-[4.5rem] text-sm sm:text-base rounded-xl border-2 ${errors.phone ? 'border-red-500' : 'border-gray-200'} bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400`}
                  containerClass="relative phone-input-container"
                  buttonClass="absolute inset-y-0 left-0 flex items-center px-3"
                  buttonStyle={{ 
                    backgroundColor: 'transparent', 
                    border: 'none',
                    padding: '0 12px'
                  }}
                  inputStyle={{ 
                    width: '100%', 
                    borderRadius: '12px',
                    height: '46px',
                    border: '2px solid #e5e7eb',
                  }}
                  placeholder="Enter your phone number"
                  enableSearch={true}
                  searchStyle={{
                    width: '100%',
                    height: '36px',
                    borderRadius: '8px',
                    padding: '8px',
                    border: '2px solid #e5e7eb'
                  }}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            <button
              type="submit"              disabled={isSubmitting}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SimpleQuoteForm
