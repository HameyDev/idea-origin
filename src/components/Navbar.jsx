import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🌟 Discovery</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link className="hover:text-yellow-300 transition-colors" to="/">Home</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/explore">Explore</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/timeline">Timeline</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/about">About</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/auth">Login</Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/dashboard">Dashboard</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 text-white px-6 pb-4 space-y-3">
          <Link className="block hover:text-yellow-300 transition-colors" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="block hover:text-yellow-300 transition-colors" to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
          <Link className="block hover:text-yellow-300 transition-colors" to="/timeline" onClick={() => setIsOpen(false)}>Timeline</Link>
          <Link className="block hover:text-yellow-300 transition-colors" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="block hover:text-yellow-300 transition-colors" to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
          <Link className="block hover:text-yellow-300 transition-colors" to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        </div>
      )}
    </nav>
  );
}
