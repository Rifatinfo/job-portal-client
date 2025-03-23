import Swal from "sweetalert2";


const AddJobs = () => {
    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { salaryMax, salaryMin, ...newJob } = initialData;
        console.log(newJob);
        newJob.salaryRange = { salaryMax, salaryMin };
        console.log(newJob);
        newJob.requirements = newJob.requirements.split('\n');
        console.log(newJob);
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job has been added",
                        icon: "success",
                        draggable: true
                    });
                }
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    return (
        <div>
            <form onSubmit={handleAddJob} className="space-y-4 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div>
                    <label className="block text-sm font-medium">Job Title</label>
                    <input type="text" name="title" defaultValue="Software Engineer"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Location</label>
                    <input type="text" name="location" defaultValue="Halishohor, Chittagong"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Job Type</label>
                    <select name="jobType" defaultValue="Hybrid"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <input type="text" name="category" defaultValue="Engineering"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Salary Range (BDT)</label>
                    <div className="flex space-x-2">
                        <input type="number" name="salaryMin" defaultValue={40000}
                            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="number" name="salaryMax" defaultValue={60000}
                            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Application Deadline</label>
                    <input type="date" name="applicationDeadline" defaultValue="2024-12-31"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea name="description" defaultValue="We are seeking a skilled Software Engineer to join our dynamic team."
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Requirements</label>
                    <textarea type="text" name="requirements" placeholder="Each requirement in a new line"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Responsibilities</label>
                    <textarea type="text" name="responsibilities" placeholder="Each Responsibilities in a new line"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Company</label>
                    <input type="text" name="company" defaultValue="Favorite IT"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">HR Name</label>
                    <input type="text" name="hr_name" defaultValue="Farhan Rahman"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">HR Email</label>
                    <input type="email" name="hr_email" defaultValue="hr@techsolutions.com"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Company Logo</label>
                    <input type="text" name="company_logo" defaultValue="https://i.ibb.co/mXD5MNf/facebook.png"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddJobs;