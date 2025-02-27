import { useState } from 'react';

const ContactFormOverlay = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mortgageAmount: '',
    propertyType: 'apartment',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-xl mx-auto">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get in Touch
          </h3>
        </div>
        
        <p className="text-gray-600">
          Let our experts guide you through your mortgage journey
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
              required
            />
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
              required
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
              required
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 text-gray-600 appearance-none"
              required
            >
              <option value="" disabled>Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="shop">Shop</option>
            </select>
          </div>

          <div className="col-span-2">
            <input
              type="number"
              name="mortgageAmount"
              value={formData.mortgageAmount}
              onChange={handleChange}
              placeholder="Mortgage Amount (AED)"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400"
              required
            />
          </div>

          <div className="col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
              rows="3"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-white/50 focus:border-primary focus:ring focus:ring-primary/20 transition-all duration-200 placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Send Message
        </button>

        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-600">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-gray-600">Secure & Confidential</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactFormOverlay;
