import React from 'react';
import Swal from "sweetalert2";

const option = ({option,id,correctAnswer}) => {
    // console.log(option);
    // console.log(correctAnswer);
    const handleGetValue = (e) =>{
        // console.log(e);
        if(e===correctAnswer){
            // console.log('correct',e);
            Swal.fire("Great!", "Your Answer is Right!", "success");
            
        }
        else{
            // console.log('wrong',e);
            Swal.fire({
              icon: "error",
              title: "Wrong Answer",
              text: `Right Answer is: "${correctAnswer}"`,
            });
            
        }
        
    }
    
    
    return (
        <div  className='p-2 bg-purple-300 my-2 hover:bg-purple-600'>
            <input onClick={(e)=>handleGetValue(e.target.value)} type="radio" name={id} value={option} id={option} />
            <label className='ml-4 text-xs md:text-base' htmlFor={option}>{option}</label>
        </div>
    );
};

export default option;