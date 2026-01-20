import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { discoveries } from "../data/Discoveries";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineFilter } from "react-icons/hi";

/* =======================
   SCIENCE FIELDS
======================= */
const fields = [
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

/* =======================
   YEAR RANGES
======================= */
const yearRanges = {
  all: [0, 3000],
  "1500-1700": [1500, 1700],
  "1701-1800": [1701, 1800],
  "1801-1900": [1801, 1900],
  "1901-1950": [1901, 1950],
  "1951-2000": [1951, 2000],
};

export default function Explore() {
  const [search, setSearch] = useState("");
  const [selectedFields, setSelectedFields] = useState([]);
  const [yearRange, setYearRange] = useState("all");
  const [page, setPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [minYear, maxYear] = yearRanges[yearRange];

  /* =======================
     FIELD TOGGLE
  ======================= */
  const toggleField = (field) => {
    setPage(1);
    setSelectedFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  /* =======================
     FILTER LOGIC
  ======================= */
  const filtered = discoveries.filter((d) => {
    const matchSearch =
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.scientist.toLowerCase().includes(search.toLowerCase());

    const matchField =
      selectedFields.length === 0
        ? true
        : selectedFields.includes(d.field);

    const matchYear = d.year >= minYear && d.year <= maxYear;

    return matchSearch && matchField && matchYear;
  });

  /* =======================
     PAGINATION
  ======================= */
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);


  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen px-4 lg:px-10 py-10">

      {/* ================= HEADER ================= */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          Explore Discoveries
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Browse scientific discoveries by field and historical period.
        </p>
      </motion.section>

      {/* ================= SEARCH ================= */}
      <div className="flex gap-4 max-w-7xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by discovery or scientist..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="flex-1 p-4 rounded-xl bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          className="lg:hidden p-4 bg-slate-900 rounded-xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <HiOutlineFilter className="w-6 h-6" />
        </button>
      </div>

      <div className="flex gap-8 max-w-7xl mx-auto">

        {/* ================= SIDEBAR (DESKTOP) ================= */}
        <aside className="hidden lg:block w-72 bg-slate-900/80 p-6 rounded-2xl h-fit sticky top-10">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <p className="text-sm text-gray-400 mb-2">Fields</p>
          <div className="space-y-2 mb-6">
            {fields.map((f) => (
              <label key={f} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedFields.includes(f)}
                  onChange={() => toggleField(f)}
                  className="accent-cyan-400"
                />
                {f}
              </label>
            ))}
          </div>

          <label className="block mb-6">
            <span className="text-sm text-gray-400">Year</span>
            <select
              value={yearRange}
              onChange={(e) => {
                setYearRange(e.target.value);
                setPage(1);
              }}
              className="w-full mt-1 p-2 rounded-xl bg-slate-800"
            >
              <option value="all">All</option>
              {Object.keys(yearRanges)
                .filter((y) => y !== "all")
                .map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
            </select>
          </label>

          <button
            onClick={() => {
              setSearch("");
              setSelectedFields([]);
              setYearRange("all");
              setPage(1);
            }}
            className="w-full p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700"
          >
            Clear Filters
          </button>
        </aside>

        {/* ================= GRID ================= */}
        <main className="flex-1">

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {paginated.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-900/80 rounded-2xl p-5 shadow-xl border border-white/10
                             h-[360px] flex flex-col justify-between"
                >
                  {/* IMAGE */}
                  <div className="h-[140px] min-h-[140px] rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-lg font-bold line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-cyan-400 text-sm">
                      {item.scientist} • {item.year}
                    </p>

                    <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* LINK */}
                  <Link
                    to={`/discovery/${item.id}`}
                    className="text-cyan-400 hover:text-emerald-400 text-sm font-medium"
                  >
                    Read Story →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-6 mt-16">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-6 py-2 rounded-xl border disabled:opacity-40"
              >
                Prev
              </button>

              <span className="text-gray-400">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-6 py-2 rounded-xl border disabled:opacity-40"
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
