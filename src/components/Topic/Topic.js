import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DataTopic from '../DataTopic/DataTopic';

const Topic = () => {
    const quizTopic = useLoaderData();
    const allTopic = quizTopic.data;
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-center mb-8 text-2xl font-medium '>Total Topic: {allTopic.length}</h1>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5'>
                    {
                        allTopic.map(allData => <DataTopic
                        key={allData.id}
                        allData={allData}
                        ></DataTopic>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Topic;