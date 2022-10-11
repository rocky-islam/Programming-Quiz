import { EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Options from '../Options/Options';
import Swal from "sweetalert2";

const Question = ({qzQuestion}) => {
    // console.log(qzQuestion);
    const {id, question, correctAnswer, options} = qzQuestion;
    const question_name= question.split('<p>');
    // console.log(question_name);
    
    const questionName = question_name[1].split('</p>');
    
    const handleEye =() =>{
        console.log(correctAnswer);
        Swal.fire(`Correct Answer is`, `${correctAnswer}`, "success");
        
    }
    
    
    return (

        <div>
        <div className='mt-10 bg-slate-400 border-red-800 border w-2/4 ml-3 p-5'>
            <div className=''>
            <div className='flex justify-between'>
                <p>Quiz: {questionName}</p>
                <div>
                    <button onClick={() =>handleEye(correctAnswer)}>
                        <EyeIcon className='h-6 w-6'></EyeIcon>
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                {
                    options.map(option => <Options
                    option={option}
                    id={id}
                    ></Options>)
                }
                {/* <div>
                    <div>
                    <input type="radio" name={options[0]} id="" />
                    <label htmlFor="">{options[0]}</label>
                </div>
                <div>
                    <input type="radio" name={options[1]} id="" />
                    <label htmlFor="">{options[1]}</label>
                </div>
                <div>
                    <input type="radio" name={options[2]} id="" />
                    <label htmlFor="">{options[2]}</label>
                </div>
                <div>
                    <input type="radio" name={options[3]} id="" />
                    <label htmlFor="">{options[3]}</label>
                </div>
                </div> */}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Question;