import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:pt-16 lg:pb-22 bg-white" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="/images/couple-with-house.jpg"
              alt="Couple holding a model house"
              className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold pb-4 sm:pb-6 md:pb-10 text-primary leading-[1.15]">Why Choose Navigo?</h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              Navigo simplifies your homeownership journey by securing the best mortgage rates in the
              UAE—all in one place!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Comprehensive mortgage and home loan solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Tailored plans to fit your financial needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">24/7 expert support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Skilled negotiation for the best deals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Transparent, no hidden fees</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">Building long-term relationships</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-gray-600 text-base sm:text-lg flex-1">A team of seasoned professionals at your service</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-base sm:text-lg font-medium">
              Your dream home is just a step away with Navigo!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
