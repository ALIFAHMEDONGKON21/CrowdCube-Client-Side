import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "./Componets/Router/pages/Context";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const { loginWithEmail, googleLogIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogIn();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (error) {
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto ">
      <Toaster />
      <h1 className="text-2xl font-semibold text-center mb-6 text-black">Login</h1>
      <form onSubmit={handleEmailLogin} className="space-y-4">
        <div>
          <label className="block text-sm text-black  font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-black text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
      <div className="text-center my-4">OR</div>
      <button
        onClick={handleGoogleLogin}
        className="w-full py-2 flex items-center justify-center  text-black  border-red-200 rounded-md"
      >
        
        <FcGoogle className=" mr-2 " />
        Login with Google
      </button>
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
