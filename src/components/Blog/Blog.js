import React from 'react';

const Blog = () => {
    return (
      <div>
        <div className='p-7 bg-purple-400 m-4 rounded-2xl'>
          <p className='mb-4 text-xl'><span className='font-semibold'>Question:</span> What is the purpose of react router?</p>
          <p className='text-base bg-purple-300 p-6 rounded-2xl'>
            <span className='font-semibold'>Answer: </span> ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
        <div className='p-7 bg-purple-400 m-4 rounded-2xl'>
          <p className='mb-4 text-xl'><span className='font-semibold'>Question:</span> How does context api work in react?</p>
          <p className='text-base bg-purple-300 p-6 rounded-2xl'>
            <span className='font-semibold'>Answer: </span> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component: class App extends React.
          </p>
        </div>
        <div className='p-7 bg-purple-400 m-4 rounded-2xl'>
          <p className='mb-4 text-xl'><span className='font-semibold'>Question:</span> What is useref hook in react?</p>
          <p className='text-base bg-purple-300 p-6 rounded-2xl'>
            <span className='font-semibold'>Answer: </span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
          </p>
        </div>
      </div>
    );
};

export default Blog;