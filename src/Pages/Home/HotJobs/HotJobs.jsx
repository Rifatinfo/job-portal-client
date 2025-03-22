import { useEffect, useState } from "react";
import JobCart from "./JobCart";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
            {
                jobs.map(job => <JobCart key={job._id} job={job}/>)
            }
            </div>
        </div>
    );
};

export default HotJobs;