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
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HEADER */}
      <section className="py-16 text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Discovery Timeline
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Walk through history and see how great ideas shaped our world.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 sm:px-0 pb-20">
        <div className="relative border-l border-slate-700 ml-2 sm:ml-4">

          {timelineData.map((item) => (
            <div key={item.id} className="mb-12 ml-0 sm:ml-6 relative">
              
              {/* DOT */}
              <div className="absolute -left-3 sm:-left-6 top-2 w-3 sm:w-4 h-3 sm:h-4 bg-indigo-600 rounded-full"></div>

              {/* CARD */}
              <div className="bg-slate-900 rounded-xl p-4 sm:p-6 shadow-md hover:bg-slate-800 transition">
                <span className="text-indigo-400 font-semibold text-sm sm:text-base">
                  {item.year}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                  {item.scientist}
                </p>

                <p className="text-gray-300 text-sm sm:text-base mt-3">
                  {item.desc}
                </p>

                <Link
                  to={`/discovery/${item.id}`}
                  className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 text-sm sm:text-base"
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
