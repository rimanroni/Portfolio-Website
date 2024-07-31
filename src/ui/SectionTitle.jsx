import React from 'react';

const SectionTitle = ({titleNo, titleName }) => {
    return (
        <div className='flex items-center gap-4'>
            <h1 className='text-designColor text-2xl font-bold'>{titleNo}</h1>
            <h1 className='font-bold text-2xl lg:text-3xl'>{titleName}</h1>
            <h1 className='w-[100px] h-[1px] bg-white'></h1>
        </div>
    );
};

export default SectionTitle;