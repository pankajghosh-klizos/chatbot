import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { RiLoader4Line } from "react-icons/ri";

const Loader = ({ size = 20, className = "text-white" }) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
        transition: { repeat: Infinity, duration: 1, ease: "linear" },
      }}
      className={`d-flex align-items-center justify-content-center overflow-hidden ${className}`}
    >
      <RiLoader4Line size={size} />
    </motion.div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Loader;
