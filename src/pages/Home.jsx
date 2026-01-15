import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 md:px-12 lg:px-24"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", }}
      >
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"></div>


        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Every Discovery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Has a Story
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
            Dive into the hidden journeys of scientists — the failures,
            struggles, and moments of brilliance that changed our world forever.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/explore"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Explore Stories
            </Link>
            <Link
              to="/timeline"
              className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Timeline
            </Link>

          </div>

        </div>

      </section>


      <section className="py-28 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Legendary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Minds
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Meet the brilliant thinkers whose ideas changed the direction of human
            history and shaped the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              id: "einstein",
              name: "Albert Einstein",
              field: "Theoretical Physics",
              line: "Rewrote the rules of space, time, and energy.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
            },
            {
              id: "tesla",
              name: "Nikola Tesla",
              field: "Electrical Engineering",
              line: "Electrified the world with revolutionary ideas.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
            },
            {
              id: "newton",
              name: "Isaac Newton",
              field: "Classical Physics",
              line: "Laid the foundation of modern science.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
            },
          ].map((sci) => (
            <Link
              key={sci.id}
              to={`/scientist/${sci.id}`}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">

              <div className="relative h-56 overflow-hidden">

                <img
                  src={sci.image}
                  alt={sci.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>

              </div>


              <div className="relative p-6">

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                  {sci.name}
                </h3>

                <p className="text-sm text-emerald-400 mt-1">
                  {sci.field}
                </p>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {sci.line}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-cyan-400 text-sm font-medium">
                    View Profile →
                  </span>

                  <span className="text-xs text-gray-500">
                    Read Story
                  </span>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </section>


      <section className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          How Discovery Stories Works
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A simple journey designed to help you explore science through the lives,
          struggles, and breakthroughs of legendary minds.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
          {[
            {
              step: "01",
              title: "Explore",
              text: "Browse famous scientists and world-changing discoveries from different fields of science.",
            },
            {
              step: "02",
              title: "Learn",
              text: "Read inspiring journeys that show how failures, curiosity, and courage shaped history.",
            },
            {
              step: "03",
              title: "Understand",
              text: "See the real-world impact of ideas and how they still influence your daily life today.",
            },
            {
              step: "04",
              title: "Save",
              text: "Bookmark your favorite stories and build your own personal library of inspiration.",
            },
          ].map((item) => (

            <div key={item.step} className="group bg-slate-900/80 backdrop-blur border border-white/10 p-8 rounded-2xl text-center hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">

              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 text-xl font-bold mb-4 group-hover:bg-cyan-500/20 transition">
                {item.step}
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </section>



      <section className="py-28 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Famous{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Discoveries
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Discover the revolutionary ideas that reshaped science and influenced
              generations of thinkers.
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                id: "relativity",
                title: "Theory of Relativity",
                by: "Albert Einstein",
                year: "1905",
                description:
                  "Transformed our understanding of space, time, and gravity. A cornerstone of modern physics.",
                image:
                  "/theory-of-relativity.jpg",
              },
              {
                id: "gravity",
                title: "Law of Gravity",
                by: "Isaac Newton",
                year: "1687",
                description:
                  "Defined the motion of planets, objects on Earth, and laid the foundation for classical mechanics.",
                image:
                  "law-of-gravity.jpg",
              },
              {
                id: "ac",
                title: "AC Electricity",
                by: "Nikola Tesla",
                year: "1893",
                description:
                  "Enabled long-distance transmission of electric power, shaping the modern world of electricity.",
                image:
                  "/ac-electricity.jpeg",
              },
            ].map((d) => (
              <Link
                key={d.id}
                to={`/discovery/${d.id}`}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                </div>


                <div className="relative p-6">

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                    {d.title}
                  </h3>
                  <p className="text-emerald-400 mt-1 text-sm">{d.by} • {d.year}</p>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">{d.description}</p>

                  <span className="mt-5 inline-block text-cyan-400 group-hover:text-emerald-400 font-medium text-sm">
                    Read Story →
                  </span>
                </div>

              </Link>
            ))}
          </div>

        </div>

      </section>


      <section className="relative py-36 text-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-emerald-900/20 to-cyan-900/20 blur-3xl"></div>

        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></span>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
            Start Your Journey Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Ideas
            </span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg sm:text-xl leading-relaxed">
            Discover the greatest minds in history, explore their discoveries, and see
            how their ideas continue to shape the world today.
          </p>

          <Link
            to="/explore"
            className="mt-12 inline-block px-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform"
          >
            Start Exploring
          </Link>
        </div>
        
      </section>


    </div>
  );
}
