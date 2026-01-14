import { useParams, Link } from "react-router-dom";

export default function DiscoveryStory() {
  const { id } = useParams();

  const discoveries = {
    relativity: {
      title: "Theory of Relativity",
      scientist: "Albert Einstein",
      scientistId: "einstein",
      year: "1905",
      story: `
In 1905, Albert Einstein published a series of papers that changed the world.
He challenged the traditional ideas of space and time and showed that they are
not absolute — they depend on the observer.

At first, many scientists rejected his ideas. But over time, experiments proved
him right. Today, his theory is used in GPS systems, satellites, and modern physics.
      `,
      impact:
        "Changed our understanding of the universe and laid the foundation for modern physics.",
    },
    gravity: {
      title: "Law of Gravity",
      scientist: "Isaac Newton",
      scientistId: "newton",
      year: "1687",
      story: `
While sitting under an apple tree, Isaac Newton wondered why objects always fall down.
This simple question led him to discover the law of universal gravitation.

His work explained how planets move and why the moon stays in orbit. It became the
basis of physics for over 200 years.
      `,
      impact:
        "Explained motion of planets and objects, shaping science for centuries.",
    },
    ac: {
      title: "AC Electricity",
      scientist: "Nikola Tesla",
      scientistId: "tesla",
      year: "1890",
      story: `
Nikola Tesla believed electricity should travel long distances easily.
While others doubted him, he developed Alternating Current (AC) systems.

Today, AC electricity powers homes, cities, and industries across the world.
      `,
      impact:
        "Made global power distribution possible.",
    },
  };

  const discovery = discoveries[id];

  if (!discovery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
        <h2 className="text-2xl text-center">Discovery not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen px-4 sm:px-6 lg:px-10">

      {/* HEADER */}
      <section className="py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {discovery.title}
        </h1>
        <p className="mt-2 text-indigo-400 text-sm sm:text-base">
          {discovery.scientist} • {discovery.year}
        </p>
      </section>

      {/* STORY CARD */}
      <section className="max-w-4xl mx-auto pb-20">

        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg">

          {/* IMAGE */}
          <div className="h-40 sm:h-56 bg-slate-800 rounded-xl mb-6 sm:mb-8 flex items-center justify-center text-gray-400">
            Image
          </div>

          {/* STORY TEXT */}
          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
            {discovery.story}
          </div>

          {/* IMPACT */}
          <div className="mt-8 sm:mt-10 bg-slate-800 p-4 sm:p-6 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
              Why This Discovery Matters
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              {discovery.impact}
            </p>
          </div>

          {/* LINKS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              to={`/scientist/${discovery.scientistId}`}
              className="px-4 sm:px-5 py-2 sm:py-3 bg-indigo-600 rounded-lg text-center hover:bg-indigo-700 transition"
            >
              About {discovery.scientist}
            </Link>

            <Link
              to="/explore"
              className="px-4 sm:px-5 py-2 sm:py-3 border border-gray-400 rounded-lg text-center hover:bg-white hover:text-black transition"
            >
              Back to Explore
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
