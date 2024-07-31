import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { FaCode } from 'react-icons/fa';
import EducationShow from './EducationShow';

const About = () => {
    const recentTecArray = [
       {title:  "JavaScript ES6", link: 'https://www.javascript.com/'},
       {title: "React JS", link:"https://react.dev/" },
       {title: "Express JS", link:"https://expressjs.com/"},
       {title:"MongoDB", link:"https://www.mongodb.com/"},
       {title:"Node JS" , link:"https://nodejs.org/docs/latest/api/"},
       {title:"TailwindCss", link:"https://tailwindcss.com/"},
       {title:"Bootstrap " ,link:"https://getbootstrap.com/"}
     ]
    
    return (
        <div className='py-10'>
            <SectionTitle titleName={'About Me'} titleNo={'01'}/>
            <div className='flex flex-col lg:flex-row gap-4  '>
                   <div className='w-full space-y-2 lg:w-1/2'>
                   <p className='tracking-wide'>
                   I,m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.
                    </p>
                    <p className='mt-4 tracking-wide'>
                    I have skills in React, including building components, managing state, handling props, and using hooks for creating dynamic and responsive user interfaces. In backend development with Node.js, I can set up servers, handle requests and responses, work with middleware, and integrate with databases like MongoDB. I am proficient in designing schemas, performing CRUD operations, indexing, and aggregating data to develop scalable and efficient database solutions. With this skill set, I am capable of developing fully functional, dynamic, and responsive full-stack web applications, from initial design to deployment.
                    </p>
                    <div className='mt-4 space-y-3 '>
                        <h1 className='text-designColor '>Here are a few technologies I have been working with recently </h1>
                        <ul className='grid grid-cols-2 '>
                            {recentTecArray.map((item,ind)=>(
                               <a href={item.link} target='_blank' key={ind} className='inline-block'>
                                 <li className='text-thin'  ><span><FaCode className='inline mr-2 text-designColor' /></span> {item.title}</li>
                               </a>
                            ))}
                        </ul>
                    </div>
                </div>
                   <div className='w-full mx-auto   lg:w-1/2    '>
                      <div className='border group cursor-pointer overflow-hidden rounded  border-designColor p-5'>
                        <img src="/roniriman.png" className='relative top-5 mx-auto object-cover  group-hover:scale-110 duration-500  ' alt="" />
                      </div>
                   </div>
            </div>


          
        </div>
    );
};

export default About;