import PropTypes from "prop-types";
import { forwardRef, useState, useId } from "react";
import { Button } from "react-bootstrap";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import "./Input.scss";

const Input = forwardRef(function Input(
  {
    label,
    icon,
    type = "text",
    placeholder,
    errorMessage = null,
    className = null,
    ...props
  },
  ref
) {
  const id = useId();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="position-relative mb-3">
      {label && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}

      <div
        className={`input w-100 rounded-3 overflow-hidden p-2 d-flex align-items-center gap-2 ${
          errorMessage ? "border-danger" : null
        } ${className}`}
      >
        {icon && (
          <span className="text-secondary d-flex align-items-center justify-content-center">
            {icon}
          </span>
        )}

        <input
          id={id}
          ref={ref}
          type={passwordVisible && type === "password" ? "text" : type}
          placeholder={placeholder}
          className="flex-grow-1 outline-none border-0"
          {...props}
        />

        {type === "password" && (
          <Button
            variant="transparent"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="p-0 text-secondary border-0"
          >
            {passwordVisible ? (
              <HiOutlineEye size={24} />
            ) : (
              <HiOutlineEyeOff size={24} />
            )}
          </Button>
        )}
      </div>

      <small
        className={`position-absolute bottom-1 text-danger ${
          !errorMessage ? "invisible" : "visible"
        }`}
      >
        {errorMessage}
      </small>
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
