import { useState } from 'react'
import PropTypes from 'prop-types'
import { QuoteFormContext } from './quoteFormContext'

export function QuoteFormProvider({ children }) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [prefilledAmount, setPrefilledAmount] = useState('')
  const [source, setSource] = useState('')

  const openQuoteForm = (mortgageAmount, calculatorSource) => {
    setPrefilledAmount(mortgageAmount || '')
    setSource(calculatorSource || '')
    setIsQuoteFormOpen(true)
  }
  const closeQuoteForm = () => {
    setPrefilledAmount('')
    setSource('')
    setIsQuoteFormOpen(false)
  }

  return (
    <QuoteFormContext.Provider value={{ isQuoteFormOpen, openQuoteForm, closeQuoteForm, prefilledAmount, source }}>
      {children}
    </QuoteFormContext.Provider>
  )
}

QuoteFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
