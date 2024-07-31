import React from 'react';

const Contact = () => {
    return (
        <div className='py-10'>
           <div className='flex flex-col gap-5 items-center justify-center'>
            <p className='text-designColor text-xl'>04. What’s Next?</p>
            <h1 className='text-2xl tracking-wide md:text-4xl font-bold'>Get In Touch</h1>
            <p className='lg:w-[500px] text-center'>
            Although I’m not currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try my best to get
            back to you!
            </p>
            <a href="mailto:rimanroni386@gmail.com">
                <button className='border border-designColor px-4 py-2 rounded-md'>Say Hello</button>
            </a>
           </div>
        </div>
    );
};

export default Contact;