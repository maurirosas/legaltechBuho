import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {SignUp} from "./pages/SignUp";
import {ChatPage} from "./pages/ChatPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "Chat/:chatId",
                element: <ChatPage/>,
            },
            {
                path: "Chat",
                element: <ChatPage/>,
            },
            {
                path: "SignUp",
                element: <SignUp/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);