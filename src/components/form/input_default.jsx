const InputDefault = ({ id, name, type, value, setValue, handleChange, placeholder, errorMessage }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold">{name}</label>
      {handleChange ? 
        // Menggunakan onChange jika handleChange ada
        <input
          type={type ?? "text"}
          className="outline-none border-2 px-3 py-2 focus:border-blue-500 rounded-md w-full"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        /> : 
        // Menggunakan setValue jika handleChange tidak ada
        <input
          type={type ?? "text"}
          className="outline-none border-2 px-3 py-2 focus:border-blue-500 rounded-md w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />}
      {errorMessage && <div className="text-red-500 text-sm font-semibold">{errorMessage}</div>}
    </div>
  );
};

export default InputDefault;