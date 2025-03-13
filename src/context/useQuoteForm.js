import { useContext } from 'react'
import { QuoteFormContext } from './quoteFormContext'

export function useQuoteForm() {
  const context = useContext(QuoteFormContext)
  if (!context) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider')
  }
  return context
}
