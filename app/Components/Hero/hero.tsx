import React from 'react'
import Image from 'next/image';
import cap from "../../../public/assets/hero-bg.png";

import AboutPage from '@/app/About/page';

const Hero = () => {
  return (
    <section className="relative  flex items-center w-full bg-cover justify-center h-screen">
      <Image 
        src={cap} 
        alt="This is Cap Image" 
        width={600} // Half of the original width
        height={200} // Adjust height as necessary to maintain aspect ratio
        className="absolute top-0 bg-cover w-full object-cover opacity-40 " // Apply opacity, cover half the width
      />
      <div className="relative z-10 mb-[420px] text-center">
        <h1 className="text-blue-600  font-semibold font-sans p-1 text-2xl">
          Welcome To KK Caps!
        </h1>
        <button className="mt-4 px-4  py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Explore
        </button>
      </div>

    </section>
  );
};

export default Hero;



