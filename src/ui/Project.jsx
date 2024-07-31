import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';

const Project = () => {
    const projectsArray = [
        {title:"LaslesVPN", link:"https://github.com/rimanroni/LaslesVPN-Landing-Corporate-Template", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ']},

        {title:" CarServics2024ClientSide ", link:"https://github.com/rimanroni/carServics2024ClientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:" Coffee ", link:"https://github.com/rimanroni/coffee_home_clientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:"DragonNews", link:"https://github.com/rimanroni/React-Dragon-News-ph-8", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:"LaslesVPN", link:"https://github.com/rimanroni/LaslesVPN-Landing-Corporate-Template", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ']},

        {title:" CarServics2024ClientSide ", link:"https://github.com/rimanroni/carServics2024ClientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:" Coffee ", link:"https://github.com/rimanroni/coffee_home_clientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:"DragonNews", link:"https://github.com/rimanroni/React-Dragon-News-ph-8", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:"LaslesVPN-Landing-Corporate-Template", link:"https://github.com/rimanroni/LaslesVPN-Landing-Corporate-Template", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ']},

        {title:" CarServics2024ClientSide ", link:"https://github.com/rimanroni/carServics2024ClientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:" Coffee ", link:"https://github.com/rimanroni/coffee_home_clientSide", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
        {title:"DragonNews", link:"https://github.com/rimanroni/React-Dragon-News-ph-8", desc:"Check out the new  landing page design and see how Tailwind CSS and React come together to create a stunning static page" , framework:['tailwindcss', 'react js ', 'JavaScript ' ,'Node js' , 'mongodb ']},
    ]
    const [showall, setShowall] = useState(false);
    const dispalyArray = showall ? projectsArray : projectsArray.slice(0,6)
    return (
        <div className='py-12'>
            <div className='flex  gap-4 flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>Other Noteworthy Projects</h1>
                <p className='text-designColor'>view the archive</p>
            </div>
    
           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {dispalyArray.map((item, ind)=>(
                <ProjectsCard key={ind} item={item}/>
              ))}

           </div>
           <div className='flex justify-center mt-4 '>
           <button onClick={()=>setShowall(!showall)} className='p-2 border px-4 border-designColor rounded-lg'>{showall?'Show Less' : "Show All"}</button>
           </div>
        </div>
    );
};

export default Project;