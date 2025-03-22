import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate() 
    const handleJobApplyForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const cover = form.cover.value;
        console.log(linkedIn, gitHub, resume, name, email, phone, cover);
        

        const jobApplication = {
            job_id: id,
            linkedIn,
            gitHub,
            resume,
            name,
            email,
            phone,
            cover
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => 
            {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: "Application Submitted",
                        icon: "success",
                        draggable: true
                      });
                      navigate("/MyApplications");
                }
            }
            )

    }
    return (
        <div>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
                <h2 className="text-2xl font-bold text-center mb-4">Apply for Job</h2>
                <form onSubmit={handleJobApplyForm} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input name="name" type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your full name" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input name="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Phone Number</label>
                        <input name="phone" type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your phone number" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">LinkedIn URL</label>
                        <input name="linkedIn" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your LinkedIn profile URL" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">GitHub URL</label>
                        <input name="gitHub" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your GitHub profile URL" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Resume URL</label>
                        <input name="resume" type="url" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter the link to your resume" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Resume (PDF only)</label>
                        <input type="file" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" accept=".pdf" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Cover Letter</label>
                        <textarea name="cover" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Write a short cover letter" rows="4"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-600">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;