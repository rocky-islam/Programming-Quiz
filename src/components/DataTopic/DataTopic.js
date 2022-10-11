import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const DataTopic = ({allData}) => {
    console.log(allData);
    const {name, logo, total} = allData
    
    return (
        <div className='bg-purple-300 m-3 rounded-md p-3'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='grid grid-cols-3 gap-5 mt-4'>
                <p>{name}</p>
                <p>Total quiz:{total}</p>
                <div className='bg-indigo-600 rounded-md flex justify-evenly p-1'>
                    <button >GoTo
                </button>
                <ArrowLongRightIcon className='w-6 h-6'></ArrowLongRightIcon>
                </div>
            </div>
            
        </div>
    );
};

export default DataTopic;