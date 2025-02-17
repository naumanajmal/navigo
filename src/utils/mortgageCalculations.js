// Interest rates (these could be fetched from an API in a real application)
const INTEREST_RATES = {
  Fixed: {
    'UAE National': 0.0425, // 4.25%
    'UAE Resident': 0.0450, // 4.50%
    'Non-Resident': 0.0475  // 4.75%
  },
  Variable: {
    'UAE National': 0.0400, // 4.00%
    'UAE Resident': 0.0425, // 4.25%
    'Non-Resident': 0.0450  // 4.50%
  }
}

/**
 * Calculate monthly mortgage payment using the formula:
 * M = P[r(1 + r)^n]/[(1 + r)^n - 1]
 * where:
 * M = Monthly payment
 * P = Principal (loan amount)
 * r = Monthly interest rate (annual rate / 12)
 * n = Total number of months (years * 12)
 */
export const calculateMonthlyPayment = ({
  propertyValue,
  downPayment,
  loanDuration,
  mortgageType,
  residencyStatus
}) => {
  const loanAmount = propertyValue - downPayment
  const annualRate = INTEREST_RATES[mortgageType][residencyStatus]
  const monthlyRate = annualRate / 12
  const totalMonths = loanDuration * 12

  // Handle edge cases
  if (loanAmount <= 0 || monthlyRate <= 0 || totalMonths <= 0) {
    return { monthlyPayment: 0, loanAmount: 0 }
  }

  // Calculate monthly payment using the mortgage formula
  const monthlyPayment = loanAmount * 
    (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
    (Math.pow(1 + monthlyRate, totalMonths) - 1)

  return {
    monthlyPayment: Math.round(monthlyPayment),
    loanAmount,
    interestRate: annualRate * 100 // Convert to percentage for display
  }
}
