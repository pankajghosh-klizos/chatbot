import PropTypes from "prop-types";
import { forwardRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = forwardRef(function Search(
  { placeholder = "Search", className = "" },
  ref
) {
  return (
    <form
      ref={ref}
      className={`border rounded-3 bg-white d-flex gap-2 ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-100 border-0 outline-none"
      />

      <button
        type="button"
        className="btn p-2 d-flex align-items-center justify-content-center text-secondary"
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
});

export default Search;

Search.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
