import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-800 w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          {isLogin
            ? "Login to continue your journey"
            : "Join Discovery Stories today"}
        </p>

        {/* FORM */}
        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">

          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-1 text-sm sm:text-base">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 sm:mt-6 bg-indigo-600 hover:bg-indigo-700 transition py-3 sm:py-4 rounded-xl text-white font-semibold text-sm sm:text-base"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* TOGGLE */}
        <p className="text-center text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
