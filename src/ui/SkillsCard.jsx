import React from 'react';

const SkillsCard = ({item}) => {
    const {img, title, desc} = item;
    return (
        <div className='bg-[#112240] space-y-4 p-4 rounded-md'>
            <img src={img} alt="" />
            <h1 className='text-2xl font-bold text-designColor'>{title}</h1>
            <p>{desc}</p>
        </div>
    );
};

export default SkillsCard;