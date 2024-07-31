import React from 'react';
import { motion } from 'framer-motion';
const EducationShow = ({name, pera, roll , link, start, end , title}) => {
    return (
        <motion.div
        
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.3, delay:.4}}
        className='space-y-2'>
            <h1 className='text-2xl text-designColor font-bold tracking-wide '>{title}</h1>
            <a href={link} target='_blank'>
            <p>{name} </p>
            </a>
            <p> Student Id : <span>{roll}</span></p>
            <h1>{start} to {end}</h1>
            <p className='text-justify'>{pera}</p>
        </motion.div>
    );
};

export default EducationShow; 