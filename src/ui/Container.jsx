import React from 'react';

const Container = ({children, id}) => {
    return (
        <div id={id} className='max-w-7xl  px-8 mx-auto'>
            {children}
        </div> 
    );
};

export default Container;