import React from 'react';

const DataTopic = ({allData}) => {
    console.log(allData);
    const {name, logo, total} = allData
    
    return (
        <div>
            <h1>Data Topic:{name}</h1>
        </div>
    );
};

export default DataTopic;