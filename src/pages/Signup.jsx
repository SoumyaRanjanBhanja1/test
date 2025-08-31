import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Input from "../components/Input";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: ""});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/signup", form);
      toast.success("Signup successful! You can login now.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-4">
      {/* Floating Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8"
      >
        {/* Neon Glow Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-500/40 via-pink-400/30 to-purple-600/30 blur-2xl rounded-3xl" />

        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Full Name"
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
            placeholder="John Doe"
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            placeholder="********"
          />
          

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-lg font-semibold text-white tracking-wide transition-all duration-300 
              ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/40"}
            `}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="text-center mt-6 text-gray-200">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
