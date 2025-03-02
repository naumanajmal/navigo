import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
const Terms = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 pb-20">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Last updated: March 2, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Navigo's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-600 mb-4">
                Navigo provides mortgage advisory and brokerage services. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Mortgage consultation and advice</li>
                <li>Mortgage application processing</li>
                <li>Rate comparison and negotiation</li>
                <li>Documentation assistance</li>
                <li>Ongoing mortgage support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Financial Advice Disclaimer</h2>
              <p className="text-gray-600">
                The information provided through our services is for general informational purposes only and should not be considered as financial advice. We recommend consulting with qualified financial advisors for specific financial decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                Navigo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. This includes but is not limited to loss of profits, data, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any modifications indicates your acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Navigo operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For any questions about these Terms & Conditions, please contact us at:
                <br />
                Email: info@company.com
                <br />
                Phone: +1 (234) 567-890
              </p>
            </section>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
