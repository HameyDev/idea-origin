import { Link } from "react-router-dom";

export default function Timeline() {
  const timelineData = [
    { year: "1687", title: "Law of Gravity", scientist: "Isaac Newton", id: "gravity", desc: "Newton publishes Principia, defining gravity and motion." },
    { year: "1890", title: "AC Electricity", scientist: "Nikola Tesla", id: "ac", desc: "Tesla develops AC power systems for modern electricity." },
    { year: "1905", title: "Theory of Relativity", scientist: "Albert Einstein", id: "relativity", desc: "Einstein changes how we understand space and time." },
    { year: "1928", title: "Penicillin", scientist: "Alexander Fleming", id: "penicillin", desc: "Discovery of the first true antibiotic." },
    { year: "1953", title: "DNA Structure", scientist: "Watson & Crick", id: "dna", desc: "Reveals the code of life." },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen">

      {/* HEADER */}
      <section className="py-20 text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Discovery Timeline
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Walk through history and explore the breakthroughs that shaped our world.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-0 pb-32 relative">
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-6">

          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className="mb-16 relative flex flex-col sm:flex-row items-start sm:items-center justify-start"
            >

              {/* Dot */}
              <div className="absolute -left-5 sm:-left-6 top-0 w-5 h-5 bg-cyan-500 rounded-full shadow-lg animate-pulse"></div>

              {/* Card */}
              <div
                className={`bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300
                  w-full sm:min-w-[280px] sm:flex-1
                  ${index % 2 === 0 ? "sm:ml-8" : "sm:ml-12 sm:translate-x-6"}`}
              >
                <span className="text-cyan-400 font-semibold text-sm sm:text-base">
                  {item.year}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-1">
                  {item.scientist}
                </p>

                <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  to={`/discovery/${item.id}`}
                  className="inline-block mt-5 text-cyan-400 hover:text-emerald-400 font-medium transition-colors"
                >
                  Read Story →
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
