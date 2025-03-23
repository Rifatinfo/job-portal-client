import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs?email=hr@techsolutions.com')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Posted Jobs</h1>
            {jobs.length > 0 ? (
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Job Title</th>
                            <th className="px-4 py-2 border-b">Location</th>
                            <th className="px-4 py-2 border-b">Job Type</th>
                            <th className="px-4 py-2 border-b">Category</th>
                            <th className="px-4 py-2 border-b">Salary Range</th>
                            <th className="px-4 py-2 border-b">Application Deadline</th>
                            <th className="px-4 py-2 border-b">Company</th>
                            <th className="px-4 py-2 border-b">HR Name</th>
                            <th className="px-4 py-2 border-b">Status</th>
                            {/* <th className="px-4 py-2 border-b">Application Count</th> */}
                            <th className="px-4 py-2 border-b">view Application Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id}>
                                <td className="px-4 py-2 border-b">{job.title}</td>
                                <td className="px-4 py-2 border-b">{job.location}</td>
                                <td className="px-4 py-2 border-b">{job.jobType}</td>
                                <td className="px-4 py-2 border-b">{job.category}</td>
                                <td className="px-4 py-2 border-b">
                                    {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                                </td>
                                <td className="px-4 py-2 border-b">{job.applicationDeadline}</td>
                                <td className="px-4 py-2 border-b">{job.company}</td>
                                <td className="px-4 py-2 border-b">{job.hr_name}</td>
                                <td className="px-4 py-2 border-b">{job.status}</td>
                                <td className="px-4 py-2 border-b"><Link to={`/viewApplication/${job._id}`}><button className="btn btn-error">view</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No jobs found.</p>
            )}
        </div>
    );
};

export default MyPostedJobs;
