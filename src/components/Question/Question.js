import React from 'react';
import Options from '../Options/Options';

const Question = ({qzQuestion}) => {
    console.log(qzQuestion);
    const {id, question, correctAnswer, options} = qzQuestion;
    const question_name= question.split('<p>');
    // console.log(question_name);
    
    const questionName = question_name[1].split('</p>');
    // console.log(questionName);
    

    // console.log(options);
    
    
    return (
        <div className='mt-10 border-red-800 border w-3/4 ml-3 p-5'>
            <div>
                <p>Quiz: {questionName}</p>
            </div>
            <div className='mt-5'>
                {
                    options.map(option => <Options
                    option={option}
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
    );
};

export default Question;