import { useState } from "react";
import { EyeIcon } from "./icons";

const PasswordInput = ({ disabled, error, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="input-wrapper">
      <div className={`input-container ${disabled ? "disabled" : ""}`}>
        <input
          type={show ? "text" : "password"}
          disabled={disabled}
          {...props}
        />

        <button type="button" onClick={() => setShow(!show)}>
          <EyeIcon />
        </button>
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default PasswordInput;
