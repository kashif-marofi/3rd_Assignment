import React from 'react'
import cap2 from '../../public/assets/cap2.png'
import Image from 'next/image'
const AboutPage = () => {
  return (
    <div>
        <section>
        <Image 
        src={cap2} 
        alt="This is cap Image"
        width={600} // Half of the original width
        height={200} // Adjust height as necessary to maintain aspect ratio
        className="absolute top-0 bg-cover w-full object-cover opacity-40 "
        />
        <h1>This is About Page.</h1>
        </section>
    </div>
  )
}

export default AboutPage