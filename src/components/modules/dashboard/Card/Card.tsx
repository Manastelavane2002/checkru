import React from 'react';

interface Props {
    desc: string;
    title: string;
}

export function Card({title,desc}:Props) {
  return (
      <div className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg border-b-[5px] border-headerButtonHover">
        <span className="text-base poppins font-medium">{title}</span>
        <span className="text-2xl leading-[44px] poppins font-semibold">{desc}</span>
      </div>
  );
};

export default Card;