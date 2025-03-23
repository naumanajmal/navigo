import { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { FiSearch, FiFileText, FiHome, FiClipboard, FiDollarSign, FiCheckCircle, FiLayers, FiCalendar, FiKey } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const pathRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    pathRefs.current = pathRefs.current.slice(0, 9);
    
    // Auto-scroll animation effect
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 10);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: 'Research & Preparation',
      icon: FiSearch,
      description: 'Begin by researching mortgage options and understanding what you can afford.'
    },
    {
      title: 'Get Pre-Approved',
      icon: FiFileText,
      description: 'Complete a mortgage application to receive a pre-approval letter from your lender.'
    },
    {
      title: 'Find Your Dream Home',
      icon: FiHome,
      description: 'Work with a real estate agent to find a home that meets your needs and budget.'
    },
    {
      title: 'Make an Offer',
      icon: FiClipboard,
      description: 'Submit an offer through your agent and negotiate the terms of the sale.'
    },
    {
      title: 'Loan Application',
      icon: FiDollarSign,
      description: 'Submit a formal mortgage application with your chosen lender and provide necessary documentation.'
    },
    {
      title: 'Property Appraisal',
      icon: FiCheckCircle,
      description: 'The lender will order an appraisal to confirm the property\'s value matches the loan amount.'
    },
    {
      title: 'Underwriting Process',
      icon: FiLayers,
      description: "The lender's underwriting team reviews your application, credit history, employment, and assets."
    },
    {
      title: 'Loan Approval',
      icon: FiCheckCircle,
      description: 'Once all conditions are met, the lender issues final approval for your mortgage.'
    },
    {
      title: 'Closing Preparation',
      icon: FiCalendar,
      description: 'Prepare for closing by reviewing all documents, scheduling a final walkthrough of the property.'
    },
    {
      title: 'Closing Day',
      icon: FiKey,
      description: 'Sign the final paperwork, pay closing costs, and receive the keys to your new home.'
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-40 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 font-lexend">How It Works</h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-lexend">Your step-by-step guide to securing a mortgage from start to your dream home</p>
          </div>
          
          {/* Creative element: Progress indicator */}
          
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-10 relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative element: Background gradient */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-white via-primary/5 to-white opacity-50"></div>
          
          <div className="relative">
            {/* Main Process Flow Path - Desktop Only */}
            <div className="relative">
              <div className="hidden md:block absolute left-0 top-0 w-full h-[1500px] pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 800 1500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main curved wavy path that flows down, alternating left and right */}
                  <path 
                    d="M150,120 C150,170 600,220 600,270 C600,320 150,370 150,420 C150,470 600,520 600,570 C600,620 150,670 150,720 C150,770 600,820 600,870 C600,920 150,970 150,1020 C150,1070 600,1120 600,1170 C600,1220 150,1270 150,1320 C150,1370 600,1420 600,1470" 
                    stroke="#D1D5DB" 
                    strokeWidth="2" 
                    strokeDasharray="5 5"
                    fill="none"
                  />
                  
                  {/* Step number circles positioned along the path */}
                  
                  {/* Step 1 - Left start */}
                  <circle cx="150" cy="120" r="18" fill={activeStep === 0 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="150" y="125" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">1</text>
                  
                  {/* Step 2 - Right */}
                  <circle cx="600" cy="270" r="18" fill={activeStep === 1 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="600" y="275" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">2</text>
                  
                  {/* Step 3 - Left */}
                  <circle cx="150" cy="420" r="18" fill={activeStep === 2 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="150" y="425" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">3</text>
                  
                  {/* Step 4 - Right */}
                  <circle cx="600" cy="570" r="18" fill={activeStep === 3 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="600" y="575" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">4</text>
                  
                  {/* Step 5 - Left */}
                  <circle cx="150" cy="720" r="18" fill={activeStep === 4 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="150" y="725" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">5</text>
                  
                  {/* Step 6 - Right */}
                  <circle cx="600" cy="870" r="18" fill={activeStep === 5 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="600" y="875" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">6</text>
                  
                  {/* Step 7 - Left */}
                  <circle cx="150" cy="1020" r="18" fill={activeStep === 6 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="150" y="1025" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">7</text>
                  
                  {/* Step 8 - Right */}
                  <circle cx="600" cy="1170" r="18" fill={activeStep === 7 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="600" y="1175" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">8</text>
                  
                  {/* Step 9 - Left */}
                  <circle cx="150" cy="1320" r="18" fill={activeStep === 8 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="150" y="1325" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">9</text>
                  
                  {/* Step 10 - Right */}
                  <circle cx="600" cy="1470" r="18" fill={activeStep === 9 ? "#00203F" : "#D1D5DB"} className="transition-all duration-300" />
                  <text x="600" y="1475" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">10</text>
                </svg>
              </div>
              
              {/* Desktop Steps */}
              <div className="hidden md:block relative min-h-[1500px] pb-24">
                {steps.map((step, index) => {
                  // Calculate positions based on the SVG path
                  const isLeft = index % 2 === 0;
                  const verticalPosition = index * 150;
                  const isActive = activeStep === index;
                  const Icon = step.icon;
                  
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
                        className={`absolute ${isLeft ? 'left-0' : 'right-0'}`}
                        style={{
                          top: `${verticalPosition}px`,
                          width: '350px',
                          maxWidth: '40%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: isLeft ? 'flex-start' : 'flex-start'
                        }}
                      >
                        <div 
                          className={`flex flex-row items-start gap-4 w-full transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                              <Icon className="w-5 h-5" />
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
                  
                  <div className="space-y-10 py-4">
                    {steps.map((step, index) => {
                      const isActive = activeStep === index;
                      const Icon = step.icon;
                      
                      return (
                        <div 
                          key={index} 
                          className="relative pl-16"
                        >
                          {/* Step number circle on the line */}
                          <div className="absolute left-0 top-0">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isActive ? 'bg-primary' : 'bg-gray-200'} transition-all duration-300 z-10`}>
                              <span className="text-sm font-bold text-white">{index + 1}</span>
                            </div>
                          </div>
                          
                          <div className={`transition-all duration-300 ${isActive ? 'scale-102' : ''}`}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-800 font-lexend">{step.title}</h3>
                            </div>
                            <p className="text-base text-gray-600 font-lexend ml-11">{step.description}</p>
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
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 font-lexend">Ready to Start Your Mortgage Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6 font-lexend">
            Our expert mortgage advisors are here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all duration-300 font-lexend">
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
