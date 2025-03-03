import React from 'react'

export const mainTitle = "One-Stop Solution For All Financial Requirements";
export const mainSubtitle = "No matter what your financing needs are, we've got you!";

export const services = [
  // Mortgage Services
  {
    id: 1,
    title: 'Residential Mortgage',
    subtitle: 'Your dream home',
    description: 'Residential mortgage loans are made for those who want to buy their dream home.',
    features: ['Looking for primary residential home', 'For first time home buyers', 'Best mortgage rates', 'Smooth process'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Commercial Property',
    subtitle: 'Your business property solution',
    description: 'This is for you, if you\'re looking for commercial property like offices, retail spaces, warehouses, restaurants, etc.',
    features: ['For commercial property buyers', 'Compared interest rates', 'Tailored solutions', 'Expert advice'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'International Mortgages',
    subtitle: 'You\'re non-resident, we\'ve got you!',
    description: 'Don\'t worry if you\'re a non-resident in UAE, we\'ve got ample options at our fingertips.',
    features: ['Property valuation', 'Currency solutions', 'Local expertise', 'Loan-to-value'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  // Additional Financial Services
  {
    id: 1,
    title: 'Portfolio Consolidation',
    subtitle: 'Your go-to expert',
    description: 'Are you considering merging multiple mortgage plans from different banks into a single mortgage plan to one bank? You\'ll definitely need expert advice!',
    features: ['Interest rates analysis', 'Easy documentation', 'Legal advice', 'Mortgage negotiation'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Balance Transfer',
    subtitle: 'Optimize best interest rates',
    description: 'If you\'re planning to move the existing mortgage plan to another lender, we can help you achieve the goal.',
    features: ['Access to different lenders', 'Transparent and clear information on rates', 'Risk assessment', 'Personalized consultation'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Mega loans',
    subtitle: 'Your assistant on giant loans',
    description: 'Also known as Jumbo Loans, Mega loans are for those who need large loan amounts.',
    features: ['Access to expert team of consultants', 'Comprehensive guidance and support', 'High-level product knowledge', 'Personalized solutions'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Professional Legal Support',
    subtitle: 'Expert Guidance',
    description: 'Our network of experienced legal professionals ensures your property transactions are handled with precision and care. ',
    features: ['Document review', 'Legal compliance', 'Contract negotiation', 'Title verification'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Corporate & SME Lending',
    subtitle: 'Business Growth Solutions',
    description: 'Tailored lending solutions for businesses of all sizes, supporting growth and operational needs with flexible financing options.',
    features: ['Working capital', 'Equipment financing', 'Business expansion', 'Asset-based lending'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Personal Loans',
    subtitle: 'Individual Financial Solutions',
    description: 'Flexible personal financing options to help you achieve your goals, whether it\'s for education, home improvement, or other personal needs.',
    features: ['Competitive rates', 'Flexible terms', 'Quick approval', 'Multiple purposes'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Project Finance',
    subtitle: 'Large-Scale Development Funding',
    description: 'Comprehensive financing solutions for major projects, including infrastructure, real estate development, and industrial ventures.',
    features: ['Infrastructure projects', 'Development funding', 'Structured finance', 'Long-term financing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Trade Finance',
    subtitle: 'International Trade Solutions',
    description: 'Facilitate international trade with our comprehensive trade finance solutions, including letters of credit, trade loans, and supply chain financing.',
    features: ['Letters of credit', 'Trade loans', 'Supply chain finance', 'Export financing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
]
