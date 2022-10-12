import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Rechart from '../Rechart/Rechart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const quizTopic = useLoaderData();
    // console.log(quizTopic);
    const quiz = quizTopic.data;
    // console.log(quiz);
    
    return (
      <div className='mt-8'>

        <div className="text-center">
          <ResponsiveContainer width='70%' height={400}>
            <LineChart width={400} height={400} data={quiz}>
              <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Legend></Legend>
              <CartesianGrid strokeDasharray="2 4"></CartesianGrid>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Statistics;