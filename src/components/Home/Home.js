import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                <div  className='text-center p-1'>
                    <img className='w-full object-cover' src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2019/01/powerful-education.jpg" alt="" />
                </div>
                <div className='md:grid md:grid-cols-2 gap-3 p-5'>
                    <div className='text-center'>
                        <p className='text-2xl md:text-5xl md:bold font-medium'>Programming Quiz is the best choice for everyone!</p>
                        </div>
                    <div className='text-center'>
                        <p className='text-justify text-xl'>
                        Implement the top-notch learning technology of LMS and create a perfect workflow within any educational institution.
                        Deliver skills and knowledge online to thousands of students and create a productive learning environment.
                        Build a universal online learning platform for everyone and provide an exceptional experience

                        </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Home;