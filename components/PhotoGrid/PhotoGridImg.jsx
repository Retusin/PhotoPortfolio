import React from 'react';
import Image from 'next/image';
import {AiFillCamera} from 'react-icons/ai';

function PhotoGridImg({photo}) {
  return (
    <div className="relative">
      <Image src={photo} width="100%" height="100%" layout="responsive" alt="/" />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-white hidden group-hover:block">
          <AiFillCamera size={40} />
        </p>
      </div>
    </div>
  );
}

export default PhotoGridImg;
