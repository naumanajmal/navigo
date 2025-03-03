import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

const HeroSlider = ({ onSlideChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => onSlideChange?.(swiper.activeIndex)}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={!isMobile}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="h-full w-full hero-slider"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t' : 'bg-gradient-to-l'} from-primary/10 to-primary/60 z-10`}></div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t' : 'bg-gradient-to-l'} from-primary/20 to-primary/60 z-10`}></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
            alt="Expert Mortgage Solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-t' : 'bg-gradient-to-l'} from-primary/40 to-primary/60 z-10`}></div>
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3"
            alt="Best Mortgage Rates"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
