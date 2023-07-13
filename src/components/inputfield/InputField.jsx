const InputField = ({ label, name, type, value }) => {
  return (
    <div className="mb-8">
      <label className="text-white text-sm mb-4" htmlFor={name}>
        {label}
      </label>
      <input className="border-b-2 ouline-none text-gray-700 w-full bg-gray-200 h-10 px-2 rounded-none" type={type} value={value} name={name} required />
    </div>
  );
};

export default InputField;
