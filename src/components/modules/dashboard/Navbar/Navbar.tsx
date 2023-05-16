import React from 'react';
import Link from 'next/link';

interface Props {
  navElements: {
    link: string;
    title: string;
  }[];
}

export function Navbar({ navElements }: Props) {
  return (
    <nav className="flex justify-between items-center bg-secondary font-semibold text-white inter text-base px-[112px] py-[22px]">
      {navElements.map((element, index) => {
        return (
          <Link href={element.link} className="hover:text-body" key={index}>
            {element.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
