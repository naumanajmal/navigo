import { Link } from 'react-router-dom'
import { services } from '../services/servicesData.jsx'
import PropTypes from 'prop-types'

const ServicesMegaMenu = ({ isMobile, onClose }) => {
  // Group services into categories
  const mortgageServices = [1, 2, 3, 4, 10, 11]; // Residential, Commercial, Non-Resident, Refinance, UAE/GCC, Mega Loans, Equity Release, Plot & Land, Under Construction
  const financialServices = [6, 7, 8, 9, 15]; // Corporate & SME, Personal Loans, Project Finance, Trade Finance, Portfolio Consolidation, Islamic Finance
  const legalServices = [5, 16, 12, 13, 14]; // Professional Legal Support

  const getServicesByIds = (ids) => {
    return services.filter(service => ids.includes(service.id));
  };

  if (isMobile) {
    return (
      <div className="pl-4   mt-4">
        {/* Mortgage Services */}
        <div>
          {/* <h3 className="text-sm font-semibold text-gray-400 px-4">MORTGAGE SERVICES</h3> */}
          <div className=" space-y-1">
            {getServicesByIds(mortgageServices).map((service) => (
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

        {/* Financial Services */}
        <div>
          {/* <h3 className="text-sm font-semibold text-gray-400 px-4">FINANCIAL SERVICES</h3> */}
          <div className=" space-y-1">
            {getServicesByIds(financialServices).map((service) => (
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

        {/* Legal Services */}
        <div>
          {/* <h3 className="text-sm font-semibold text-gray-400 px-4">LEGAL SERVICES</h3> */}
          <div className=" space-y-1">
            {getServicesByIds(legalServices).map((service) => (
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
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-8 max-w-7xl mx-auto">
      {/* Mortgage Services */}
      <div>
        {/* <h3 className="text-lg font-semibold text-primary mb-4">Mortgage Services</h3> */}
        <div className="space-y-2">
          {getServicesByIds(mortgageServices).map((service) => (
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

      {/* Financial Services */}
      <div>
        {/* <h3 className="text-lg font-semibold text-primary mb-4">Financial Services</h3> */}
        <div className="space-y-2">
          {getServicesByIds(financialServices).map((service) => (
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

      {/* Legal Services */}
      <div>
        {/* <h3 className="text-lg font-semibold text-primary mb-4">Legal Services</h3> */}
        <div className="space-y-2">
          {getServicesByIds(legalServices).map((service) => (
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

ServicesMegaMenu.propTypes = {
  isMobile: PropTypes.bool,
  onClose: PropTypes.func
}

ServicesMegaMenu.defaultProps = {
  isMobile: false,
  onClose: () => {}
}

export default ServicesMegaMenu
