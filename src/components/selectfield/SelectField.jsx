const SelectField = ({ name, label }) => {
  return (
    <div className="mb-8">
      <label className="text-white text-sm" htmlFor={name}>
        {label}
      </label>

      <select className="w-full border-b-2 b bg-gray-200 py-2 text-sm text-black  h-10 outline-none rounded-xl" defaultValue="enquiry" name={name} required>
        <option value="">Choose your enquiry</option>
        <option value="freeLance" className="py-2">
          Freelance Work
        </option>
        <option value="job vacancy" className="py-2">
          Job Vacancy
        </option>
        <option value="network" className="py-2">
          Networking
        </option>
      </select>
    </div>
  );
};

export default SelectField;
