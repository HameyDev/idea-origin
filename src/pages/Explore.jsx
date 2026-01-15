import { Link } from "react-router-dom";

export default function Explore() {
  const discoveries = [
    { id: "relativity", title: "Theory of Relativity", scientist: "Albert Einstein", desc: "A revolutionary idea that changed how we see space and time.", image: "/theory-of-relativity.jpg" },
    { id: "gravity", title: "Law of Gravity", scientist: "Isaac Newton", desc: "The force that governs motion of planets and objects.", image: "/law-of-gravity.jpg" },
    { id: "ac", title: "AC Electricity", scientist: "Nikola Tesla", desc: "The system that powers our modern world.", image: "/ac-electricity.jpeg" },
    { id: "penicillin", title: "Penicillin", scientist: "Alexander Fleming", desc: "The discovery that changed medicine forever.", image: "/theory-of-relativity.jpg" },
    { id: "dna", title: "DNA Structure", scientist: "Watson & Crick", desc: "The code of life explained.", image: "/law-of-gravity.jpg" },
    { id: "radio", title: "Radio Waves", scientist: "Guglielmo Marconi", desc: "Communication without wires.", image: "/ac-electricity.jpeg" },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen">

      {/* HEADER */}
      <section className="py-20 text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          Explore Discoveries
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Dive into the greatest ideas in science and learn the stories behind them.
        </p>
      </section>

      {/* SEARCH */}
      <section className="max-w-4xl mx-auto px-6 sm:px-0 mb-16">
        <input
          type="text"
          placeholder="Search discoveries..."
          className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 shadow-lg"
        />
      </section>

      {/* DISCOVERIES GRID */}
      <section className="max-w-6xl mx-auto px-6 sm:px-0 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {discoveries.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-white/10 hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-300"
            >
              <div>
                <div className="h-40 sm:h-48 w-full rounded-2xl overflow-hidden mb-4 shadow-inner border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3>
                <p className="text-cyan-400 mt-1 text-sm sm:text-base">{item.scientist}</p>
                <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-base">{item.desc}</p>
              </div>

              <Link
                to={`/discovery/${item.id}`}
                className="mt-6 inline-block text-cyan-400 hover:text-emerald-400 font-medium text-sm sm:text-base"
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
