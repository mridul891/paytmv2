const Balance = ({ label }) => {
  return (
    <div className="font-mono font-bold text-3xl pt-6 px-10">
      <p>Your Balance : Rs {label}</p>
    </div>
  );
};

export default Balance;
