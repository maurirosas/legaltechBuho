import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { ChatPage } from "./pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Chat",
        element: <ChatPage />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
