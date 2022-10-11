import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './layout/Main';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Topic from './components/Topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topic',
          element: <Topic></Topic>
        },
        {
          path: "/statistic",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        }
      ],
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);
  return (
    <div>
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
