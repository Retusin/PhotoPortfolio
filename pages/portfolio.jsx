import React from 'react';

import Portfolio from '../components/Portfolio/Portfolio';
import Hero from './../components/Hero/Hero';

function Work() {
  return (
    <div>
      <Hero
        heading="My work"
        message="This is some of my recent work traveling the world."
        button="Book Now"
      />
      <Portfolio />
    </div>
  );
}

export default Work;
