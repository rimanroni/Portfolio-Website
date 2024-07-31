import React, { useEffect, useState } from 'react';
import EducationShow from './EducationShow';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

const Exprience = () => {
const [btn1, setBtn1] = useState(true);
const [btn2, setBtn2] = useState(false);
const [btn3, setBtn3] = useState(false);
const [btn4, setBtn4] = useState(false);
const [btn5, setBtn5] = useState(false);
        const handleBtn1 = () =>{
          setBtn1(true);
          setBtn2(false)
          setBtn3(false)
          setBtn4(false)
          setBtn5(false)
        }
        const handleBtn2 = ()=>{
          setBtn1(false );
          setBtn2(true)
          setBtn3(false)
          setBtn4(false)
          setBtn5(false)
        }
        const handleBtn3 = () =>{
          setBtn1(false );
          setBtn2(false)
          setBtn3(true )
          setBtn4(false)
          setBtn5(false)
        }
        const handleBtn4 = () =>{
          setBtn1(false );
          setBtn2(false)
          setBtn3(false)
          setBtn4(true)
          setBtn5(false)
        }
        const handleBtn5 = () =>{
          setBtn1(false );
          setBtn2(false)
          setBtn3(false)
          setBtn4(false)
          setBtn5(true)
        }

        const [data, setData] = useState([])
        useEffect(()=>{
          fetch('skills.json')
          .then(res=>res.json())
          .then(data=>setData(data))
        },[])
    return (
        <div>
            <div className='mt-12 py-10'>
                 <SectionTitle titleNo={'02'} titleName={' Studied from'}/>
              <div className='max-w-4xl flex md:flex-row  flex-col-reverse   gap-2 mt-4 p-4   mx-auto '>
              <div className='   flex  items-start justify-start flex-col   '>
                 <button onClick={handleBtn1} className={`border-l ${btn1?'border-designColor' : 'border-[#112240]'}  p-2 w-[200px]  hover:bg-[#112240] pl-4 text-left`}> Web Devlopment</button>
                 <button onClick={handleBtn2} className={`border-l ${btn2?'border-designColor' : 'border-[#112240]'} p-2 w-[200px]  hover:bg-[#112240] pl-4 text-left`}>Mern Stack</button>
                 <button onClick={handleBtn3} className={`border-l ${btn3?'border-designColor' : 'border-[#112240]'} p-2 w-[200px]  hover:bg-[#112240] pl-4 text-left`}>Engineering</button>
                 <button onClick={handleBtn4} className={`border-l ${btn4?'border-designColor' : 'border-[#112240]'} p-2 w-[200px]  hover:bg-[#112240] pl-4 text-left`}>Secondary School</button>
                 <button onClick={handleBtn5} className={`border-l ${btn5?'border-designColor' : 'border-[#112240]'} p-2 w-[200px]  hover:bg-[#112240] pl-4 text-left`}>Junior School </button>
              </div>
              <div className='  lg:ml-4 w-[75%]'>
                    {btn1&&<EducationShow roll={'WEB8-0206'} pera={'Programming Hero is an educational platform designed to make learning coding engaging and interactive. It offers courses on modern web development, focusing on the MERN stack (MongoDB, Express.js, React, Node.js). The platform aims to guide learners from beginners to securing internships or full-time jobs. For more details, you can visit Programming Hero.'} link={"https://www.programming-hero.com/"} name={'Programming Hero Batch - 8'} end={'Jan 2024'} start={'Jun 2023 '} title={'Full Stack Web Development'}/>}

                    {btn2&&<EducationShow roll={'PNT-S17206997359'} pera={'PeopleNTech is a professional IT training institute in Bangladesh, focusing on skill development and job placement. They offer over 70 courses, including post-graduate diplomas, web development, network administration, and digital marketing. The institute emphasizes industry-focused live courses, job and internship opportunities, lifetime support, and career preparation. They also assist with freelance work and provide direct guidance from mentors. For more details, visit PeopleNTech.'} link={"https://peoplentech.com.bd/"} name={'PeopleNTech Professional IT Training Institute'} end={'Nov 2024'} start={'July 2024 '} title={'MERN Stack Web Development'}/>}

                    {btn3&&<EducationShow roll={'501334 Session (20-24)'} pera={'Life Line Polytechnic Institute in Thakurgaon, Bangladesh, offers various technical and vocational education programs. It aims to provide students with practical skills and knowledge to prepare them for the workforce. The institute focuses on hands-on training and industry-relevant curriculum to ensure students are job-ready upon graduation.'} link={"https://www.facebook.com/lifelinepolytechnicthakurgaon/"} name={'Life Line Polytechnic Institute Thakurgaon'} end={'Dec 2024'} start={'Aug 2020 '} title={'Computer Science and Engineering'}/>}

                    {btn4&&<EducationShow roll={'Science Group (4.17)'} pera={'Baliadangi Pilot Model High School is an educational institution in Baliadangi, Thakurgaon, Bangladesh. It provides secondary education to students in the region, focusing on academic excellence and extracurricular activities to promote overall student development. The school aims to prepare students for higher education and future careers through a well-rounded curriculum and supportive learning environment. '} link={"https://www.sohopathi.com/balia-dangi-pilot-high-school/"} name={'Baliadangi Pilot Model High School'} end={'Dec 2019'} start={'Jan 2018 '} title={'Passed the Secondary Examination'}/>}

                    {btn5&&<EducationShow roll={'335860'} pera={'Baliadangi Pilot Model High School is an educational institution in Baliadangi, Thakurgaon, Bangladesh. It provides secondary education to students in the region, focusing on academic excellence and extracurricular activities to promote overall student development. The school aims to prepare students for higher education and future careers through a well-rounded curriculum and supportive learning environment. '} link={"https://www.sohopathi.com/balia-dangi-pilot-high-school/"} name={'Baliadangi Pilot Model High School'} end={'Dec 2017'} start={'Jan 2015 '} title={'Passed the Junior School Examination'}/>}
              </div>
              </div>

            </div>

            <div>
              <div className='text-center flex flex-col items-center justify-center px-8 gap-3'>
                <h1 className='text-2xl md:text-4xl font-bold tracking-wide'>What I do</h1>
                <p className='lg:w-[800px]  tracking-wide text-base text-center'>
                I have skills in React, including building components, managing state, handling props, and using hooks for creating dynamic and responsive user interfaces. In backend development with Node.js, I can set up servers, handle requests and responses, work with middleware, and integrate with databases like MongoDB. I am proficient in designing schemas, performing CRUD operations, indexing, and aggregating data to develop scalable and efficient database solutions. With this skill set, I am capable of developing fully functional, dynamic, and responsive full-stack web applications, from initial design to deployment.
                </p>
              </div>


              <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  {data.map((item, ind)=>(

                    <SkillsCard item={item} key={ind}/>
                  ))}
              </div>
            </div>
        </div>
    );
};

export default Exprience;