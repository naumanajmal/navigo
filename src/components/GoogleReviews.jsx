import { useState, useEffect } from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 shadow-lg ring-1 ring-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
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
      <p className="mt-4 text-gray-600 leading-relaxed">{review.text}</p>
      <div className="mt-4 flex items-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google Logo"
          className="h-5 w-auto"
        />
        <span className="ml-2 text-sm text-gray-500">Posted on Google</span>
      </div>
    </div>
  );
};

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Sarah Thompson",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      date: "2 weeks ago",
      text: "Exceptional service! The team at Navigo made my mortgage journey smooth and stress-free. Their expertise and attention to detail are unmatched. Highly recommend for anyone looking for mortgage solutions in the UAE."
    },
    {
      name: "Mohammed Al-Hassan",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      date: "1 month ago",
      text: "Professional and efficient service. They helped me secure the best mortgage rate and explained everything clearly. The online calculator tool was particularly helpful in planning my finances."
    },
    {
      name: "Emily Chen",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding mortgage advisory service! The team's knowledge of the UAE property market is impressive. They found me a great deal and made the whole process seamless."
    },
    {
      name: "James Wilson",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      date: "3 months ago",
      text: "Very impressed with the level of service. The team was always available to answer my questions and provided excellent guidance throughout the mortgage application process."
    },
    {
      name: "Fatima Al-Sayed",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      date: "3 months ago",
      text: "Fantastic experience with Navigo! Their expertise in UAE mortgages is exceptional. They helped me understand all my options and secured a great rate. Highly recommended!"
    }
  ];

  const displayedReviews = reviews.slice(0, 3);

  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">

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
            <span className="ml-2 text-lg font-medium text-gray-900">
              5.0 Rating on Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

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

      </div>
    </section>
  );
};

export default GoogleReviews;
