import React from 'react'
import AboutPage from '@/app/About/page';
import ContactPage from '@/app/Contact/page';
const Header = () => {
  return (
    <header className='bg-yellow-300'>
      <div className="bg-gradient-to-bl p-4 flex items-center justify-between">
        <h1 className="text-black  font-black  p-2">
          KK CAPS
        </h1>
        
        <nav className="flex space-x-5">
          <a href="/app/Home/page.tsx" className="text-black  font-serif font-semibold hover:text-blue-700">Home</a>
          <a href="/app/About/page.tsx" className="text-black font-serif font-semibold hover:text-blue-700">About Us</a>
          <a href="/app/Contact/page.tsx"  className="text-black font-serif font-semibold  hover:text-blue-700">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;

