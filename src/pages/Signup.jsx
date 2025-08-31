import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Input from "../components/Input";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const navigate=useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/signup", form);
      alert("Signup successful! You can login now.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <Input label="Name" type="text" value={form.name} onChange={handleChange} name="name" />
          <Input label="Email" type="email" value={form.email} onChange={handleChange} name="email" />
          <Input label="Password" type="password" value={form.password} onChange={handleChange} name="password" />
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
