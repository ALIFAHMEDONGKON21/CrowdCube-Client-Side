import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import auth from "./Componets/Router/pages/Firebase/Firebase.config";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter!");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) return;

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        return updateProfile(user, {
          displayName: formData.name,
          photoURL: formData.photoURL,
        });
      })
      .then(() => {
        toast.success("Registration successful!", {
          duration: 5000,
          position: "top-center",
        });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(`Registration Failed: ${err.message}`, {
          duration: 4000,
          position: "top-center",
        });
      });
  };

  return (
    <div className="w-[90%] md:w-[90%] lg:w-[100%] mx-auto dark:bg-gray-800">
      <div className="flex justify-center items-center rounded-2xl bg-base-200 p-7 mb-5">
        <div className="card bg-base-100 w-full p-3 lg:w-full max-w-lg shrink-0 rounded-none lg:p-10">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account
          </h2>
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                value={formData.photoURL}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
