import React from 'react'

export const mainTitle = "One-Stop Solution For All Financial Requirements";
export const mainSubtitle = "No matter what your financing needs are, we've got you!";

export const services = [
  // Mortgage Services
  {
    id: 1,
    title: 'Residential Property',
    picture: 'Residential_Property.avif',
    list_sub_title: 'Your Dream Home in UAE',
    features: ['Looking for primary residential home', 'For first time home buyers', 'Best mortgage rates', 'Smooth process'],
    subtitle: `Do you wish to make your own dream home in the UAE? Don’t worry, we’ll make it true!`,
    description: 'Find your perfect home in the UAE with our comprehensive residential mortgage solutions, offering competitive rates and seamless processing for first-time buyers.',
    description_1: `UAE is a vibrant country known for its modern infrastructure and opulent lifestyle making it an ideal country to buy a house. Make a dream of buying a home in UAE with Navigo and we will help you by offering you a seamless digital homeownership experience.`,
    description_2: `Discover the best range of mortgage plans, get quick approval, eligibility, required documents, and more-Navigo is your guide. Whether you are buying a new property or opting for a secondary one, our customized mortgage solutions are designed to make your experience hassle-free.`,
     benefits: {
      title: 'Benefits Only for You',
      items: [
        'Smooth process: We have an expert team for you who are dedicated to making your entire home buying process smooth and hassle-free.',
        'Minimal documentation: Once you choose us, you don\'t have to worry about anything. We will take care of the documentation process whether you\'re a salaried or self-employed individual.',
        'Bespoke solutions: We understand every person has different requirements so we follow personalized and tapered solutions according to your unique needs.',
        'Professionalism and expert team: Our team members are experts in the industry who guide with best mortgage plans.'
      ]
    },
    eligibility: {
      title: 'Eligibility Criteria',
      items: [
        'Property type and valve: The minimum value of the property must be of AED 1 million. The property should be either a villa or an apartment and must be fully owned by you.',
        'Passport: You must present a valid passport at the time of the property purchase.',
        'Proof of income: Proof of stable income will be required.',
        'Marriage Certificate: A marriage certificate may be required if you\'re married.'
      ]
    },
    faqs: [
      {
        question: 'How can I apply for a home loan in the UAE?',
        answer: 'If you\'re aged between 21 and 65 and meet the minimum monthly income requirements (AED 15,000 or higher), you can easily apply for a home loan.'
      },
      {
        question: 'What is the minimum or maximum age to apply for a home mortgage loan in the UAE?',
        answer: 'The minimum age is 21 and the maximum age is 65 (or 70 if self-employed) to apply for a home mortgage loan in the UAE.'
      },
      {
        question: 'What are the required documents for a home loan in the UAE?',
        answer: 'The required documents for a home loan are: Emirates ID and Passport, Salary certificate and income proof, UAE residence proof, Property specifications, Address proof, Any other document supporting repayment capacity, Bank statement, Details of any existing loans, Tax returns (if applicable)'
      },
      {
        question: 'What are the residential property interest rates in the UAE?',
        answer: 'Interest rates of residential property plans can vary from bank to bank and customer\'s profile.'
      },
      {
        question: 'Can a non-resident buy a home in Dubai?',
        answer: 'Yes. A non-resident can buy a home in the UAE. Some areas also offer leasehold options, typically for 99 years.'
      },
      {
        question: 'Is hiring a mortgage broker a good idea?',
        answer: 'Yes, hiring a mortgage broker is a good idea as mortgage broker help you with the documentation process, eligibility criteria, interest rates, terms and conditions, and bespoke solutions.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Commercial Property',
    picture: 'Commercial_Property.webp',

    list_sub_title: 'Business Property Solutions',
    features: ['For commercial property buyers', 'Compared interest rates', 'Tailored solutions', 'Expert advice'],
    subtitle: `Are you thinking of buying your own office or property for business? Let us help you with the best mortgage plans for offices, hotels, or other business property!`,
    description: 'Expert guidance for commercial property investments in UAE, with tailored mortgage solutions for offices, retail spaces, and business properties.',
    description_1: `If you’re looking to obtain a commercial property mortgage in the UAE, there are ample things to understand. The commercial property mortgage includes office space, shops, retail outlets, industrial properties, and warehouses. You must understand the local and legal regulations, and gather documents and information, proof of income, credit history, and other financial information. Obtaining a commercial property mortgage can be a little tricky if you’re not aware of these things. But you don’t have to worry, we have got you!`,
    description_2: `Our expert team will help you with the complex process, compare interest rates, terms, research and preparation. You can easily compare several different banks and mortgage options available in Dubai or our experts can help with bespoke solutions.`,
    benefits: {
      title: 'What are the Benefits of Choosing Navigo?',
      items: [
        'High loan amount',
        'Good interest rates',
        'Easy process',
        'Hassle-free documentation',
        'Flexible terms and payment plans'
      ]
    },
    eligibility: {
      title: 'Eligibility Criteria for Commercial Property',
      items: [
        'The minimum age must be 21 years and a maximum of 70 years for UAE nationals.',
        'Valid trade licence',
        'You must submit the business documents such as Memorandum of Articles or Power of Attorney.',
        'Banking or lending assessment documents'
      ]
    },
    faqs: [
      {
        question: 'Is it difficult to get a Commercial Property mortgage plan in the UAE?',
        answer: 'No. It\'s not difficult to get a commercial property loan in the UAE. You can hire a mortgage broker to help you with documents, proof of income, credit history, comparing interest rates, etc.'
      },
      {
        question: 'What is a Commercial Property mortgage loan in the UAE?',
        answer: 'If you\'re planning to buy a commercial property such as office space, shops, retail outlets, industrial properties, or warehouses, you can take a commercial property loan.'
      },
      {
        question: 'What is the minimum and maximum age to get commercial mortgages in Dubai?',
        answer: 'The minimum age must be 21 years and a maximum of 70 years for UAE nationals.'
      },
      {
        question: 'What documents are required to get a commercial mortgage in the UAE?',
        answer: 'The exact documents or papers will depend on the bank, however, you\'ll require these documents: Personal ID proof or documents, Proof of legal residence in Dubai, Proof of your salary statements, Valid trade licence, Business documents such as Memorandum of Articles or Power of Attorney, Banking or lending assessment documents'
      },
      {
        question: 'What are the commercial mortgage interest rates in the UAE?',
        answer: 'Interest rates of commercial mortgage plans can vary from bank to bank and customer\'s profile.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'International Mortgages',
    picture: 'International_Mortgages.jpg',
    list_sub_title: 'Global Property Investment',
    features: ['Property valuation', 'Currency solutions', 'Local expertise', 'Loan-to-value'],

    subtitle: `Dreaming of owning a property in the UAE, but you’re a non-resident? Don’t worry, we’ve got you!`,
    description: 'Specialized mortgage solutions for non-residents looking to invest in UAE property, with expert guidance on international financing and regulations.',
    description_1: `Make your dream of buying a home overseas true with Navigo. With the International Mortgage, you can make a home in the UAE and we'll help you make a smart investment. International mortgages are the same as any other mortgage but the process can be a little complex and eligibility requirements can be higher. Don’t worry, we’d love to help!`,
    description_2: `Our experts and team know the mortgage ins and outs and offer the best suited advice. We make your mortgage process hassle free with our client centric and solution driven approach.`,
    benefits: {
      title: 'Why Should You Choose Us?',
      items: [
        'Transparency',
        'Tailored solutions',
        'High loan-to-value',
        'Smooth process',
        'Professional and expert team'
      ]
    },
    eligibility: {
      title: 'Eligibility Criteria for International Mortgage',
      items: [
        'Non-resident status: You must be a non-resident in the UAE to qualify for an international mortgage.',
        'Stable income: You\'ll need to have a stable income source and good credit history along with a credit report.',
        `Valid passport & visa: You’ll need to have a valid passport and visa that allows you to be an owner of a property in the UAE.`,
        'Financial proof: You must submit financial stability proof such as salary certificates, statements, etc.'
      ]
    },
    faqs: [
      {
        question: 'What is International Mortgage in UAE?',
        answer: 'International mortgage allows non-residents to buy a property in the UAE.'
      },
      {
        question: 'Can a non-resident get a mortgage in Dubai?',
        answer: 'Yes. With International Mortgage, a non-resident can get a mortgage in Dubai.'
      },
      {
        question: 'What are the legal requirements for international mortgages in Dubai?',
        answer: 'As per the new rules of 2002, any non-resident can buy property in the UAW, however, there are some eligibility requirements that one must fulfill to be eligible.'
      },
      {
        question: 'What are the required documents for a mortgage in Dubai as a foreigner?',
        answer: 'The exact documents or papers will depend on the bank, however these are basic documents that you\'ll require: Personal ID proof or documents (Passport and Visa), Proof of legal residence in Dubai, Proof of your current residential address, Bank statements, Proof of your wages, Tax returns proof'
      },
      {
        question: 'Should I choose a bank or go to a mortgage broker?',
        answer: 'You can either choose a bank to loan directly or choose a real estate agent. You can directly connect with the bank if you\'re clear about your understanding of mortgage plans, eligibility, and documents. On the other hand, if you\'re unsure about eligibility and documents, then choosing an agent would be a great option for you. Mortgage brokers are experts of plans, documentation process, interest rates, terms and conditions. Taking expert advice would be a great option.'
      },
      {
        question: 'What are the international mortgage interest rates in UAE?',
        answer: 'Interest rates of international mortgage plans can vary from bank to bank and customer\'s profile.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  // Additional Financial Services
   
  {
    id: 4,
    title: 'Refinancing',
    picture:'Mortgage_Refinancing.jpg',
    subtitle: 'Better rates, better terms',
    list_sub_title: 'Better rates, better terms',
    description_1: `Looking to optimize your existing mortgage? Refinancing can be an excellent way to secure better interest rates, reduce monthly payments, or access your home's equity. Our refinancing solutions are designed to help you make the most of your property investment while potentially saving thousands in interest payments.`,
    description_2: `At Navigo, we analyze your current mortgage terms and market conditions to find the best refinancing options available. Whether you want to switch to a better rate, change your loan term, or cash out some equity, our expert team will guide you through the entire process, ensuring you make an informed decision that aligns with your financial goals.`,
    description: 'Looking to get better rates or terms on your existing mortgage? Refinancing might be the perfect solution for you. We\'ll help you explore your options and find the best refinancing solution.',
    features: ['Interest rates analysis', 'Easy documentation', 'Legal advice', 'Mortgage negotiation'],
    benefits: {
      title: 'Benefits of Refinancing with Navigo',
      items: [
        'Lower interest rates: Get access to more competitive interest rates that could save you money over the life of your loan.',
        'Reduced monthly payments: Restructure your loan terms to better fit your current financial situation.',
        'Cash-out options: Access your home\'s equity for renovations, investments, or other financial needs.',
        'Expert guidance: Our team will analyze your current mortgage and help find the best refinancing solution.',
        'Streamlined process: We handle all the paperwork and negotiations to make refinancing as smooth as possible.'
      ]
    },
    eligibility: {
      title: 'Eligibility Criteria for Refinancing',
      items: [
        'Current mortgage status: Your existing mortgage should be in good standing with no missed payments.',
        'Property value: The current market value of your property must support the refinancing amount.',
        'Income proof: Stable income source with sufficient documentation.',
        'Credit history: A good credit history showing responsible debt management.',
        'Time since purchase: Minimum time period since the original mortgage was taken.'
      ]
    },
    faqs: [
      {
        question: 'What is mortgage refinancing?',
        answer: 'Mortgage refinancing is the process of replacing your existing mortgage with a new one, typically with better terms such as lower interest rates, different loan duration, or to access home equity.'
      },
      {
        question: 'When is the best time to refinance?',
        answer: 'The best time to refinance is typically when interest rates are lower than your current rate, when your credit score has improved significantly, or when you need to access your home\'s equity.'
      },
      {
        question: 'What documents are needed for refinancing?',
        answer: 'You\'ll need recent pay stubs, tax returns, bank statements, current mortgage statements, proof of assets, and information about your current property value.'
      },
      {
        question: 'How long does the refinancing process take?',
        answer: 'The refinancing process typically takes 30-45 days, depending on various factors such as property valuation, documentation verification, and lender processing times.'
      },
      {
        question: 'Are there any costs involved in refinancing?',
        answer: 'Yes, refinancing usually involves costs such as application fees, property valuation fees, and processing fees. However, these costs are often offset by the long-term savings from better loan terms.'
      },
      {
        question: 'Can I refinance if I have bad credit?',
        answer: 'While it\'s possible to refinance with less-than-perfect credit, you may not qualify for the best rates. We can help evaluate your situation and explore available options.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Professional Legal Support',
    picture:'Legal_Services.webp',
    subtitle: 'Expert Guidance',
    list_sub_title: 'Expert Guidance',
    description_1: `Navigating the legal aspects of property transactions in the UAE requires expert knowledge and attention to detail. Our professional legal support service ensures that your property dealings are conducted with the utmost care and in full compliance with UAE laws and regulations.`,
    description_2: `Our network of experienced legal professionals specializes in UAE property law and can assist you with everything from contract review to dispute resolution. We work closely with you to understand your needs and provide tailored legal solutions that protect your interests throughout the property transaction process.`,
    description: 'Our network of experienced legal professionals ensures your property transactions are handled with precision and care. ',
    features: ['Contract review', 'Due diligence', 'Legal documentation', 'Dispute resolution'],
    benefits: {
      title: 'Benefits of Our Legal Support',
      items: [
        'Expert guidance: Access to experienced property law professionals who understand UAE regulations.',
        'Risk mitigation: Thorough legal review to identify and address potential issues before they become problems.',
        'Time efficiency: Streamlined legal processes to expedite your property transactions.',
        'Complete compliance: Ensure all transactions meet UAE legal requirements and standards.',
        'Peace of mind: Professional handling of all legal aspects of your property dealings.'
      ]
    },
    eligibility: {
      title: 'Service Requirements',
      items: [
        'Property documentation: All relevant property documents must be available for review.',
        'Identity verification: Valid identification and necessary authorization documents.',
        'Transaction details: Clear information about the intended property transaction.',
        'Power of attorney: If applicable, properly authenticated power of attorney documents.',
        'Previous agreements: Any existing contracts or agreements related to the property.'
      ]
    },
    faqs: [
      {
        question: 'What legal services do you provide for property transactions?',
        answer: 'We provide comprehensive legal services including contract review, due diligence, documentation preparation, legal compliance checks, and dispute resolution support.'
      },
      {
        question: 'How long does the legal review process typically take?',
        answer: 'The duration varies depending on the complexity of the transaction, but typically takes 5-7 working days for standard property transactions.'
      },
      {
        question: 'Do you handle both residential and commercial property legal matters?',
        answer: 'Yes, our legal team has extensive experience in both residential and commercial property transactions in the UAE.'
      },
      {
        question: 'What documents are required for legal review?',
        answer: 'Required documents typically include property title deed, purchase agreement, identification documents, and any existing contracts or agreements related to the property.'
      },
      {
        question: 'Can you help with property dispute resolution?',
        answer: 'Yes, our legal team can assist with property-related disputes through negotiation, mediation, or legal proceedings if necessary.'
      },
      {
        question: 'Do you provide legal services in multiple languages?',
        answer: 'Yes, we offer legal services in multiple languages to accommodate our diverse client base in the UAE.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Corporate & SME Lending',
    picture:'Business_Lending.webp',
    subtitle: 'Business Growth Solutions',
    list_sub_title: 'Business Growth Solutions',
    description_1: `Growing your business in the UAE requires reliable financial support. Our Corporate & SME Lending solutions are designed to meet the diverse needs of businesses, from small enterprises to large corporations. We understand that each business has unique requirements and challenges, which is why we offer customized lending solutions.`,
    description_2: `Whether you need working capital, equipment financing, or expansion funding, our expert team will work with you to structure the right lending solution. We pride ourselves on quick processing times, competitive rates, and flexible terms that align with your business objectives and cash flow patterns.`,
    description: 'Tailored lending solutions for businesses of all sizes, supporting growth and operational needs with flexible financing options.',
    features: ['Working capital', 'Equipment financing', 'Business expansion', 'Trade finance'],
    benefits: {
      title: 'Benefits of Our Business Lending',
      items: [
        'Customized solutions: Lending packages tailored to your specific business needs and goals.',
        'Competitive rates: Attractive interest rates with flexible repayment terms.',
        'Quick processing: Streamlined application and approval process for faster access to funds.',
        'Expert guidance: Dedicated relationship managers to support your business growth.',
        'Flexible collateral: Multiple collateral options to secure your business loan.'
      ]
    },
    eligibility: {
      title: 'Eligibility Requirements',
      items: [
        'Business registration: Valid UAE trade license and commercial registration.',
        'Operating history: Minimum business operation period in the UAE.',
        'Financial statements: Audited financial statements for the past 2-3 years.',
        'Bank statements: Recent business bank statements showing healthy cash flow.',
        'Business plan: Detailed business plan for loan utilization and repayment.'
      ]
    },
    faqs: [
      {
        question: 'What types of business loans do you offer?',
        answer: 'We offer various types of business loans including working capital loans, equipment financing, business expansion loans, trade finance solutions, and project-specific funding.'
      },
      {
        question: 'How long does the loan approval process take?',
        answer: 'The approval process typically takes 7-14 working days, depending on the loan amount and complexity of the business structure.'
      },
      {
        question: 'What is the maximum loan amount available?',
        answer: 'Loan amounts vary based on your business size, financial health, and requirements. We can structure loans from AED 250,000 up to several million dirhams.'
      },
      {
        question: 'What documents are required for a business loan?',
        answer: 'Required documents include trade license, audited financial statements, bank statements, business plan, and other supporting documents depending on the loan type.'
      },
      {
        question: 'Do you offer Islamic financing options?',
        answer: 'Yes, we offer Sharia-compliant financing solutions for businesses seeking Islamic banking options.'
      },
      {
        question: 'Can startups apply for business loans?',
        answer: 'Yes, we have special financing programs for startups, though they may require additional security or have different terms compared to established businesses.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Personal Loans',
    picture:'Personal_Loans.jpg',
    subtitle: 'Individual Financial Solutions',
    list_sub_title: 'Individual Financial Solutions',
    description_1: `Life in the UAE often presents opportunities and needs that require additional financial support. Our Personal Loans are designed to help you achieve your personal goals, whether it's funding your education, renovating your home, or managing unexpected expenses. We understand that every individual's financial situation is unique.`,
    description_2: `Our personal loan solutions offer competitive interest rates, flexible repayment terms, and quick processing to ensure you get the funds when you need them. Our dedicated team works closely with you to understand your requirements and financial capacity, helping you choose the most suitable loan option.`,
    description: 'Flexible personal financing options to help you achieve your goals, whether it\'s for education, home improvement, or other personal needs.',
    features: ['Quick approval', 'Flexible terms', 'Competitive rates', 'Multiple purposes'],
    benefits: {
      title: 'Benefits of Our Personal Loans',
      items: [
        'Competitive rates: Attractive interest rates with flexible repayment options.',
        'Quick processing: Fast approval and disbursement process.',
        'No collateral: Unsecured loans based on your income and creditworthiness.',
        'Flexible usage: Freedom to use the loan for various personal needs.',
        'Easy repayment: Convenient monthly installments that suit your budget.'
      ]
    },
    eligibility: {
      title: 'Eligibility Requirements',
      items: [
        'Employment: Stable employment with minimum monthly income of AED 5,000.',
        'Age criteria: Between 21 and 60 years old at the time of loan maturity.',
        'Residency: Valid UAE residence visa.',
        'Credit history: Good credit history with no defaults.',
        'Documentation: Valid Emirates ID, passport, visa, and income proof.'
      ]
    },
    faqs: [
      {
        question: 'What is the maximum personal loan amount I can get?',
        answer: 'The maximum loan amount depends on your income and creditworthiness, typically up to 20 times your monthly salary, subject to a maximum of AED 2 million.'
      },
      {
        question: 'How long does it take to get approval for a personal loan?',
        answer: 'Our streamlined process typically provides initial approval within 24 hours, with final approval and disbursement within 2-3 working days.'
      },
      {
        question: 'What are the interest rates for personal loans?',
        answer: 'Interest rates start from 4.99% per annum, varying based on your profile, loan amount, and tenure.'
      },
      {
        question: 'What documents do I need to apply for a personal loan?',
        answer: 'Required documents include Emirates ID, passport copy with valid visa, salary certificate, bank statements for the last 3-6 months, and other income proof documents.'
      },
      {
        question: 'Can I settle my personal loan early?',
        answer: 'Yes, you can settle your loan early. Early settlement charges may apply as per UAE Central Bank guidelines.'
      },
      {
        question: 'Are there any processing fees?',
        answer: 'Yes, there is a one-time processing fee of 1% of the loan amount (subject to a minimum of AED 500 and maximum of AED 2,500).'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2m-6 0h6" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Project Finance',
    picture:'Project_Finance.webp',
    subtitle: 'Large-Scale Development Funding',
    list_sub_title: 'Large-Scale Development Funding',
    description_1: `Major projects require sophisticated financing solutions. Our Project Finance service specializes in funding large-scale developments, from infrastructure and real estate to industrial ventures. We understand the complexities involved in project financing and provide structured solutions that align with project milestones and cash flow projections.`,
    description_2: `Our experienced team works closely with project developers, contractors, and stakeholders to create customized financing packages. We consider various aspects including project viability, risk assessment, and market conditions to ensure optimal financing structure that supports successful project completion.`,
    description: 'Comprehensive financing solutions for major projects, including infrastructure, real estate development, and industrial ventures.',
    features: ['Structured finance', 'Long-term funding', 'Risk assessment', 'Project monitoring'],
    benefits: {
      title: 'Benefits of Our Project Finance',
      items: [
        'Customized solutions: Financing structures tailored to specific project requirements.',
        'Flexible drawdown: Phased disbursement aligned with project milestones.',
        'Extended tenure: Long-term financing options suitable for large projects.',
        'Expert guidance: Dedicated project finance specialists to support your venture.',
        'Comprehensive support: End-to-end assistance from planning to completion.'
      ]
    },
    eligibility: {
      title: 'Project Requirements',
      items: [
        'Project viability: Detailed feasibility study and project reports.',
        'Developer track record: Proven experience in similar projects.',
        'Financial strength: Strong sponsor support and equity contribution.',
        'Regulatory compliance: All necessary permits and approvals.',
        'Security structure: Adequate collateral and security arrangements.'
      ]
    },
    faqs: [
      {
        question: 'What types of projects do you finance?',
        answer: 'We finance various large-scale projects including real estate developments, infrastructure projects, industrial facilities, healthcare facilities, and educational institutions.'
      },
      {
        question: 'What is the minimum project size for financing?',
        answer: 'We typically consider projects with a minimum value of AED 50 million, though this may vary based on the project type and sector.'
      },
      {
        question: 'How long does the approval process take?',
        answer: 'The approval process usually takes 4-8 weeks, depending on project complexity and documentation readiness.'
      },
      {
        question: 'What is the maximum funding available?',
        answer: 'Funding limits are determined by project viability, sponsor strength, and security structure. We can finance up to 70-80% of project costs.'
      },
      {
        question: 'Do you provide Islamic project financing?',
        answer: 'Yes, we offer Sharia-compliant project financing solutions structured according to Islamic banking principles.'
      },
      {
        question: 'What documents are required for project finance?',
        answer: 'Required documents include feasibility study, project reports, financial projections, sponsor information, regulatory approvals, and security documentation.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 9,
    title: 'Trade Finance',
    picture:'Trade_Finance.webp',
    subtitle: 'International Trade Solutions',
    list_sub_title: 'International Trade Solutions',

    description_1: `In today's global marketplace, efficient trade finance solutions are crucial for business success. Our comprehensive trade finance services are designed to facilitate international trade operations, helping businesses manage risks and optimize working capital. We understand the complexities of cross-border transactions and provide tailored solutions.`,
    description_2: `Whether you need letters of credit, trade loans, or supply chain financing, our expert team will work with you to structure the most suitable trade finance solution. We leverage our extensive network and expertise to ensure smooth international trade operations while managing associated risks effectively.`,
    description: 'Facilitate international trade with our comprehensive trade finance solutions, including letters of credit, trade loans, and supply chain financing.',
    features: ['Letters of credit', 'Trade loans', 'Supply chain finance', 'Export financing'],
    benefits: {
      title: 'Benefits of Our Trade Finance',
      items: [
        'Risk mitigation: Secure international trade transactions through proven financial instruments.',
        'Working capital optimization: Improve cash flow management in trade operations.',
        'Global network: Access to extensive international banking relationships.',
        'Expert guidance: Specialized trade finance advisors to structure optimal solutions.',
        'Digital solutions: Advanced online platforms for trade transaction management.'
      ]
    },
    eligibility: {
      title: 'Trade Finance Requirements',
      items: [
        'Business registration: Valid UAE trade license with import/export activity.',
        'Trading history: Established track record in international trade.',
        'Financial statements: Audited financial records for assessment.',
        'Trade documentation: Valid trade contracts and shipping documents.',
        'Banking relationship: Existing business banking relationship.'
      ]
    },
    faqs: [
      {
        question: 'What trade finance products do you offer?',
        answer: 'We offer a comprehensive suite of trade finance products including Letters of Credit (LC), Bank Guarantees, Documentary Collections, Trade Loans, Supply Chain Finance, and Export Finance solutions.'
      },
      {
        question: 'How quickly can you issue a Letter of Credit?',
        answer: 'Standard LCs can be issued within 24-48 hours after receiving complete documentation and necessary approvals.'
      },
      {
        question: 'What are your trade finance limits?',
        answer: 'Trade finance limits are determined based on your business volume, financial strength, and trading history. We offer flexible limits to match your business needs.'
      },
      {
        question: 'Do you provide supply chain financing?',
        answer: 'Yes, we offer comprehensive supply chain financing solutions to help optimize working capital for both buyers and suppliers in the trade cycle.'
      },
      {
        question: 'What currencies do you support for trade finance?',
        answer: 'We support major global currencies including USD, EUR, GBP, and local currency (AED) for trade finance transactions.'
      },
      {
        question: 'How do you handle trade finance disputes?',
        answer: 'We have a dedicated team to handle trade finance disputes and discrepancies, ensuring quick resolution while following international trade practices and regulations.'
      }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]
