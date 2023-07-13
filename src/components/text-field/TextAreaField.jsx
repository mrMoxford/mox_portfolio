const TextAreaField = ({ name, label }) => {
  return (
    <div>
      <label className="text-white text-sm" htmlFor={name}>
        {label}
      </label>
      <textarea name={name} rows="5" required className="w-full border-b-2 outline-none bg-gray-200 text-black rounded-none"></textarea>
    </div>
  );
};

export default TextAreaField;
