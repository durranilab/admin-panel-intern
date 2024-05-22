import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NavBar from "./comps/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }, {
                path: "/login",
                element: <Login/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ],
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
