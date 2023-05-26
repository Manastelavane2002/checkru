import React from 'react';
import { IMAGES } from 'src/constants/images';
import { DOWNLOAD_TYPES } from './statement.types';

interface StatementProps {
    downloadOptions?: {
        onClick: () => void;
        type: DOWNLOAD_TYPES.CSV | DOWNLOAD_TYPES.PDF;
    }[]
    title: string;
}

export function Statement({title,downloadOptions}: StatementProps) {
    return (
    <div className='grow flex items-center justify-between cursor-pointer'>
      <div className='mr-auto'>{title}</div>
      {
        downloadOptions?.map((option, index) => (
            <div key={index} className='items-end px-2 lg:px-4 '>
                <img src={option.type === 'pdf' ? IMAGES.PNG : IMAGES.CSV} alt={option.type === 'pdf' ? 'download pdf' : 'download csv'} className='h-4 lg:h-5 xl:h-6' onClick={option.onClick} />
            </div>
        ))
      }
    </div>
  );
}

export default Statement;