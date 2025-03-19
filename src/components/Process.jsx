import React, { useState } from 'react'
import { IoDocumentTextOutline, IoTimeOutline, IoCheckmarkCircleOutline, IoArrowForward } from 'react-icons/io5'
import { FiClock, FiCheckCircle, FiFileText, FiAward, FiMessageSquare, FiHome, FiDollarSign, FiClipboard } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Process() {

    const [activeStep, setActiveStep] = useState(0)
  return (
      <div>
          
          {/* Process Section - Gradient Background */}
      <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mortgage Process</h2>
            <p className="text-gray-600">Your step-by-step guide to property purchase</p>
          </div>
          
          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 md:translate-x-[-1px]"></div>
            
            <div className="space-y-12 relative">
              {[
                { 
                  title: 'FREE CONSULTATION', 
                  icon: FiMessageSquare, 
                  desc: 'We will start by outlining the following: Process of buying a house, Costs involved, Benefits of eMortgage, Mortgage Eligibility Form, Answering any queries you have'
                },
                { 
                  title: 'MORTGAGE RECOMMENDATIONS', 
                  icon: FiClipboard, 
                  desc: 'Based on information obtained in the first meeting, our advisors will go into the market and obtain multiple mortgage products tailored to your specific requirements and outline the pros and cons of each.'
                },
                { 
                  title: 'PRE-APPROVAL (4-7 DAYS)', 
                  icon: FiCheckCircle, 
                  desc: 'The bank will review your case and confirm what loan you are eligible for. They will also inform you of any conditions you need to satisfy in order to convert the pre-approval to a Final Offer Letter.'
                },
                { 
                  title: 'MORTGAGE APPLICATION', 
                  icon: IoDocumentTextOutline, 
                  desc: 'Based on your selected mortgage product, the lender and the conveyancing team will package your application and submit the necessary paperwork on your behalf.'
                },
                { 
                  title: 'SIGNING/REVIEW OF MOU', 
                  icon: IoCheckmarkCircleOutline, 
                  desc: 'We will review your MOU (Form F) to ensure you are protected as a mortgage buyer. We will advise if any clauses need to be added or changed to minimize your risk and make sure your purchase goes smoothly.'
                },
                { 
                  title: 'VALUATION (2-3 DAYS)', 
                  icon: FiHome, 
                  desc: 'Upon signing of the MOU, the bank will then instruct a third party company to conduct a valuation on the property. Our advisors will ensure the valuation is completed in a timely manner and liaise with the valuer and agent to ensure it is of satisfactory price.'
                },
                { 
                  title: 'FINAL OFFER LETTER (5-7 DAYS)', 
                  icon: FiFileText, 
                  desc: 'Your pre-approval will now be converted into a Final Offer Letter (FOL). You will choose your loan amount, rate and tenure within the pre-approval terms. All pre-approval conditions need to be cleared and evidenced.'
                },
                { 
                  title: 'LOAN DISBURSAL (3-4 DAYS)', 
                  icon: FiDollarSign, 
                  desc: 'After signing your FOL, the bank will do one final review of your case to ensure all documents and conditions are in order. The bank will disburse the loan and issue managers cheques to the relevant parties.'
                },
                { 
                  title: 'DEVELOPER NOC / TRANSFER', 
                  icon: IoArrowForward, 
                  desc: 'Every developer requires the seller to obtain a No Objection Certificate. This states that the seller does not owe any service charges and is free to sell the property. Once received, you can proceed to final transfer. This is when all monies owed to the seller are cleared and ownership changes hands. You will receive a title deed in your name and the process is complete.'
                }
              ].map((step, index) => (
                <div
                  key={index}
                   
                  className="relative grid md:grid-cols-2 gap-8 items-center group"
            
                >
                  {/* Circle on Line */}
                  <div className="absolute left-[-9px] md:left-1/2 top-8 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/10 transition-colors z-10"></div>
                  
                  {/* Step Number - Desktop view only */}
                  <div className={`absolute hidden md:flex top-8 md:top-1/2 md:-translate-y-1/2 w-7 h-7 rounded-full bg-primary text-white items-center justify-center text-xs font-bold z-20 ${
                    index % 2 === 0 
                      ? 'left-[-15px] md:left-[calc(50%+20px)] md:-translate-x-0 -ml-6 md:ml-0' 
                      : 'left-[-15px] md:left-[calc(50%-20px)] md:-translate-x-full -ml-6 md:ml-0'
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:col-start-1 flex-row-reverse' : 'md:col-start-2 flex-row'}`}>
                    <div className={`hidden md:flex w-16 h-16 rounded-full ${activeStep === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pl-8'}`}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                        <span className="md:hidden inline-flex items-center gap-2">
                          {/* Mobile view step number and icon */}
                          <div className="flex items-center gap-2">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <step.icon className="w-6 h-6 text-primary flex-shrink-0" />
                          </div>
                          {step.title}
                        </span>
                        <span className="hidden md:block">{step.title}</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 font-medium ">PLEASE KEEP IN MIND THAT THE ENTIRE PROCESS CAN TAKE 6-8 WEEKS DEPENDING ON TRANSACTION TYPE.</p>
            <p className="text-gray-600 font-medium">PLEASE SPEAK WITH OUR ADVISORS TO PLAN YOUR TIMELINES ACCORDINGLY.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
