import React from 'react';

const RightSide = () => {
    return (
        <div className='hidden lg:block lg:fixed right-0 bottom-0 py-6'>
            <div className='flex flex-col gap-[90px] justify-center  items-center'>
                 <a href="mailto:rimanroni386@gmail.com" className=''>
                    <p className='rotate-90 '>rimanroni386@gmail.com</p>
                 </a>
                 <p className='h-32 w-[1px] bg-white'></p>

            </div>
        </div>
    );
};

export default RightSide;