import { useState } from "react";
import { Link } from "react-router-dom";
import { discoveries } from "../data/Discoveries";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [yearRange, setYearRange] = useState("all");
  const [page, setPage] = useState(1);

  const ranges = {
    all: [0, 3000],
    "1600-1700": [1600, 1700],
    "1701-1800": [1701, 1800],
    "1801-1900": [1801, 1900],
    "1901-1950": [1901, 1950],
    "1951-2000": [1951, 2000],
  };

  const [minYear, maxYear] = ranges[yearRange];

  const filtered = discoveries.filter((d) => {
    const matchSearch =
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.scientist.toLowerCase().includes(search.toLowerCase());

    const matchYear = d.year >= minYear && d.year <= maxYear;

    return matchSearch && matchYear;
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen">
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          Explore Discoveries
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Dive into the greatest ideas in science and learn the stories behind
          them.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search title or scientist..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <select
          value={yearRange}
          onChange={(e) => {
            setYearRange(e.target.value);
            setPage(1);
          }}
          className="p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="all">All Years</option>
          <option value="1600-1700">1600 – 1700</option>
          <option value="1701-1800">1701 – 1800</option>
          <option value="1801-1900">1801 – 1900</option>
          <option value="1901-1950">1901 – 1950</option>
          <option value="1951-2000">1951 – 2000</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setYearRange("all");
            setPage(1);
          }}
          className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 font-medium hover:scale-105 transition"
        >
          Clear Filters
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginated.length === 0 && (
            <p className="col-span-full text-center text-gray-400">
              No discoveries found.
            </p>
          )}

          {paginated.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 rounded-2xl p-5 flex flex-col justify-between shadow-xl border border-white/10 hover:scale-105 transition"
            >
              <div>
                <div className="h-36 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-cyan-400 text-sm">
                  {item.scientist} • {item.year}
                </p>
                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
              </div>

              <Link
                to={`/discovery/${item.id}`}
                className="mt-4 text-cyan-400 hover:text-emerald-400 text-sm font-medium"
              >
                Read Story →
              </Link>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-16">
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
      </section>
    </div>
  );
}
