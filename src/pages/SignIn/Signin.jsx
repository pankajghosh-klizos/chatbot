import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { Input, Loader } from "@/components";
import { loginService } from "@/services/api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "@/store/slices/auth.slice";
import store from "store2";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      const res = await loginService(formData);

      if (!res.data.success) {
        return toast.error(res.data.message || "Error while login.");
      }

      store("token", res.data.data.access);
      store.session("user", res.data.data.user);
      dispatch(login(res.data.data.user));
      navigate("/getting-started");
      toast.success(res.data.message || "Login successfully.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column gap-4">
      <h2 className="text-black">Sign in to your Account</h2>

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
        onSubmit={handleSubmit(handleLogin)}
        className="d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column gap-2">
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

          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" id="rememberMe" disabled={loading} />
              <label htmlFor="rememberMe">Keep me signed in</label>
            </div>

            <Link to="/forgot-password" className="text-secondary">
              Forgot Password?
            </Link>
          </div>
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
            <span className="text-white">Sign in</span>
          )}
        </Button>
      </form>

      <p className="text-center">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-black fw-medium">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
