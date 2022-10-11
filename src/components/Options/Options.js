import React from 'react';

const option = ({option,id}) => {
    // console.log(option);
    
    return (
        <div className='p-2 bg-purple-300 my-2 hover:bg-purple-600'>
            <input type="radio" name={id} value={option} id={option} />
            <label className='ml-4' htmlFor={option}>{option}</label>
        </div>
    );
};

export default option;