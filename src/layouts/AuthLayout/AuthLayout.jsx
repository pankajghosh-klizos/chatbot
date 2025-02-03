import { Link, Outlet } from "react-router";
import { Images } from "@/constants/images";

const AuthLayout = () => {
  return (
    <div className="w-100 vh-100 p-3 d-flex gap-3">
      <div className="w-100 p-3">
        <div className="w-100 h-100 max-w-md mx-auto d-flex flex-column justify-content-between">
          <Link to="/">
            <img src={Images.compbotLogo} alt="compbot" />
          </Link>

          <Outlet />

          <p className="text-center text-md-start">
            © 2024 Compbot Privacy Policy Support
          </p>
        </div>
      </div>

      <div className="d-none d-md-block w-100 overflow-hidden rounded-5">
        <img src={Images.authBanner} alt="banner" />
      </div>
    </div>
  );
};

export default AuthLayout;
