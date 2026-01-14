import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white">

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight">
          Every Discovery <br /> Has a Story
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
          Explore the human side of science — the struggles, failures,
          and breakthroughs behind the greatest ideas in history.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/explore"
            className="px-6 py-3 bg-indigo-600 rounded-xl text-white font-semibold hover:bg-indigo-700 transition"
          >
            Explore Stories
          </Link>
          <Link
            to="/timeline"
            className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-white hover:text-black transition"
          >
            View Timeline
          </Link>
        </div>
      </section>

      {/* FEATURED SCIENTISTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Featured Scientists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: "einstein", name: "Albert Einstein", line: "Changed how we see time." },
            { id: "tesla", name: "Nikola Tesla", line: "Brought electricity to life." },
            { id: "newton", name: "Isaac Newton", line: "Discovered the laws of motion." },
          ].map((sci) => (
            <Link
              key={sci.id}
              to={`/scientist/${sci.id}`}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition transform"
            >
              <div className="h-40 sm:h-48 bg-slate-700 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                Image
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{sci.name}</h3>
              <p className="text-gray-400 mt-2">{sci.line}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          How Discovery Stories Works
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6">
          {[
            { step: "01", text: "Choose a discovery" },
            { step: "02", text: "Read the story" },
            { step: "03", text: "Learn the impact" },
            { step: "04", text: "Save your favorites" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-slate-800 p-6 rounded-2xl text-center"
            >
              <div className="text-indigo-500 text-3xl font-bold">
                {item.step}
              </div>
              <p className="mt-3 text-gray-300 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR DISCOVERIES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Popular Discoveries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { id: "relativity", title: "Theory of Relativity", by: "Einstein" },
            { id: "gravity", title: "Law of Gravity", by: "Newton" },
            { id: "ac", title: "AC Electricity", by: "Tesla" },
          ].map((d) => (
            <div
              key={d.id}
              className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{d.title}</h3>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">by {d.by}</p>
              </div>

              <Link
                to={`/discovery/${d.id}`}
                className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 text-sm sm:text-base"
              >
                Read Story →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-indigo-600 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Start Your Journey Through Ideas
        </h2>
        <p className="mt-4 text-indigo-100 text-sm sm:text-base">
          Discover the minds that shaped our world.
        </p>

        <Link
          to="/explore"
          className="mt-8 inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition text-sm sm:text-base"
        >
          Start Exploring
        </Link>
      </section>

    </div>
  );
}
