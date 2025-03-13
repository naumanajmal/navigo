import { Link } from 'react-router-dom'
import { services } from '../services/servicesData.jsx'

const ServicesMegaMenu = ({ isMobile, onClose }) => {
  if (isMobile) {
    return (
      <div className="pl-4 space-y-4 mt-4">
        {/* Mortgage Services */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 px-4">MORTGAGE SERVICES</h3>
          <div className="mt-2 space-y-1">
            {services.slice(0, 3).map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                onClick={onClose}
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Financial Advisory */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 px-4">FINANCIAL ADVISORY</h3>
          <div className="mt-2 space-y-1">
            {services.slice(3, 6).map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                onClick={onClose}
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 px-4">BUSINESS SOLUTIONS</h3>
          <div className="mt-2 space-y-1">
            {services.slice(6, 9).map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`}
                onClick={onClose}
                className="block px-4 py-2 text-primary hover:text-secondary hover:bg-gray-50 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="hidden md:block mt-6 mx-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-primary mb-3">Why Choose Us?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Expert Financial Guidance
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tailored Solutions
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Global Network
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 max-w-5xl mx-auto">
      {/* Mortgage Services */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Mortgage Services</h3>
        <div className="space-y-2">
          {services.slice(0, 3).map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`} 
              onClick={onClose}
              className="block text-gray-600 hover:text-secondary transition-colors py-1"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Financial Advisory */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Financial Advisory</h3>
        <div className="space-y-2">
          {services.slice(3, 6).map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`} 
              onClick={onClose}
              className="block text-gray-600 hover:text-secondary transition-colors py-1"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Business Solutions */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">Business Solutions</h3>
        <div className="space-y-2">
          {services.slice(6, 9).map((service) => (
            <Link 
              key={service.id}
              to={`/services/${service.id}`} 
              onClick={onClose}
              className="block text-gray-600 hover:text-secondary transition-colors py-1"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>
 
    </div>
  )
}

export default ServicesMegaMenu
