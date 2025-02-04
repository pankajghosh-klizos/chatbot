import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";

const Dropdown = ({ title = "Dropdown", children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="d-flex flex-column">
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`btn p-2 px-3 w-100 d-flex align-items-center justify-content-between border-0 ${
          isMenuOpen ? "text-black opacity-100" : "text-secondary opacity-75"
        }`}
      >
        <span>{title}</span>

        {isMenuOpen ? <FaChevronUp /> : <FaChevronRight />}
      </button>

      {isMenuOpen && children && <div className="px-2">{children}</div>}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
