import { Button } from "react-bootstrap";
import { FaHeadset } from "react-icons/fa6";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="p-2 px-5 rounded-3 bg-primary-subtle text-black d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <p className="fw-medium">
          You have{" "}
          <span className="fs-5 fw-semibold text-primary">14 days left</span> in
          your Essential trial
        </p>

        <Button variant="dark" size="sm" className="px-3">
          Buy Plan
        </Button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <FaHeadset color="#329932" size={18} />

        <p className="fw-medium">
          Need help onboarding?{" "}
          <Link className="text-decoration-none">Talk to Sales</Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
