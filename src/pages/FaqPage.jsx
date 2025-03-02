import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-lexend">
    <Navbar />
    
    <div className=" pt-16">
     <FAQ/>

    </div>

    <Footer />
  </div>
  )
}
