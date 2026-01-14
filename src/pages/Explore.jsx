import { Link } from "react-router-dom";

export default function Explore() {
  const discoveries = [
    { id: "relativity", title: "Theory of Relativity", scientist: "Albert Einstein", desc: "A revolutionary idea that changed how we see space and time." },
    { id: "gravity", title: "Law of Gravity", scientist: "Isaac Newton", desc: "The force that governs motion of planets and objects." },
    { id: "ac", title: "AC Electricity", scientist: "Nikola Tesla", desc: "The system that powers our modern world." },
    { id: "penicillin", title: "Penicillin", scientist: "Alexander Fleming", desc: "The discovery that changed medicine forever." },
    { id: "dna", title: "DNA Structure", scientist: "Watson & Crick", desc: "The code of life explained." },
    { id: "radio", title: "Radio Waves", scientist: "Guglielmo Marconi", desc: "Communication without wires." },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HEADER */}
      <section className="py-16 text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Explore Discoveries
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Dive into the greatest ideas in science and learn the stories behind them.
        </p>
      </section>

      {/* SEARCH */}
      <section className="max-w-4xl mx-auto px-6 sm:px-0 mb-12">
        <input
          type="text"
          placeholder="Search discoveries..."
          className="w-full p-4 sm:p-5 rounded-xl bg-slate-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </section>

      {/* DISCOVERIES GRID */}
      <section className="max-w-6xl mx-auto px-6 sm:px-0 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {discoveries.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:scale-105 transition transform"
            >
              <div>
                <div className="h-36 sm:h-40 bg-slate-800 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                  Image
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="text-indigo-400 mt-1 text-sm sm:text-base">{item.scientist}</p>
                <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base">{item.desc}</p>
              </div>

              <Link
                to={`/discovery/${item.id}`}
                className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base"
              >
                Read Story →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
