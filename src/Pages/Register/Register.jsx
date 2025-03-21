import Lottie from "lottie-react";
import lottieData from "../../assets/Animation - 1742493512759.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
  
  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email , password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message)
    })
  };
  
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:text-left">
            <p className="py-6">
              <Lottie 
                className="lg:w-[500px]" 
                animationData={lottieData} 
                loop={true} 
                aria-label="Registration animation" 
              />
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <fieldset className="fieldset">
                  <legend className="text-lg text-center font-semibold">Register</legend>
                  <label className="fieldset-label">Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    className="input" 
                    placeholder="Email" 
                    required 
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
