import React from "react";
//import Page-error from './D-error/Page-error'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style/index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page-error  />,
  },
 
]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);