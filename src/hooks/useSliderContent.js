import { useState } from 'react';

const sliderContent = [
  {
    title: {
      start: "You find the home, ",
      highlight: "we'll find",
      end: " the mortgage plan for you"
    },
    description: "We are your one stop solution for finding the best home loan in UAE"
  },
  {
    title: {
      start: "Expert of homebuying, ",
      highlight: "we shape",
      end: " the future of your living"
    },
    description: "The best mortgage rates in UAE at your fingertips!"
  },
  {
    title: {
      start: "Find your dream home, ",
      highlight: "we provide",
      end: " the best mortgage rates"
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
