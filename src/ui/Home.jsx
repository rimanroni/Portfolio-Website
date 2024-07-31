import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Home = () => {
    const typeWrite = ['I build things for the web..' ,'World Developer..' , 'Mern Stack Developer..' , 'Computer Engineer..']
    return (
        <motion.div
        
         initial={{y:10, opacity: 0}}
         animate={{y:0 , opacity:1}}
         transition={{duration:.2 , delay:1}}
        className='py-10 flex lg:h-[75vh] flex-col  gap-2  '>
            <h1 className='text-designColor text-xl'>Hi, my name is </h1>
            <p className='text-2xl md:text-4xl font-bold'>RIMAN RONI </p>
            <h1 className='text-2xl md:text-4xl text-[#EF013F] font-bold '><Typewriter options={{
                strings: typeWrite,
                autoStart:true,
                loop: true
            }}></Typewriter></h1>
            <p className='text-lightText lg:w-[500px] text-justify'>
            "Experienced MERN stack developer proficient in React, Node.js, and MongoDB. Skilled in building dynamic web applications with expertise in frontend and backend technologies. Passionate about creating responsive and scalable solutions from design to deployment."
             </p>
             <a
              className='text-designColor overflow-hidden font-semibold flex  group  flex-col relative  '
              href="https://www.linkedin.com/in/riman-roni/" target='_blank'>
               <span className='pb-1 inline-block'>Read More </span>
              <span className='absolute -left-[300px] translate-x-0 group-hover:-left-0 duration-500 bottom-0 w-20 h-[2px] bg-[#EF013F] inline-block'></span>
              </a>

              <a href="https://github.com/rimanroni" target='_blank'>
                <button className='border-designColor  border px-4 py-1 mt-2 hover:bg-designColor/20 duration-300 hover:text-designColor hover:border-white rounded'>Check Out My Projects</button>
              </a>
             

        </motion.div>
    );
};

export default Home;