import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();

    // console.log(quiz);
    const questions = quiz.data.questions;
    
    return (
      <div>
        <div className='text-center'>
          <h1 className='text-4xl p-3'>Start {quiz.data.name} Quiz</h1>
          <h1>Total quiz: {questions.length}</h1>
        </div>
        <div>
            {
                questions.map(qzQuestion => <Question
                key={qzQuestion.id}
                qzQuestion={qzQuestion}
                ></Question>)
            }
        </div>
      </div>
    );
};

export default Quiz;