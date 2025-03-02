import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
        <Route path="/affordability-calculator" element={<AffordabilityCalculatorPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
