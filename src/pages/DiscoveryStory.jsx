import { useParams, Link } from "react-router-dom";

export default function DiscoveryStory() {
  const { id } = useParams();

  const discoveries = {
    relativity: {
      title: "Theory of Relativity",
      scientist: "Albert Einstein",
      scientistId: "einstein",
      year: "1905",
      image: "/theory-of-relativity.jpg",
      content: [
        {
          section: "Introduction",
          text: `In the early 20th century, classical physics couldn't explain some phenomena like the behavior of light and Mercury's orbit. Einstein proposed a new framework that revolutionized our understanding of space and time.`,
        },
        {
          section: "The Discovery Process",
          text: `Einstein worked alone, using thought experiments to imagine scenarios like riding alongside a light beam. He formulated his special relativity theory in 1905, showing that time and space are relative to the observer, and energy and mass are equivalent (E=mc²).`,
        },
        {
          section: "Challenges & Skepticism",
          text: `Initially, many physicists were skeptical. The idea that time could slow down or lengthen seemed absurd. Over years, experiments like the 1919 solar eclipse confirmed his predictions about light bending around the sun.`,
        },
        {
          section: "Impact & Applications",
          text: `Today, relativity is essential in GPS satellites, nuclear energy, particle physics, and understanding black holes and the universe itself. It laid the groundwork for modern cosmology.`,
        },
        {
          section: "Fun Facts",
          text: `Einstein didn't like wearing socks. He also refused the presidency of Israel. His theory's implications are still used in technology we rely on every day.`,
        },
      ],
    },
    gravity: {
      title: "Law of Gravity",
      scientist: "Isaac Newton",
      scientistId: "newton",
      year: "1687",
      image: "/law-of-gravity.jpg",
      content: [
        {
          section: "Introduction",
          text: `Before Newton, the motion of planets and falling objects was a mystery. People believed in Aristotle's ideas, but they didn't explain celestial motion accurately.`,
        },
        {
          section: "The Discovery Process",
          text: `While contemplating an apple falling from a tree, Newton realized the same force governs the moon and planets. He formulated the Universal Law of Gravitation, showing that every object attracts every other object with a force proportional to mass and inversely proportional to distance squared.`,
        },
        {
          section: "Challenges & Skepticism",
          text: `Newton's ideas were revolutionary. They replaced old beliefs and required careful calculation and validation. His Principia Mathematica published in 1687 became the standard in physics.`,
        },
        {
          section: "Impact & Applications",
          text: `Newton's laws are still used in engineering, space exploration, and understanding planetary motion. The law of gravity explains tides, satellite orbits, and why objects fall.`,
        },
        {
          section: "Fun Facts",
          text: `Newton also invented calculus (independently of Leibniz) and designed the first practical reflecting telescope. He was deeply interested in alchemy.`,
        },
      ],
    },
    ac: {
      title: "AC Electricity",
      scientist: "Nikola Tesla",
      scientistId: "tesla",
      year: "1890",
      image: "/ac-electricity.jpeg",
      content: [
        {
          section: "Introduction",
          text: `In the late 19th century, electricity distribution was inefficient. Direct current (DC) systems couldn't transmit power long distances. Tesla envisioned alternating current (AC) as a solution.`,
        },
        {
          section: "The Discovery Process",
          text: `Tesla experimented with transformers, motors, and generators to design a complete AC system. He demonstrated wireless power transmission and improved induction motors, paving the way for modern electricity distribution.`,
        },
        {
          section: "Challenges & Skepticism",
          text: `Thomas Edison promoted DC and publicly opposed AC, even calling it dangerous. Tesla faced financial and political challenges but continued experiments with George Westinghouse, who supported AC systems.`,
        },
        {
          section: "Impact & Applications",
          text: `AC electricity powers homes, industries, and cities globally. Transformers allow long-distance transmission with minimal loss. Tesla's ideas made modern electricity grids possible.`,
        },
        {
          section: "Fun Facts",
          text: `Tesla claimed to have visions that inspired his inventions. He also experimented with wireless lighting, robots, and even X-ray imaging before it was popular.`,
        },
      ],
    },
  };

  const discovery = discoveries[id];

  if (!discovery) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-black via-[#14132A] to-black px-4">
        <h2 className="text-2xl sm:text-3xl">Discovery not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen px-4 sm:px-6 lg:px-12">

      {/* HEADER */}
      <section className="py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          {discovery.title}
        </h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base md:text-lg">
          {discovery.scientist} • {discovery.year}
        </p>
      </section>

      {/* STORY CARD */}
      <section className="max-w-5xl mx-auto pb-24 space-y-8">

        <div className="bg-slate-900/70 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">

          {/* IMAGE */}
          <div className="h-48 sm:h-64 w-full rounded-2xl overflow-hidden mb-8 shadow-lg border border-white/10">
            <img
              src={discovery.image}
              alt={discovery.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story Sections */}
          {discovery.content.map((section, index) => (
            <div key={index} className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                {section.section}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}

          {/* LINKS */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              to={`/scientist/${discovery.scientistId}`}
              className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl text-center text-white font-medium shadow-lg hover:scale-105 transition transform"
            >
              About {discovery.scientist}
            </Link>

            <Link
              to="/explore"
              className="px-5 py-3 border border-white/30 rounded-xl text-center text-white font-medium hover:bg-white hover:text-black transition"
            >
              Back to Explore
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
