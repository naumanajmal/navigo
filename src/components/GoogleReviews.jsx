import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './reviews/reviews-slider.css';

const ReviewCard = ({ review }) => {
  return (
    <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg ring-1 ring-gray-200/50 h-full flex flex-col">
      <div className="flex items-start">
        <img
          src={review.profileImage}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-medium text-gray-900">{review.name}</h4>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed flex-grow">{review.text}</p>
       
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

const GoogleReviews = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    {
      name: "Sarah Thompson",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      date: "2 weeks ago",
      text: "I honestly couldn’t have done this without Navigo. They handled everything from A to Z and made the mortgage process feel like a breeze. Super thankful for their support!"
    },
    {
      name: "Mohammed Al-Hassan",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      date: "1 month ago",
      text: "I was so confused about mortgage options in the UAE, but the team at Navigo really took the time to explain everything and find me the best deal. Highly recommend them!"
    },
    {
      name: "Emily Chen",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      date: "2 months ago",
      text: "Hands down, the best service I've experienced. The Navigo team made me feel confident and stress-free throughout the entire mortgage process. Couldn't be happier!"
    },
    {
      name: "James Wilson",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      date: "3 months ago",
      text: "From the first call to the final approval, Navigo was amazing. They answered all my questions and found me an unbeatable rate. So glad I chose them!"
    },
    {
      name: "Fatima Al-Sayed",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      date: "3 months ago",
      text: "I never thought getting a mortgage could be this smooth. The Navigo team was super helpful, patient, and really knew their stuff. 10/10 would recommend!"
    },
    {
      name: "Ahmed Khan",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      date: "4 months ago",
      text: "These guys are the real deal. They guided me step by step and made sure I got the best mortgage rate in the market. Thank you, Navigo!"
    },
    {
      name: "Lisa Johnson",
      profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
      rating: 5,
      date: "4 months ago",
      text: "Honestly, I was stressed about the whole mortgage thing, but Navigo made it easy. They handled everything efficiently and kept me updated throughout. Amazing service!"
    },
    {
      name: "David Smith",
      profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
      rating: 5,
      date: "5 months ago",
      text: "Navigo was recommended by a friend, and I'm so glad I reached out to them. They took care of everything and saved me a ton of money. Huge thanks to the team!"
    },
    {
      name: "Aisha Rahman",
      profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
      rating: 5,
      date: "5 months ago",
      text: "Professional, friendly, and super knowledgeable. Navigo made the mortgage process seamless and stress-free. Would definitely recommend them to anyone in the UAE!"
    },
    {
      name: "Michael Brown",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
      rating: 5,
      date: "6 months ago",
      text: "I had no idea where to start with my mortgage, but Navigo made it simple. They explained all my options and helped me secure the best rate. Couldn't ask for more!"
    }
  ];

  return (
    <section className="relative bg-white py-6 sm:py-8 md:py-12 lg:pt-16 lg:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold pb-4 text-primary">
            What Our Clients Say
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
           
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="reviews-slider pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Temporarily hidden "View All Reviews" button
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Navigo+Mortgage+Broker+Dubai/@25.2119189,55.2773799,17z/data=!4m8!3m7!1s0x3e5f42d05a745015:0x8c7a57f6f3c6e8c4!8m2!3d25.2119189!4d55.2799548!9m1!1b1!16s%2Fg%2F11t6_c_5yw?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span>View All Reviews on Google</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        */}
      </div>
    </section>
  );
};

export default GoogleReviews;
