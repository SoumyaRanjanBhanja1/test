const Input = ({ label, type, value, onChange,name }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default Input;
