import Marquee from 'react-fast-marquee';

const BankPartners = () => {
  const banks = [
    // Tier 1 Banks (Major Banks)
    {
      name: 'First Abu Dhabi Bank',
      logo: '/banks2/fab.webp',
      alt: 'FAB Bank Logo',
      tier: 1
    },
    {
      name: 'Emirates NBD',
      logo: '/banks2/enbd.webp',
      alt: 'Emirates NBD Logo',
      tier: 1
    },
    {
      name: 'Abu Dhabi Commercial Bank',
      logo: '/banks2/adcb.webp',
      alt: 'ADCB Logo',
      tier: 1
    },
    {
      name: 'HSBC',
      logo: '/banks2/hsbc.webp',
      alt: 'HSBC Logo',
      tier: 1
    },
    // Tier 2 Banks
    {
      name: 'Dubai Islamic Bank',
      logo: '/banks2/dubai_islamic_bank.webp',
      alt: 'Dubai Islamic Bank Logo',
      tier: 2
    },
    {
      name: 'Abu Dhabi Islamic Bank',
      logo: '/banks2/adib.webp',
      alt: 'ADIB Logo',
      tier: 2
    },
    {
      name: 'Emirates Islamic',
      logo: '/banks2/emirates_islamic.webp',
      alt: 'Emirates Islamic Logo',
      tier: 2
    },
    {
      name: 'Mashreq Bank',
      logo: '/banks2/mashreq-logo_orange-2.webp',
      alt: 'Mashreq Logo',
      tier: 2
    },
    {
      name: 'Sharjah Islamic Bank',
      logo: '/banks2/sharjah_islamic_bank.webp',
      alt: 'Sharjah Islamic Bank Logo',
      tier: 2
    },
    {
      name: 'Standard Chartered',
      logo: '/banks2/standard.webp',
      alt: 'Standard Chartered Logo',
      tier: 2
    },
    {
      name: 'Ajman Bank',
      logo: '/banks2/ajman.webp',
      alt: 'Ajman Bank Logo',
      tier: 2
    },
    {
      name: 'National Bank of Fujairah',
      logo: '/banks2/national-bank-of-fujairah_ok.webp',
      alt: 'National Bank of Fujairah Logo',
      tier: 2
    },
    {
      name: 'United Arab Bank',
      logo: '/banks2/united_arab_bank.webp',
      alt: 'United Arab Bank Logo',
      tier: 2
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-primary border-b border-gray-100">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5f6ff] to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
        <h2 className="text-[28px]/10 sm:text-[32px] md:text-[38px]/ lg:text-[46px] font-bold pb-4 text-primary">
        Trusted by UAE's Leading Banks
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the best UAE Banks to provide you with the best mortgage rates in UAE. Our clients describe our team expert, professional and helpful who guided them with best mortgage rates.
          </p>
        </div>
        <div className=" ">
        {/* Bank Marquee */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="w-full py-4"
        >
          {banks.map((bank) => (
            <div key={bank.name} className="mx-4">
              <div className="w-[180px] aspect-[3/2] relative group">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-gray-100 
                              transform group-hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center">
                  <img
                    src={bank.logo}
                    alt={bank.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
          </div>
      </div>
    </section>
  )
}

export default BankPartners
