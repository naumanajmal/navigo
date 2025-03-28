import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  countryCode: '',
  mortgageAmount: '',
  propertyType: '',
  residencyStatus: '',
  age: '',
  employmentType: '',
  propertyValue: 400000,
  purchaseTimeline: ''
}

const QuoteForm = ({ isMobile, onClose, isContactPage }) => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'age' && value) {  
      const age = parseInt(value)
      if (age < 20 || age > 61) {
        setErrors(prev => ({
          ...prev,
          age: 'Age must be between 21 and 60 years'
        }))
      } else {
        setErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors.age
          return newErrors
        })
      }
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhoneChange = (value, country) => {
    // Remove all non-digit characters to check actual length
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
    if (step === 1) {
      // Validate first form
      const newErrors = {}
      if (!formData.mortgageAmount) newErrors.mortgageAmount = 'Mortgage amount is required'
      if (!formData.name) newErrors.name = 'Name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
      if (!formData.phone) newErrors.phone = 'Phone number is required'
      else if (formData.phone.replace(/\D/g, '').length < 8) newErrors.phone = 'Phone number is invalid'

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
      setErrors({})
      setStep(2)
    } else {
      try {
        setIsSubmitting(true)
        const response = await fetch('https://navigo.ae/navigoadmin/wp-json/navigo/v1/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            countryCode: formData.countryCode,
            mortgageAmount: parseFloat(formData.mortgageAmount) || 0,
            propertyType: formData.propertyType,
            residencyStatus: formData.residencyStatus,
            age: parseInt(formData.age) || 0,
            employmentType: formData.employmentType,
            propertyValue: parseFloat(formData.propertyValue) || 0,
            purchaseTimeline: formData.purchaseTimeline,
            source: 'hero_section'
          })
        })

        if (!response.ok) {
          throw new Error('Failed to submit form')
        }

        // Reset form and show success message
        setFormData(initialFormState)
        setStep(1)
        setShowSuccess(true)
        
        // Hide success message after 5 seconds if not closed
        setTimeout(() => {
          setShowSuccess(false)
          if (isMobile && onClose) {
            onClose()
          }
        }, 5000)
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Failed to submit form. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const formClasses = isMobile
    ? 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
    : isContactPage ? 'w-full max-w-none bg-white rounded-2xl' : 'w-full max-w-md bg-white rounded-2xl shadow-xl p-8'

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
              onClick={() => {
                setShowSuccess(false)
                if (isMobile && onClose) onClose()
              }}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mr-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
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
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none`}
                        style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none`}
                        style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="relative">
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
                    <div className="relative">
                      <label htmlFor="mortgageAmount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        Mortgage Amount <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="number"
                        id="mortgageAmount"
                        name="mortgageAmount"
                        value={formData.mortgageAmount}
                        onChange={handleChange}
                        className={`block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 ${errors.mortgageAmount ? 'border-red-500' : 'border-gray-200'} bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none`}
                        style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                        placeholder="Enter amount"
                      />
                      {errors.mortgageAmount && (
                        <p className="mt-1 text-xs text-red-500">{errors.mortgageAmount}</p>
                      )}
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
                          className="block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 pr-10 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base appearance-none"
                          style={{ WebkitAppearance: 'none' }}
                        >
                          <option value="">Select Property Type</option>
                          <option value="apartment">Apartment</option>
                          <option value="villa">Villa</option>
                          <option value="shop">Commercial</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
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
                        min="21"
                        max="60"
                        value={formData.age}
                        onChange={handleChange}
                        className={`block w-full h-[42px] sm:h-[46px] px-3 sm:px-4 text-sm sm:text-base rounded-xl border-2 ${errors.age ? 'border-red-500' : 'border-gray-200'} bg-white text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 appearance-none`}
                        style={{ WebkitAppearance: 'none', borderRadius: '12px' }}
                        placeholder="Enter your age (21-60)"
                      />
                      {errors.age && (
                        <p className="mt-1 text-xs text-red-500">{errors.age}</p>
                      )}
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
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : (step === 1 ? 'Get Your Quote Now' : 'Submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuoteForm
