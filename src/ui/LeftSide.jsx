import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiTwitter } from 'react-icons/fi';

const LeftSide = () => {
    return (
        <div className='hidden lg:block lg:fixed left-0 bottom-0 py-6'>
             <div className='flex flex-col gap-2 items-center'>
              <a href="https://github.com/rimanroni" 
               className='text-2xl hover:text-designColor hover:border-designColor duration-500  p-2 rounded-full border'
              target='_blank'>
               <FiGithub />
              </a>
              <a href="https://www.facebook.com/roniriman100/" className='text-2xl hover:text-designColor hover:border-designColor duration-500  p-2 rounded-full border' target='_blank'>
             <FaFacebookF />
               </a>
               <a 
               className='text-2xl hover:text-designColor hover:border-designColor duration-500  p-2 rounded-full border' target='_blank'
               href="https://www.linkedin.com/in/riman-roni/">
             <FaLinkedinIn />
                </a>
                <a  className='text-2xl hover:text-designColor hover:border-designColor duration-500  p-2 rounded-full border' href="https://x.com/rimanroni386" target='_blank'>
                <FiTwitter />
                </a>
             <p className='h-32 w-[1px] bg-white'></p>

             </div>
        </div>
    );
};

export default LeftSide;