import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const pathRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    pathRefs.current = pathRefs.current.slice(0, 9);
    
    // Auto-scroll animation effect
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 9);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: 'FREE CONSULTATION',
      icon: 'banks2/interview.png',
      description: 'We will start by outlining the following: Process of buying a house, Costs involved, Benefits of eMortgage, Mortgage Eligibility Form, Answering any queries you have'
    },
    {
      title: 'MORTGAGE RECOMMENDATIONS',
      icon: 'banks2/recommend.png',
      description: 'Based on information obtained in the first meeting, our advisors will go into the market and obtain multiple mortgage products tailored to your specific requirements and outline the pros and cons of each.'
    },
    {
      title: 'MORTGAGE APPLICATION',
      icon: 'banks2/job-offer.png',
      description: 'Based on your selected mortgage product, the finance and the conveyancing team will package your application and submit the necessary paperwork on your behalf.'
    },
    {
      title: 'PRE-APPROVAL (4-7 DAYS)',
      icon: 'banks2/loan.png',
      description: 'The bank will review your case and confirm what loan you are eligible for. They will also inform you of any conditions you need to satisfy in order to convert the pre-approval to a Final Offer Letter.'
    },
    {
      title: 'SIGNING/REVIEW OF MOU',
      icon: 'banks2/job-offer.png',
      description: 'We will review your MOU (Form F) to ensure you are protected as a mortgage buyer. We will advise if any clauses need to be added or changed to minimize your risk and make sure your purchase goes smoothly.'
    },
    {
      title: 'VALUATION (2-3 DAYS)',
      icon: 'banks2/enterprise.png',
      description: 'Upon signing of the MOU, the bank will then instruct a third party company to conduct a valuation on the property. Our advisors will ensure the valuation is completed in a timely manner and liaise with the valuer and agent to ensure it is of satisfactory price.'
    },
    {
      title: 'FINAL OFFER LETTER (5-7 DAYS)',
      icon: 'banks2/loan (1).png',
      description: 'Your pre-approval will now be converted into a Final Offer Letter (FOL). You will choose your loan amount, rate and tenure within the pre-approval terms. All pre-approval conditions need to be cleared and evidenced.'
    },
    {
      title: 'LOAN DISBURSAL (3-4 DAYS)',
      icon: 'banks2/loan.png',
      description: 'After signing your FOL, the bank will do one final review of your case to ensure all documents and conditions are in order. The bank will disburse the loan and issue managers cheques to the relevant parties.'
    },
    {
      title: 'DEVELOPER NOC / TRANSFER',
      icon: 'banks2/stamp.png',
      description: 'Every developer requires the seller to obtain a No Objection Certificate. This states that the seller does not owe any service charges and is free to sell the property. Once received, you can proceed to final transfer.  '
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary pt-30 md:pt-40 pb-6 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 font-lexend">Your step-by-step guide to Mortgage in UAE</h1>
           
          </div>
          
          {/* Creative element: Progress indicator */}
          
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-10  sm:pb-30 relative bg-white overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative element: Background gradient */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-white via-primary/5 to-white opacity-50"></div>
          
          <div className="relative">
            {/* Main Process Flow Path - Desktop Only */}
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-0 w-full h-[1500px] pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 800 1500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main curved wavy path that flows down, alternating left and right */}
                  <path 
                    d="M250,120 C250,170 550,220 550,270 C550,320 250,370 250,420 C250,470 550,520 550,570 C550,620 250,670 250,720 C250,770 550,820 550,870 C550,920 250,970 250,1020 C250,1070 550,1120 550,1170 C550,1220 250,1270 250,1320 C250,1370 550" 
                    stroke="#D1D5DB" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                    fill="none"
                  />
                  
                  {/* Step number circles positioned along the path */}
                  
                  {/* Step 1 - Left start */}
                  <circle cx="250" cy="120" r="18" fill={activeStep === 0 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="250" y="125" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">1</text>
                  
                  {/* Step 2 - Right */}
                  <circle cx="550" cy="270" r="18" fill={activeStep === 1 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="550" y="275" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">2</text>
                  
                  {/* Step 3 - Left */}
                  <circle cx="250" cy="420" r="18" fill={activeStep === 2 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="250" y="425" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">3</text>
                  
                  {/* Step 4 - Right */}
                  <circle cx="550" cy="570" r="18" fill={activeStep === 3 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="550" y="575" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">4</text>
                  
                  {/* Step 5 - Left */}
                  <circle cx="250" cy="720" r="18" fill={activeStep === 4 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="250" y="725" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">5</text>
                  
                  {/* Step 6 - Right */}
                  <circle cx="550" cy="870" r="18" fill={activeStep === 5 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="550" y="875" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">6</text>
                  
                  {/* Step 7 - Left */}
                  <circle cx="250" cy="1020" r="18" fill={activeStep === 6 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="250" y="1025" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">7</text>
                  
                  {/* Step 8 - Right */}
                  <circle cx="550" cy="1170" r="18" fill={activeStep === 7 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="550" y="1175" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">8</text>
                  
                  {/* Step 9 - Left */}
                  <circle cx="250" cy="1320" r="18" fill={activeStep === 8 ? "#00203f" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="250" y="1325" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">9</text>
                  

                </svg>
              </div>
              
              {/* Desktop Steps */}
              <div className="hidden md:block relative min-h-[1400px]   ">
                {steps.map((step, index) => {
                  // Calculate positions based on the SVG path
                  const isLeft = index % 2 === 0;
                  const verticalPosition = index * 150;
                  const isActive = activeStep === index;
                  
                  return (
                    <div 
                      key={index} 
                      className="mb-12"
                      style={{
                        position: 'relative',
                        marginBottom: '50px'
                      }}
                    >
                      <div 
                        className={`absolute   ${isLeft ? 'left-0' : 'right-0'}`}
                        style={{
                          top: `${verticalPosition}px`,
                          width: '350px',
                          maxWidth: '35%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: isLeft ? 'flex-start' : 'flex-start',
                          marginLeft: isLeft ? '0px' : '0',
                          marginRight: !isLeft ? '0px' : '0'
                        }}
                      >
                        <div 
                          className={`flex flex-row items-start gap-4 w-full transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center w-24 h-24     p-2">
                              <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                            </div>
                          </div>
                          <div className="flex flex-col text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1 font-lexend">{step.title}</h3>
                            <p className="text-base text-gray-600 font-lexend">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Mobile Steps - Simple List */}
              <div className="md:hidden">
                <div className="relative">
                  {/* Vertical dashed line connecting all steps */}
                  <div className="absolute left-4 top-4 bottom-4 w-0.5" 
                       style={{ 
                         background: 'repeating-linear-gradient(to bottom, #D1D5DB 0, #D1D5DB 5px, transparent 5px, transparent 10px)'
                       }}></div>
                  
                  <div className="space-y-8 py-4">
                    {steps.map((step, index) => {
                      const isActive = activeStep === index;
                      const Icon = step.icon;
                      
                      return (
                        <div 
                          key={index} 
                          className="relative pl-12 sm:pl-16"
                        >
                          {/* Step number circle on the line */}
                          <div className="absolute left-0 top-0">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-200'} transition-all duration-300 z-10`}>
                              <span className="text-sm font-bold text-white">{index + 1}</span>
                            </div>
                          </div>
                          
                          <div className={`transition-all duration-300 ${isActive ? 'scale-102' : ''}`}>
                            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                              <div className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 text-primary">
 
                                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />

                              </div>
                              <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-lexend">{step.title}</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 font-lexend ml-9 sm:ml-11">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 font-lexend">Ready to Start Your Mortgage Journey?</h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-4 md:mb-6 font-lexend">
            Our expert mortgage advisors are here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base font-lexend">
              Contact an Advisor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
