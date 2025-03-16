import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function FaqPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-lexend">
      <Navbar />
      
      <div id="faq-section" className="pt-16">
        <FAQ/>

      </div>

      <Footer />
    </div>
  )
}
