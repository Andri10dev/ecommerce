import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const InputPasswordDefault = ({
  id,
  name,
  type,
  value,
  setValue,
  placeholder,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold">
        {name}
      </label>
      <div className="flex items-center relative">
        <input
          type={showPassword ? "text" : "password"}
          className="outline-none border-2 px-3 py-2 focus:border-blue-500 rounded-md w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-5"
        >
          {showPassword ? (
            <FontAwesomeIcon icon={faEye} className="w-5" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} className="w-5" />
          )}
        </button>
      </div>
      {errorMessage && <div className="text-red-500 text-sm font-semibold">{errorMessage}</div>}
    </div>
  );
};

export default InputPasswordDefault;
