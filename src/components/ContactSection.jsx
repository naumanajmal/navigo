import ContactFormOverlay from './ContactFormOverlay';

const ContactSection = () => {
  return (
    <section className="relative min-h-[800px] flex items-center justify-center py-24 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
          alt="Mortgage Consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Expert Mortgage
              <span className="block mt-2">Solutions in Dubai</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              Get personalized mortgage advice from our experienced team. We're here to help you make your property dreams a reality.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-sm text-white/80">Happy Clients</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg">
                <p className="text-4xl font-bold mb-2">95%</p>
                <p className="text-sm text-white/80">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:pl-12">
            <ContactFormOverlay />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#ffffff15_0%,transparent_50%)] mix-blend-soft-light z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#ffffff15_0%,transparent_50%)] mix-blend-soft-light z-[1]" />
    </section>
  );
};

export default ContactSection;
