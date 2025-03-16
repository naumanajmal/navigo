import { useState } from 'react';

const sliderContent = [
  {
    title: {
      start: "",
      highlight: "Your Search",
      end: " for the UAE's Most Affordable Mortgage Rate Ends Here!"
    },
    description: "We are your one stop solution for finding the best home loan in UAE"
  },
  {
    title: {
      start: "",
      highlight: "Navigate",
      end: " Your Wealth Journey with Expert Financial Advisory."
    },
    description: "The best mortgage rates in UAE at your fingertips!"
  },
  {
    title: {
      start: "",
      highlight: "Unlock",
      end: " Your Financial Potential with Expert Consultation."
    },
    description: "Improving your homebuying experience, we work with the best banks"
  }
];

export const useSliderContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCurrentContent = () => sliderContent[activeIndex];

  return {
    content: sliderContent,
    activeContent: getCurrentContent(),
    setActiveIndex,
    activeIndex
  };
};
