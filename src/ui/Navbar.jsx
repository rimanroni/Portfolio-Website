import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBarsStaggered, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
const Navbar = () => {
    const navItems = [
        {title:"Home", link:"home",delay:".1"},
        {title:"About", link:"about",delay:".2"},
        {title:"Exprience", link:"exprience",delay:".3"},
        {title:"Project", link:"project",delay:".4"},
        {title:"Contact", link:"contact",delay:".5"},
    ]
    const [nav, setNav] = useState(false);
    const handleNavbar = () =>{
      setNav(!nav)
    }

    const socalLinkArray = [
      {icon:<FaFacebook/> , link:"https://www.facebook.com/roniriman100", delay:.7},
      {icon:<FaLinkedin/>, link:"https://www.linkedin.com/in/riman-roni",delay:.8}, 
      {icon:<FaGithub/>, link:"https://github.com/rimanroni", delay:.9},
      {icon:<FaTwitter/>, link:"https://x.com/rimanroni386", delay:1} 
    ]
    return (
      <div className='sticky top-0 z-10 '>
        <div className='px-8 flex py-4      bg-primaryColor     border-b-2 border-designColor/10  items-center justify-between'>
         <a href="/"> <h1 className='logo font-semibold tracking-wide'>RIMAN</h1></a>
            <div className='hidden  lg:flex gap-7 items-center '>
              {navItems.map((item,ind)=>(
                <motion.p
                 initial={{y:-10, opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{duration:.2, delay:item.delay}}
                className='font-semibold cursor-pointer' key={ind}>
                    <Link
                    smooth={true}
                    offset={-80}
                    to={item.link}>{item.title}</Link>
                </motion.p>
              ))}
              <motion.a
               className='text-designColor rounded-lg hover:bg-designColor/10 duration-300 border border-designColor px-4 py-2'
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:.2, delay:.6}}
               href="/rony.pdf">
              <button>Resume</button>
              </motion.a>
            </div>
            <button onClick={handleNavbar} className='lg:hidden text-2xl'><FaBarsStaggered /></button>
         </div>
         {nav&&<div className='bg-[#112240] lg:hidden  p-4 z-10 h-screen absolute right-0  top-0  w-[300px]'>
              
               <div className='flex text-2xl text-designColor hover:text-red-500  duration-300 justify-end'>
               <button onClick={handleNavbar}>X</button>
               </div>

               <div className="flex flex-col justify-center  ">
               {navItems.map((item,ind)=>(
                <motion.p
                 initial={{y:-10, opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{duration:.2, delay:item.delay}}
                className='font-semibold cursor-pointer' key={ind}>
                    <Link
                    smooth={true}
                    offset={-80}
                    to={item.link}>{item.title}</Link>
                </motion.p>
              ))}
              <motion.a
               className='text-designColor rounded-lg hover:bg-designColor/10 mt-4 duration-300 border border-designColor px-4 py-2'
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:.2, delay:.6}}
               href="/rony.pdf">
              <button>Resume</button>
              </motion.a>

              <div className="flex gap-4 mt-5 justify-center">
                {socalLinkArray.map((item, ind)=>(
                   <motion.a
                   initial={{y:-10, opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{duration:.4, delay: item.delay}}
                   href={item.link} className='text-xl p-2 border rounded-full duration-300 hover:text-designColor hover:border-designColor ' key={ind}>
                   {item.icon}
                </motion.a>
                )
                )}
              </div>
               </div>
              </div>}
      </div>
    );
};

export default Navbar;