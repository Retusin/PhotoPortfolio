import Head from 'next/head';

import Hero from './../components/Hero/Hero';
import Slider from '../components/Slider/Slider';
import {sliderData} from './../components/Slider/SliderData';
import PhotoGrid from '../components/PhotoGrid/PhotoGrid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
        button="Book Now"
      />
      <Slider slides={sliderData} />
      <PhotoGrid />
    </div>
  );
}
