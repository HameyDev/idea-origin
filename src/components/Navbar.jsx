import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import DropdownLink from "./DropdownLink";
import MobileLink from "./MobileLink";

import GradientButton from "../components/GradientButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 relative bg-gradient-to-r from-slate-950 via-teal-950 to-slate-950 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link to="/" className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
          ✨ IdeaOrigin
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/">Home</NavLink>

          {/* Explore Dropdown (CLICKABLE) */}
          <div className="relative">

            <button onClick={() => setIsExploreOpen(!isExploreOpen)} className="flex items-center gap-1 text-gray-200 hover:text-cyan-400 transition">
              Explore ▾
            </button>

            {isExploreOpen && (
              <div className="absolute top-full mt-3 w-52 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">

                <DropdownLink to="/explore-scientists" onClick={() => setIsExploreOpen(false)}>
                  Scientists
                </DropdownLink>
                <DropdownLink to="/explore-discovery" onClick={() => setIsExploreOpen(false)}>
                  Discoveries
                </DropdownLink>

              </div>
            )}

          </div>

          <NavLink to="/timeline">Timeline</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/auth">Login</NavLink>

          <GradientButton to="/dashboard" className="">
            Dashboard
          </GradientButton>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-gray-200">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl px-6 pb-6 space-y-4 border-t border-white/10 shadow-2xl">

          <MobileLink to="/" setIsOpen={setIsOpen}>Home</MobileLink>

          {/* Mobile Explore */}
          <div>

            <button onClick={() => setIsExploreOpen(!isExploreOpen)} className="w-full flex justify-between items-center text-gray-200 py-2 hover:text-cyan-400">
              Explore
              <span>{isExploreOpen ? "▲" : "▼"}</span>
            </button>

            {isExploreOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <MobileLink to="/explore-scientists" setIsOpen={setIsOpen}>
                  Scientists
                </MobileLink>
                <MobileLink to="/explore-discovery" setIsOpen={setIsOpen}>
                  Discoveries
                </MobileLink>
              </div>
            )}
          </div>

          <MobileLink to="/timeline" setIsOpen={setIsOpen}>Timeline</MobileLink>
          <MobileLink to="/about" setIsOpen={setIsOpen}>About</MobileLink>
          <MobileLink to="/auth" setIsOpen={setIsOpen}>Login</MobileLink>
          <MobileLink to="/dashboard" setIsOpen={setIsOpen}>Dashboard</MobileLink>
        </div>
      )}
    </nav>
  );
}








