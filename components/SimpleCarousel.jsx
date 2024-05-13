'use client'

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const SimpleCarousel = ({ slides, height = 'h-96', width = 'w-full' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  // Auto slide to next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 15000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={`relative flex items-center justify-center ${width} ${height} bg-gray-100 overflow-hidden`}>
      {/* Left Arrow */}
      <button
        className="absolute left-4 z-10 p-2 bg-gray-700 text-white hover:bg-gray-500 rounded-full"
        onClick={goToPrevious}
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Carousel Images with Overlay Text */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={`w-full flex-shrink-0 ${height} relative`}>
            <img src={slide.image} alt={`carousel-image-${index}`} className="w-full h-full object-cover" />
            
            {/* Overlay Text with Typewriter Effect */}
            {index === currentIndex && (
              <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 p-4 rounded-lg">
                <Typewriter
                  options={{
                    strings: slide.text,
                    autoStart: true,
                    loop: false,
                    delay: 100,
                  }}
                  style={{color: "white"}}
                >
                  <span className="text-white text-2xl font-bold">
                    {slide.text}
                  </span>
                </Typewriter>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 z-10 p-2 bg-gray-700 text-white hover:bg-gray-500 rounded-full"
        onClick={goToNext}
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default SimpleCarousel;
