import { Swiper, SwiperSlide } from 'swiper/react';
import './HeroSlider.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="h-full w-full"
    >
      {/* Video Slide */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-primary/60 z-10"></div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </SwiperSlide>

      {/* Image Slide 1 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-primary/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
            alt="Luxury Home 1"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Image Slide 2 */}
      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-primary/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3"
            alt="Luxury Home 2"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
