import React from 'react';

const option = ({option}) => {
    console.log(option);
    
    return (
        <div>
            <input type="radio" name={option} value={option} id={option} />
            <label htmlFor={option}>{option}</label>
        </div>
    );
};

export default option;