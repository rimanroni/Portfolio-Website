import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { MdArrowUpward } from 'react-icons/md';

const ScrollBar = () => {
   const handleScrollBtn = () =>{
    window.scrollTo({top:0, behavior:'smooth'})
   }
   useEffect(()=>{
    const scrollWindo = () =>{
        const scrollBtn = document.getElementById('scrollBtn')
        if(window.scrollY > 300){
             scrollBtn.style.display = 'block'
        }else{
             scrollBtn.style.display = 'none'
        }
    }
     window.addEventListener('scroll', scrollWindo);
     scrollBtn.addEventListener('click', handleScrollBtn);
   }, [])

    return (
        <div   className='fixed bottom-10 right-4 lg:right-[120px] z-50 bg-darkText/40 text-lightText p-3 rounded-full  cursor-pointer hover:bg-black transition duration-300 text-2xl ' id='scrollBtn'>
            <MdArrowUpward/>
        </div>
    );
};

export default ScrollBar;