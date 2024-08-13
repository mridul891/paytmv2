const InputBox = ({ label, placeholder }) => {
  return (
    <div>
      <div className="text-lg font-semibold text-left py-2">
        <label htmlFor={label}>{label}</label>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
};

export default InputBox;
