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
    <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
      
      <Navbar />
      
      <div id="faq-section" className="pt-15 sm:pt-10">
       {/* Decorative elements */}
     
        <FAQ/>

      </div>
   

      <Footer />
    </section>
  )
}
