import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo / Name */}
        <div className="text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
          ✨ IdeaOrigin
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/explore" className="hover:text-cyan-400 transition">Explore</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} IdeaOrigin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
