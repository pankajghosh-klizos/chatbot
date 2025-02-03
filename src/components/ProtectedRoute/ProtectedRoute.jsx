import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  const getCurrentUser = () => {
    setLoading(false);
  };

  useEffect(() => {
    getCurrentUser();

    if (!loading) {
      if (authentication && authStatus !== authentication) {
        navigate("/", { replace: true });
      } else if (!authentication && authStatus !== authentication) {
        navigate("/getting-started", { replace: true });
      }
    }
  }, [authStatus, authentication, navigate, loading]);

  if (loading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center overflow-hidden">
        <Loader size={50} className="text-primary" />
      </div>
    );
  }

  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};

export default ProtectedRoute;
