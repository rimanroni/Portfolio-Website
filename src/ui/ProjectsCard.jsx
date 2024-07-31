import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectsCard = ({item}) => {
    const {title,link, desc , framework } = item;
    return (
       <motion.a
        initial={{y:-20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.3, delay:.5}}
       href={link} target='_blank'>
         <div className='bg-[#11264a] space-y-4 h-[300px] group py-4 rounded px-4' >
            <div className='flex text-2xl items-centet justify-between'>
            <FaRegFolder />
            <FiGithub />
            </div>
            <h1 className='text-2xl group-hover:text-designColor font-bold'>{title}</h1>
            <p>{desc}</p>
             <ul className='flex items-center gap-2'>
                {framework.map((item, ind)=>(
                    <li key={ind }>{item}</li>
                ))}
             </ul>
        </div>
       </motion.a>
    );
};

export default ProjectsCard;