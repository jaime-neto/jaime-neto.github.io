import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages
import HomePage from "./routes/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <HomePage/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
     <RouterProvider router = {router}/>
    </React.StrictMode>
);
