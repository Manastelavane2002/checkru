import React from 'react';
import Link from 'next/link';
import { IMAGES } from '../../constants/images';
import { Button } from './Button';
import {LINKS} from '../../constants/links';

export function Header() {
  const onLogout = () => {
    
  };
  return (
    <header className="flex justify-between items-center h-[124px] px-20 py-5 bg-black  text-white inter" >
      <div className="flex items-center ">
        <img src={IMAGES.LOGO} alt="Logo" className="h-20" />
      </div>
      <nav className="flex items-center gap-10 font-semibold">
        {
          LINKS?.HEADERLINKS.map((link,index) => (
            <Link href={link.link} key={index} className='hover:text-body'>{link.title}</Link>
          ))
        }
        <Button className="w-max bg-transparent border-white border rounded-full px-4 py-2 hover:bg-headerButtonHover hover:border-headerButtonHover" onClick={onLogout} label="Log out" />
      </nav>
    </header>
  );
};

export default Header;
