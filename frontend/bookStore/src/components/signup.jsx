
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-950">
      {/* Container Card */}
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">

        {/* Close/Home Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500"
        >
          ✕
        </Link>

        <h3 className="font-bold text-3xl text-center text-black dark:text-white">
          Signup
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post" action="/signup">
          {/* Username Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-none dark:bg-slate-800 dark:text-white dark:border-gray-700 transition-all"
              {...register("userName", { required: true })}
            />
            {errors.userName && <span className="text-sm text-red-500">User Name is required</span>}

          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-none dark:bg-slate-800 dark:text-white dark:border-gray-700 transition-all"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">Email is required</span>}

          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-none dark:bg-slate-800 dark:text-white dark:border-gray-700 transition-all"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2.5 rounded-lg hover:bg-orange-600 active:scale-95 transition-all duration-200 shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline text-orange-600 hover:text-orange-800 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;