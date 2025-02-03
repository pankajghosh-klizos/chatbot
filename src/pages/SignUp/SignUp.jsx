import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { LuUser, LuBuilding2 } from "react-icons/lu";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Input, Loader } from "@/components";
import store from "store2";
import { registerService } from "@/services/api";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedCompanySize, setSelectedCompanySize] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const signupStep = queryParams.get("signup_step");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const newUser = store.session("newUser");
    navigate(`/signup?signup_step=${newUser ? "company" : "user"}`, {
      replace: true,
    });
  }, [navigate]);

  const storeUserDetailsForNextStep = async (formData) => {
    setLoading(true);
    try {
      await store.session("newUser", formData);
      navigate(`/signup?signup_step=company`, {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const useDetails = store.session("newUser");

      const res = await registerService({
        ...useDetails,
        company_size: selectedCompanySize,
      });
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column gap-4">
      <h2 className="text-black">Sign up</h2>

      {signupStep === "user" && (
        <>
          <div className="d-flex flex-column flex-md-row gap-3">
            <Button
              variant="outline-dark"
              size="lg"
              className="w-100 d-flex align-items-center gap-2 justify-content-center border-2 border-secondary-subtle"
            >
              <FcGoogle size={24} />
              <span className="fw-medium">Google</span>
            </Button>

            <Button
              variant="outline-dark"
              size="lg"
              className="w-100 d-flex align-items-center gap-2 justify-content-center border-2 border-secondary-subtle"
            >
              <FaLinkedin size={24} color="#0a66c2" />
              <span className="fw-medium">Linkedin</span>
            </Button>
          </div>

          <p className="separator">or continue with email</p>

          <form
            onSubmit={handleSubmit(storeUserDetailsForNextStep)}
            className="d-flex flex-column gap-4"
          >
            <div className="d-flex flex-column gap-2">
              <Input
                type="text"
                icon={<LuUser size={24} />}
                placeholder="Your full name"
                className="px-3"
                disabled={loading}
                errorMessage={errors?.name?.message}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <Input
                type="email"
                icon={<HiOutlineMail size={24} />}
                placeholder="Work Email"
                className="px-3"
                disabled={loading}
                errorMessage={errors?.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <Input
                type="text"
                icon={<LuBuilding2 size={24} />}
                placeholder="Your company name"
                className="px-3"
                disabled={loading}
                errorMessage={errors?.company?.message}
                {...register("company", {
                  required: "Company is required",
                })}
              />

              <Input
                type="password"
                icon={<HiOutlineLockClosed size={24} />}
                placeholder="Password"
                className="px-3"
                disabled={loading}
                errorMessage={errors?.password?.message}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <Loader size={30} />
              ) : (
                <span className="text-white">Continue</span>
              )}
            </Button>
          </form>
        </>
      )}

      {signupStep === "company" && (
        <div className="d-flex flex-column gap-4">
          <h5>Your company size</h5>

          <div className="d-grid grid-cols-2 gap-2">
            {["1-5", "6-10", "11-49", "50-199", "200-999", "1000+"].map(
              (companySize) => (
                <Button
                  key={companySize}
                  variant={
                    selectedCompanySize === companySize
                      ? "dark"
                      : "outline-dark"
                  }
                  size="lg"
                  onClick={() => setSelectedCompanySize(companySize)}
                  className="w-100 d-flex align-items-center gap-2 justify-content-center border-2 border-secondary-subtle"
                  disabled={loading}
                >
                  <span className="fw-medium">{companySize}</span>
                </Button>
              )
            )}
          </div>

          <p>
            By proceeding you acknowledge that you have read, understood and
            agree to our{" "}
            <Link className="text-secondary">Terms and Conditions</Link>.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={handleRegister}
            className="w-100 d-flex align-items-center justify-content-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <Loader size={30} />
            ) : (
              <span className="text-white">Sign up</span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
