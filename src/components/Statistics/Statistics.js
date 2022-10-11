import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';
import { Line, LineChart } from 'recharts';

const Statistics = () => {
    const quizTopic = useLoaderData();
    // console.log(quizTopic.data);
    const quiz = quizTopic.data;
    // console.log(quiz);

    
    
    
    
    return (
      <div>
        <h1>Statistics.js</h1>

        {/* <LineChart width={500} height={400}>
          <Line type="monotone" dataKey={quiz[0].total} stroke="#82ca9d"></Line>
        </LineChart> */}
        <div>
            {
                quiz.map(quizs => <Rechart
                key={quizs.id}
                quizs={quizs}
                ></Rechart>)
            }
        </div>
      </div>
    );
};

export default Statistics;