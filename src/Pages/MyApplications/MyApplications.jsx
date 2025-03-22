import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const MyApplications = () => {
    // const all_application = useLoaderData();
    // const {email} = useLoaderData();
    const [jobs, setJobs] = useState([]);
    console.log(jobs);
    
    useEffect(() => {
        fetch('http://localhost:5000/job-applications?email=mdrifathossainsinfo@gmail.com')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl mb-4">My Applications ({jobs.length})</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Company</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Resume</th>
              <th className="border p-2">LinkedIn</th>
              <th className="border p-2">Cover Letter</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="border">
                <td className="border p-2 flex items-center">
                  <img src={job.company_logo} alt={job.company} className="h-8 w-8 mr-2" />
                  {job.company}
                </td>
                <td className="border p-2">{job.title}</td>
                <td className="border p-2">{job.name}</td>
                <td className="border p-2">{job.email}</td>
                <td className="border p-2">{job.phone}</td>
                <td className="border p-2">
                  <a href={job.resume} target="_blank" className="text-blue-500">View</a>
                </td>
                <td className="border p-2">
                  {job.linkedIn ? (
                    <a href={job.linkedIn} target="_blank" className="text-blue-500">Profile</a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border p-2">{job.cover}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyApplications;