import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Input from "../components/Input";


const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate=useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", form);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-600">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input label="Email" type="email" value={form.email} onChange={handleChange} name="email" />
          <Input label="Password" type="password" value={form.password} onChange={handleChange} name="password" />
          <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account? <Link to="/" className="text-pink-600 font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
