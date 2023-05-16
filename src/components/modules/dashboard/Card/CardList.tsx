import React from 'react';
import Card from './Card';

interface Props {
    cardList: {
        desc: string;
        title: string;
    }[]
}

export function CardList({cardList}:Props) {
  return (
    <div className='overflow-x-auto'>
      <div className='grid grid-cols-3 gap-[27px] w-[1100px] lg:w-full text-white p-6 bg-dashboardBg px-[112px]  '>
        {
          cardList.map((element, index) => {
            return (
              <Card title={element.title} desc={element.desc} key={index}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default CardList;