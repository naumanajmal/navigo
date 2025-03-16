import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-lexend">
    <Navbar />
    
    <div className=" ">
     <ContactSection/>

    </div>

    <Footer />
  </div>
  )
}
