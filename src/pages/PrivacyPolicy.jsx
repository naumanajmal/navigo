import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 pb-20">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Last updated: March 2, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                At Navigo, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mortgage services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Financial information relevant to mortgage applications</li>
                <li>Communication preferences</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Process your mortgage applications</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption and secure data storage practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
