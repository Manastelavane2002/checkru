import React from 'react';
import { IMAGES } from 'src/constants/images';

interface Props {
    downloadOptions: {
        onClick: () => void;
        title:string,
        type: string;
    }[]
    title: string;
}

export function Statement({title,downloadOptions}: Props) {
    return (
    <div className='flex items-center justify-between cursor-pointer'>
      <div className='mr-auto'>{title}</div>
      <div className='items-end pr-4 lg:pr-8 '>
        <img src={IMAGES.PNG} alt='download pdf' className='h-4 lg:h-7' onClick={downloadOptions.find(option => option.type === 'pdf')?.onClick} />
      </div>
      <div className=' items-end'>
        <img src={IMAGES.CSV} alt='download csv' className='h-4 lg:h-7' onClick={downloadOptions.find(option => option.type === 'csv')?.onClick}/>
      </div>
    </div>
  );
}

export default Statement;