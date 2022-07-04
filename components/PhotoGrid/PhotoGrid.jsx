import React from 'react';
import {sliderData} from './../Slider/SliderData';
import PhotoGridImg from './PhotoGridImg';

function PhotoGrid() {
  return (
    <div className="container py-24">
      <p className="text-2xl font-bold">Follow me on photo stock</p>
      <p className="pb-4">Capture</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        {sliderData.map((item, idx) => (
          <PhotoGridImg photo={item.image} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
