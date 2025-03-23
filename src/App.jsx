import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WhatsAppButton from './components/WhatsAppButton'
import FloatingQuoteForm from './components/FloatingQuoteForm'
import SimpleQuoteForm from './components/form/SimpleQuoteForm'
import { QuoteFormProvider } from './context/QuoteFormProvider'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import BlogArchive from './pages/BlogArchive'
import BlogDetail from './pages/BlogDetail'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import AffordabilityCalculatorPage from './pages/AffordabilityCalculatorPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import AboutUs from './pages/AboutUs'
import ProcessPage from './pages/ProcessPage'
import HowItWorksPage from './pages/HowItWorksPage'

function App() {
  return (
    <Router>
      <QuoteFormProvider>
        <WhatsAppButton />
        <FloatingQuoteForm />
        <SimpleQuoteForm />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
        <Route path="/affordability-calculator" element={<AffordabilityCalculatorPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </QuoteFormProvider>
    </Router>
  )
}

export default App
