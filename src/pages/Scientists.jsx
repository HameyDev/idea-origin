import { useState } from "react";
import { Link } from "react-router-dom";
import { scientists } from "../data/Scientists";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineFilter, HiX } from "react-icons/hi"; // Filter icon

const scienceFields = [
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "Astronomy",
  "Cosmology",
  "Computer Science",
  "Artificial Intelligence",
  "Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Materials Science",
  "Medicine",
  "Neuroscience",
  "Psychology",
  "Environmental Science",
  "Earth Science",
  "Energy Science",
  "Nuclear Science",
  "Particle Physics",
  "Quantum Science",
  "Space Exploration",
];

export default function Scientists() {
  const [search, setSearch] = useState("");
  const [selectedFields, setSelectedFields] = useState([]);
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerPage = 8;

  const handleFieldCheck = (e) => {
    const value = e.target.value;
    setPage(1);
    setSelectedFields((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  const filtered = scientists.filter((sci) => {
    const matchSearch = sci.name.toLowerCase().includes(search.toLowerCase());
    const matchField =
      selectedFields.length === 0 ? true : selectedFields.includes(sci.field);
    return matchSearch && matchField;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="bg-slate-950 text-white min-h-screen px-4 sm:px-6 lg:px-10 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center lg:text-left"
        >
          All Scientists
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 mt-2 text-center lg:text-left"
        >
          Discover the great minds of history.
        </motion.p>
      </div>

      {/* Search + Filter Icon (Mobile) */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search scientist..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="flex-1 p-4 rounded-xl bg-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Filter Icon for Mobile */}
        <button
          className="lg:hidden p-4 bg-slate-900 rounded-xl hover:bg-slate-800 transition"
          onClick={() => setSidebarOpen(true)}
        >
          <HiOutlineFilter className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex gap-8 max-w-7xl mx-auto">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-slate-900/80 p-6 rounded-2xl sticky top-10 h-fit">
          <h2 className="font-bold text-xl mb-4">Filter by Field</h2>
          {scienceFields.map((field) => (
            <label key={field} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                value={field}
                checked={selectedFields.includes(field)}
                onChange={handleFieldCheck}
                className="accent-cyan-400"
              />
              <span>{field}</span>
            </label>
          ))}
          <button
            onClick={() => {
              setSelectedFields([]);
              setSearch("");
              setPage(1);
            }}
            className="mt-4 w-full p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
          >
            Clear Filters
          </button>
        </aside>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900/95 p-6 overflow-y-auto"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="mb-4 p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition"
              >
                <HiX className="w-6 h-6 text-white" />
              </button>

              <h2 className="font-bold text-xl mb-4">Filter by Field</h2>
              {scienceFields.map((field) => (
                <label key={field} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    value={field}
                    checked={selectedFields.includes(field)}
                    onChange={handleFieldCheck}
                    className="accent-cyan-400"
                  />
                  <span>{field}</span>
                </label>
              ))}

              <button
                onClick={() => {
                  setSelectedFields([]);
                  setSearch("");
                  setPage(1);
                  setSidebarOpen(false);
                }}
                className="mt-4 w-full p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Grid */}
        <main className="flex-1">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 min-h-[800px] items-start"
          >
            <AnimatePresence mode="wait">
              {paginated.length === 0 && (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full text-center text-gray-400 mt-10"
                >
                  No scientists found.
                </motion.p>
              )}

              {paginated.map((sci) => (
                <motion.div
                  key={sci.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900 rounded-2xl p-5 cursor-pointer
             hover:shadow-[0_0_25px_cyan] hover:shadow-cyan-400/70
             transition-all duration-300 group"
                >
                  <Link to={`/scientist/${sci.id}`}>
                    <div className="h-60 rounded-xl mb-4 overflow-hidden ">
                      <img
                        src={sci.image}
                        alt={sci.name}
                        className="h-full w-full object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-all duration-300">
                      {sci.name}
                    </h3>
                    <p className="text-gray-400 mt-1 transition-all duration-300">
                      {sci.field}
                    </p>
                  </Link>
                </motion.div>

              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-6 py-2 rounded-xl border border-white/30 disabled:opacity-40 hover:bg-white hover:text-black transition"
              >
                Prev
              </button>
              <span className="text-gray-300">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-6 py-2 rounded-xl border border-white/30 disabled:opacity-40 hover:bg-white hover:text-black transition"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
