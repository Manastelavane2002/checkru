import React from 'react';
import Link from 'next/link';
import { IMAGES } from '../../constants/images';
import { Button } from './Button';

export function Header() {
  const onLogout = () => {
    
  };
  return (
    <header className="flex justify-between items-center h-[124px] px-20 py-5 bg-black  text-white inter inter" >
      <div className="flex items-center ">
        <img src={IMAGES.LOGO} alt="Logo" className="h-20" />
      </div>
      <nav className="flex items-center gap-10 font-semibold">
        <Link href="#" className='hover:text-[#475467]'>About Us</Link>
        <Link href="#" className='hover:text-[#475467]'>Contact and Support</Link>
        <Link href="#" className='hover:text-[#475467]'>Our Stores</Link>
        <Button className="w-max bg-transparent border-white border rounded-full px-4 py-2 hover:bg-[#6941c6] hover:border-[#6941c6]" onClick={onLogout} label="Log out" />
      </nav>
    </header>
  );
};

export default Header;
