import React from 'react';
import {ExclamationCircleIcon} from '@heroicons/react/24/outline';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen flex-col'>
                <ExclamationCircleIcon className='md:h-72 md:w-72'></ExclamationCircleIcon>
                <h1 className='text-7xl'>404</h1>
                <div className='flex items-end'>
                    <p className='text-5xl'>Page Not Found </p>
                
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;