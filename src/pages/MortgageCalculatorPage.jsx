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
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left Side - Title and Description */}
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6 md:pb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Calculate Your Mortgage Instantly
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                Enter your details and see exactly what your monthly mortgage payments could look like.
              </p>
            </div>

            {/* Right Side - Calculator */}
            <div>
              <MortgageCalculator />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MortgageCalculatorPage
