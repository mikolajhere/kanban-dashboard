import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

interface Props {
  username: string;
  password: string;
}

export const Login = () => {
  const [inputs, setInputs] = useState<Props>({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await login(inputs);
      toast.success("You have successfully logged in!");
      navigate("/");
    } catch (err: any) {
      setError(err.response.data);
    }
  };
  return (
    <>
      <div className="register min-h-screen flex items-center flex-col justify-center px-3">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login
        </h1>
        <form className="flex flex-col gap-4 bg-white shadow my-8 p-8 sm:px-16 rounded max-w-md w-full">
          <div>
            <label
              className="block text-sm font-medium text-slate-700 mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              required
              id="username"
              type="text"
              name="username"
              className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-slate-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              name="password"
              className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3"
            type="submit"
          >
            Login
          </button>
          {err && <p className="text-sm text-center text-red-600">{err} 👮🏻‍♂️</p>}
          <span className="text-sm text-center">
            Don't you have an account?{" "}
            <Link to="/register" className="text-sm text-sky-500 font-medium">
              Register
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};
