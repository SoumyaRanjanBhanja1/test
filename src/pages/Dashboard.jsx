import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, Bell, User, Home, ShoppingCart, BarChart2, Settings } from "lucide-react";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 700 },
  { name: "May", users: 600 },
  { name: "Jun", users: 800 },
];

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: open ? 220 : 80 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-xl border-r border-white/20 p-4 flex flex-col"
      >
        <button onClick={() => setOpen(!open)} className="mb-6 flex items-center">
          <Menu className="text-pink-400" />
        </button>
        <nav className="space-y-4">
          {[{icon: <Home/>, label:"Home"}, {icon:<ShoppingCart/>, label:"Orders"}, {icon:<BarChart2/>, label:"Analytics"}, {icon:<Settings/>, label:"Settings"}].map((item, i)=>(
            <div key={i} className="flex items-center space-x-3 cursor-pointer hover:text-pink-400">
              {item.icon}
              {open && <span>{item.label}</span>}
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/20 p-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Bell className="cursor-pointer hover:text-pink-400" />
            <User className="cursor-pointer hover:text-pink-400" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-pink-400">12,450</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Orders</h3>
            <p className="text-3xl font-bold text-indigo-400">7,890</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-green-400">$120k</p>
          </motion.div>

          {/* Chart */}
          <div className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip contentStyle={{ backgroundColor: "#222", borderRadius: "10px", color: "#fff" }} />
                <Bar dataKey="users" fill="#ec4899" radius={[10,10,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
