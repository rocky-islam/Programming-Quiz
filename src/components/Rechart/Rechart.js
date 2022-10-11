import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Rechart = ({quizs}) => {
    console.log(quizs);
    
    const{ id, name, total} = quizs;
    // console.log(total);

    const data= [
        {
            name: {name},
            total: {total},
            id: {id},
        }
    ];
    
    return (
        <div>
            <LineChart width={500} height={300} data={data}>
                <Line type='monotone' dataKey="total" stroke='#82ca9d'/>
                <XAxis dataKey='name'/>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Rechart;