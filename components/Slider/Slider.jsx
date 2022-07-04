import React from 'react';
import Image from 'next/image';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';

function Slider({slides}) {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, idx) => {
          return (
            <div
              key={idx}
              className={idx === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={25}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
              {idx === current && (
                <Image src={slide.image} width="1440" height="600" objectFit="cover" alt="/" />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={25}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
