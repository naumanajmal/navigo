import { useState, useEffect } from "react";

const formatNumber = (value) => {
  if (!value) return "";
  return Number(value).toLocaleString("en-US");
};

const parseNumber = (value) => {
  return Number(value.replace(/,/g, ""));
};

const MIN_PROPERTY_VALUE = 200000;

const getMinDownPaymentPercentage = (residencyStatus) => {
  switch (residencyStatus) {
    case 'UAE National':
      return 15;
    case 'UAE Resident':
      return 20;
    case 'Non-Resident':
      return 40;
    default:
      return 20;
  }
};

const PropertyDetails = ({ propertyValue, setPropertyValue, downPayment, setDownPayment, residencyStatus }) => {
  const minDownPaymentPercentage = getMinDownPaymentPercentage(residencyStatus);
  const minDownPayment = (propertyValue * minDownPaymentPercentage) / 100;
  const [propertyInput, setPropertyInput] = useState(formatNumber(propertyValue));
  const [downPaymentInput, setDownPaymentInput] = useState(formatNumber(downPayment));
  const [propertyError, setPropertyError] = useState("");
  const [downPaymentError, setDownPaymentError] = useState("");

  // Check minimum down payment when residency status changes
  useEffect(() => {
    const currentMinDownPayment = (propertyValue * minDownPaymentPercentage) / 100;
    if (downPayment < currentMinDownPayment) {
      setDownPaymentError(`Minimum down payment for ${residencyStatus} is ${formatNumber(currentMinDownPayment)} AED (${minDownPaymentPercentage}%)`);
    } else {
      setDownPaymentError("");
    }
  }, [residencyStatus, propertyValue, minDownPaymentPercentage, downPayment]); // Include all dependencies for proper updates

  const handlePropertyChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    const parsedValue = parseNumber(rawValue);
    
    if (parsedValue < MIN_PROPERTY_VALUE && parsedValue !== 0) {
      setPropertyError(`Minimum property value is ${formatNumber(MIN_PROPERTY_VALUE)} AED`);
    } else {
      setPropertyError("");
    }
    
    setPropertyInput(formatNumber(rawValue));
    setPropertyValue(parsedValue);

    // Calculate new minimum down payment based on new property value
    const newMinDownPayment = (parsedValue * minDownPaymentPercentage) / 100;
    
    // If current down payment is less than new minimum, update it
    if (downPayment < newMinDownPayment) {
      setDownPayment(newMinDownPayment);
      setDownPaymentInput(formatNumber(newMinDownPayment));
    }
    // If current down payment is more than new property value, cap it
    else if (downPayment > parsedValue) {
      setDownPayment(parsedValue);
      setDownPaymentInput(formatNumber(parsedValue));
    }
  };

  const handleDownPaymentChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    const parsedValue = parseNumber(rawValue);
    const currentMinDownPayment = (propertyValue * minDownPaymentPercentage) / 100;
    
    if (parsedValue > propertyValue) {
      setDownPaymentError("Down payment cannot exceed property value");
    } else if (parsedValue < currentMinDownPayment) {
      setDownPaymentError(`Minimum down payment for ${residencyStatus} is ${formatNumber(currentMinDownPayment)} AED (${minDownPaymentPercentage}%)`);
    } else {
      setDownPaymentError("");
    }
    
    setDownPaymentInput(formatNumber(rawValue));
    setDownPayment(parsedValue);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
      <div>
        <label className="block text-gray-700 mb-1.5 sm:mb-2 text-sm">Property Value</label>
        <div className="relative">
          <input
            type="text"
            value={propertyInput}
            onChange={handlePropertyChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base">AED</span>
        </div>
        {propertyError && (
          <p className="text-red-500 text-xs mt-1">{propertyError}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 mb-1.5 sm:mb-2 text-sm">Down Payment</label>
        <div className="relative">
          <input
            type="text"
            value={downPaymentInput}
            onChange={handleDownPaymentChange}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-white/80 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-base">AED</span>
        </div>
        {downPaymentError && (
          <p className="text-red-500 text-xs mt-1">{downPaymentError}</p>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
