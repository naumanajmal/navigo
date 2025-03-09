import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import MortgageCalculator from '../components/calculator/MortgageCalculator'

const MortgageCalculatorPage = () => {
  return (
    <div className="font-lexend">
      <Navbar />
      
      <section className="bg-gradient-to-b from-[#e5f6ff] to-white pt-32 md:pt-40 pb-10 md:pb-16 lg:pb-20 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Container */}
          
            {/* Right Side - Calculator */}
          
              <MortgageCalculator />
           
        
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MortgageCalculatorPage
