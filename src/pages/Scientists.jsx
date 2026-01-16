import { useState } from "react";
import { Link } from "react-router-dom";
import { scientists } from "../data/Scientists";

export default function Scientists() {
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = ["all", "Physics", "Chemistry", "Biology", "Astronomy", "Engineering", "Computer Science", "Cosmology", "Microbiology", "Medicine", "Genetics"];


  const filtered = scientists.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" ? true : s.field === category;
    return matchSearch && matchCategory;
  });


  const itemsPerPage = 8; 
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return (
    <div className="bg-slate-950 text-white min-h-screen px-6 py-10">

      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold">All Scientists</h1>
        <p className="text-gray-400 mt-2">
          Discover the great minds of history.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">

        
        <input
          type="text"
          placeholder="Search scientist..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); setPage(1); }}
          className="p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Fields" : c}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSearch("");
            setCategory("all");
            setPage(1);
          }}
          className="p-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
        >
          Clear Filters
        </button>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {paginated.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No scientists found.
          </p>
        )}

        {paginated.map((sci) => (
          <Link
            key={sci.id}
            to={`/scientist/${sci.id}`}
            className="bg-slate-900 rounded-2xl p-6 hover:scale-105 transition transform"
          >
            <div className="h-40 bg-slate-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={sci.image}
                alt={sci.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold">{sci.name}</h3>
            <p className="text-gray-400 mt-1">{sci.field}</p>
          </Link>
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
    </div>
  );
}
