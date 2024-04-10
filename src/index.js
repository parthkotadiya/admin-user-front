import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LOGIN from './login';
import SIGNUP from './signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const roter= createBrowserRouter([{
  path: '/login', element: <LOGIN />,
},
{
  path:"/",element:<App/>
},
{
  path:"/signup",element:<SIGNUP />
}
])

root.render(
  // <React.StrictMode>
<RouterProvider router={roter}>
  
</RouterProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
