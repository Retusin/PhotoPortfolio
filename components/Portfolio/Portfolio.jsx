import React from 'react';
import Image from 'next/image';

import {sliderData} from './../Slider/SliderData';

function Portfolio() {
  return (
    <div className="container py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image src="/images/1.jpg" alt="/" layout="responsive" width="677" height="451" />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/2.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/4.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/1.jpg"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
