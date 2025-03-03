import React, { useEffect, useRef } from 'react';

const AnimateOnScroll = ({ children, className = '', animation = 'fade-up' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-8 transition-all duration-1000 ease-out';
      case 'fade-in':
        return 'opacity-0 transition-opacity duration-1000 ease-out';
      case 'slide-in':
        return 'opacity-0 -translate-x-8 transition-all duration-1000 ease-out';
      default:
        return 'opacity-0 translate-y-8 transition-all duration-1000 ease-out';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${getAnimationClass()}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
