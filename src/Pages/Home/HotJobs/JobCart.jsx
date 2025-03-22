
const JobCart = ({job}) => {
    console.log(job);
    // const {applicationDeadline,category, company,company_logo,description,hr_email,hr_name,jobType,location, requirements,responsibilities,salaryRange} = job;
    return (
        <div>
            <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 md:h-[360px]">
      <div className="flex items-center gap-3">
        <img src={job.company_logo} alt={job.company} className="w-12 h-12 rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{job.company}</h3>
          <p className="text-sm text-gray-500">📍 {job.location}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-3 flex-1">{job.title}</h2>
      <p className="text-gray-500 text-sm">⏳ {job.jobType} • 🎯 {job.category}</p>
      <p className="text-gray-600 mt-2 text-sm">{job.description}</p>
      <div className="flex gap-2 mt-3 flex-wrap flex-1">
        {job.requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center flex-1">
        <p className="text-xl font-bold text-blue-600">
          {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
          Apply
        </button>
      </div>
           </div>
        </div>
    );
};

export default JobCart;