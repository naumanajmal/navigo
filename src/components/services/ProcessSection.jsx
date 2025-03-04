import React from 'react';
import { motion } from 'framer-motion';
import { IoDocumentTextOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FiFileText, FiAward } from 'react-icons/fi';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Process of Service</h2>
          <p className="text-gray-600">Follow our simple step-by-step process to get started with your service application</p>
        </div>
        
        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 md:translate-x-[-1px]"></div>
          
          <div className="space-y-12 relative">
            {[
              { title: 'Application', icon: IoDocumentTextOutline, desc: 'Submit your application with required details' },
              { title: 'Documentation', icon: FiFileText, desc: 'Provide necessary documents and proof' },
              { title: 'Verification', icon: IoCheckmarkCircleOutline, desc: 'We verify your documents and eligibility' },
              { title: 'Approval', icon: FiAward, desc: 'Get your service approved and processed' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative grid md:grid-cols-2 gap-8 items-center group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Circle on Line */}
                <div className="absolute left-[-9px] md:left-1/2 top-8 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/10 transition-colors z-10"></div>
                
                <div className={`flex items-center ${index % 2 === 0 ? 'md:col-start-1 flex-row-reverse' : 'md:col-start-2 flex-row'}`}>
                  <div className={`hidden md:flex w-16 h-16 rounded-full ${activeStep === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pl-8 sm:pr-8 sm:text-right' : 'pl-8'}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                      <span className="md:hidden inline-flex items-center gap-2">
                        {index % 2 === 0 && <step.icon className="hidden md:block w-6 h-6 text-primary flex-shrink-0" />}
                        {<step.icon className="w-6 h-6 text-primary flex-shrink-0" />}
                        {step.title}
                        {!index % 2 === 0 && <step.icon className="hidden md:block w-6 h-6 text-primary flex-shrink-0" />}
                      </span>
                      <span className="hidden md:block">{step.title}</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
