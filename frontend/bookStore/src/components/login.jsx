import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="relative w-full max-w-md p-8 bg-white dark:bg-slate-900 text-black dark:text-white rounded-lg shadow-lg">
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          ✕
        </Link>

        <h3 className="font-bold text-2xl text-center mb-6">Login</h3>

        {/* Login Form */}
        <form
          className="space-y-4"
          method="post"
          action="/login"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none dark:bg-slate-800 dark:border-gray-600"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none dark:bg-slate-800 dark:border-gray-600"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-sm text-red-500">
                Password is required!
              </span>
            )}
          </div>

          {/* Login Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white rounded-md px-3 py-2 hover:bg-orange-600 transition-colors duration-200"
            >
              Login
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm mt-4">
            Not registered?{" "}
            <Link
              to="/signup"
              className="underline text-orange-500 cursor-pointer hover:text-orange-700"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
