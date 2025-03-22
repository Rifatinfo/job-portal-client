import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path : "/signIn",
        element : <SignIn/>
      },
      {
        path : "/jobs/:id",
        element : <JobDetails/>,
        loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path : "/jobApply/:id",
        element : <JobApply/>
      }
    ],
  },
]);

export default router;
