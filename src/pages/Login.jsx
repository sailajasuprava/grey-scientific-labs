import { PiSpinnerGapBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function Login() {
  const { formData, isLoading, handleFormData, handleFormSubmission } =
    useLogin();

  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-8 rounded-md shadow-2xl mt-40">
      <form className="w-full space-y-4" onSubmit={handleFormSubmission}>
        <h1 className="text-3xl font-bold"> Log in to your account</h1>

        <div>
          <label htmlFor="username" className="label">
            username
          </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            name="username"
            required
            className="input"
            value={formData.username}
            onChange={handleFormData}
          />
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
            className="input"
            value={formData.password}
            onChange={handleFormData}
          />
        </div>

        <button type="submit" className="btn mt-2" disabled={isLoading}>
          {isLoading ? (
            <PiSpinnerGapBold
              size={24}
              className="animate-spin mx-auto text-white dark:text-black"
            />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
