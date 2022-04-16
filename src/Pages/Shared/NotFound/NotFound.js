import React from 'react';
import img404 from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-primary my-5'>Not found the page</h2>
            <img className='w-100' src={img404} alt="" />
        </div>
    );
};

export default NotFound;