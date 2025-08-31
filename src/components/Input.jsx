const Input = ({ label, type, value, onChange, name, placeholder }) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="peer w-full px-4 py-3 bg-white/10 text-white placeholder-transparent border border-white/20 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/50 backdrop-blur-md transition-all"
      />
      <label
        className="absolute left-4 -top-2 text-xs text-pink-300 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-pink-300 bg-indigo-900/60 px-1 rounded"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
