import React from 'react';

import Hero from './../components/Hero/Hero';
import Contact from './../components/Contact/Contact';

function contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
        button="Book Now"
      />
      <Contact />
    </div>
  );
}

export default contact;
