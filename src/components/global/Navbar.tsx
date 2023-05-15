import React from 'react';
import Link from 'next/link';

interface Props {
    navElements: {
        title: string;
        link: string;
    }[]
}

export function Navbar({navElements}:Props) {
  return (
      <nav className="flex justify-around items-center bg-secondary font-semibold text-white inter text-base px-20 py-[22px]">
        {
            navElements.map((element, index) => {
                return (
                    <Link href={element.link} className='hover:text-body' key={index}>{element.title}</Link>
                )
            })
        }
      </nav>
  );
};

export default Navbar;