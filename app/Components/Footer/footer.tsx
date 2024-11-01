import React from 'react'

const Footer = () => {
  return (
  
    <footer className='bg-gradient-to-r'>
    <div className='containeR text-center' >
      <section className='bg-blue-500 '>
        <p className='text-lg font-semibold  bg-blus-900 ' >
            @ Kashif Khan Marofi.All Rights Reserved.
            </p>
    
    <div className='mt-3'>
       <a href='mailto:marofikashif@gmail.com'
       className='text-white hover:text-yellow-300 hover:underline transition-colors'>
        Contact Me Via Email 
        </a>

    </div>
    </section>
    </div>
    </footer>
  )
}

export default Footer;