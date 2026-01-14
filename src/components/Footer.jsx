export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-white py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        {/* Logo / Name */}
        <div className="text-lg sm:text-xl font-bold text-center md:text-left">
          🌟 Discovery Stories
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base text-center md:text-left">
          <a href="/" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="/explore" className="hover:text-yellow-300 transition-colors">Explore</a>
          <a href="/about" className="hover:text-yellow-300 transition-colors">About</a>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-center md:text-right text-gray-200">
          © 2026 Discovery Stories
        </div>
      </div>
    </footer>
  );
}
