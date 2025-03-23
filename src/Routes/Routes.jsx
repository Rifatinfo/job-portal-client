import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJobs from "../Pages/AddJobs/Addjobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

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
      },
      {
        path : "/MyApplications",
        element : <MyApplications/>,
        loader : () => fetch('http://localhost:5000/job-application-all')
      },
      {
        path : "/add-jobs",
        element : <AddJobs/>
      },
      {
        path : "/my-posted-job",
        element : <MyPostedJobs/>
      },
      {
        path : "/viewApplication/:_id",
        element : <ViewApplication/>
      }
    ],
  },
]);

export default router;
