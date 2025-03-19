import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Process from '../components/Process';
export default function ProcessPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="font-lexend overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#e5f6ff] via-white to-[#f0f7ff] pt-32 pb-10 sm:pt-8 md:pt-20 lg:pt-38">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#00203f15_0%,transparent_50%)] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#008cc915_0%,transparent_50%)] mix-blend-soft-light" />
        
        <Navbar />
        
        <div id="process" className=" ">
          {/* Decorative elements */}
          <Process/>

        </div>
   

      </section>

      <Footer />
    </div>
  )
}
