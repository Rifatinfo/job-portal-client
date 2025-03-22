import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const {_id} = job;
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
                <div className="flex items-center gap-4 mb-6">
                    <img src={job.company_logo} alt={job.company} className="w-16 h-16 rounded-lg" />
                    <div>
                        <h2 className="text-2xl font-bold">{job.title}</h2>
                        <p className="text-gray-500">📍 {job.location}</p>
                        <p className="text-gray-500">🏢 {job.company}</p>
                    </div>
                </div>
                <p className="text-gray-700 text-lg mb-4">{job.description}</p>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Job Type</h3>
                    <p className="text-gray-600">{job.jobType} • {job.category}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Salary</h3>
                    <p className="text-blue-600 text-lg font-bold">
                        {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {job.requirements.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {job.responsibilities.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Application Deadline</h3>
                    <p className="text-gray-600">📅 {job.applicationDeadline}</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <div>
                        <p className="text-gray-700 text-sm">HR Contact:</p>
                        <p className="text-gray-600 font-semibold">{job.hr_name}</p>
                        <p className="text-blue-500">{job.hr_email}</p>
                    </div>
                    <Link to={`/jobApply/${_id}`}>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;