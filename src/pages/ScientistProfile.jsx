import { useParams, Link } from "react-router-dom";

export default function ScientistProfile() {
  const { id } = useParams();

  const scientists = {
    einstein: {
      name: "Albert Einstein",
      field: "Theoretical Physics",
      born: "1879",
      died: "1955",
      bio: "Albert Einstein revolutionized physics with his theory of relativity, reshaping our understanding of space, time, and energy. His ideas continue to influence science and philosophy today.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      discoveries: [
        { id: "relativity", title: "Theory of Relativity", year: "1905" },
        { id: "photoelectric", title: "Photoelectric Effect", year: "1905" },
      ],
      achievements: [
        "Nobel Prize in Physics (1921)",
        "Developed E=mc² equation",
        "Unified concepts of space and time",
      ],
      quotes: [
        "Imagination is more important than knowledge.",
        "Life is like riding a bicycle. To keep your balance you must keep moving.",
      ],
      funFacts: [
        "Loved playing the violin.",
        "Refused the presidency of Israel.",
      ],
    },
    tesla: {
      name: "Nikola Tesla",
      field: "Electrical Engineering",
      born: "1856",
      died: "1943",
      bio: "Nikola Tesla was a visionary inventor and engineer, pioneering the development of alternating current (AC) electricity, wireless communication, and modern energy systems.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG",
      discoveries: [
        { id: "ac", title: "AC Electricity", year: "1890" },
        { id: "wireless", title: "Wireless Energy", year: "1893" },
      ],
      achievements: [
        "Patented over 300 inventions",
        "Developed AC power systems",
        "Predicted radio technology",
      ],
      quotes: [
        "The present is theirs; the future, for which I really worked, is mine.",
        "If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.",
      ],
      funFacts: [
        "Had photographic memory.",
        "Claimed to see visions and flashes of inventions in his mind.",
      ],
    },
    newton: {
      name: "Isaac Newton",
      field: "Mathematics & Physics",
      born: "1643",
      died: "1727",
      bio: "Isaac Newton formulated the laws of motion and universal gravitation, laying the foundations of classical mechanics and profoundly impacting mathematics, physics, and astronomy.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Sir_Isaac_Newton_%281642-1727%29.jpg",
      discoveries: [
        { id: "gravity", title: "Law of Gravity", year: "1687" },
        { id: "motion", title: "Laws of Motion", year: "1687" },
      ],
      achievements: [
        "Fellow of the Royal Society",
        "Master of the Mint",
        "Published Philosophiæ Naturalis Principia Mathematica",
      ],
      quotes: [
        "If I have seen further it is by standing on the shoulders of Giants.",
        "What we know is a drop, what we don't know is an ocean.",
      ],
      funFacts: [
        "Practiced alchemy.",
        "Had a deep interest in theology.",
      ],
    },
  };

  const scientist = scientists[id];

  if (!scientist) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-black via-[#14132A] to-black px-4">
        <h2 className="text-2xl sm:text-3xl">Scientist not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-black via-[#14132A] to-black text-white min-h-screen pb-16">

      {/* HEADER */}
      <section className="py-16 text-center px-6 sm:px-12 lg:px-24 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          {scientist.name}
        </h1>
        <p className="mt-2 text-cyan-400 text-sm sm:text-base md:text-lg">{scientist.field}</p>
      </section>

      {/* PROFILE CARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">

            {/* IMAGE */}
            <div className="h-64 w-full md:h-80 md:w-full bg-gradient-to-tr from-cyan-500/20 via-emerald-500/20 to-indigo-500/20 rounded-2xl overflow-hidden flex items-center justify-center shadow-inner border border-white/10">
              <img
                src={scientist.image}
                alt={scientist.name}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* INFO */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {scientist.bio}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:text-base text-gray-400">
                <span><span className="font-semibold text-cyan-400">Born:</span> {scientist.born}</span>
                <span><span className="font-semibold text-cyan-400">Died:</span> {scientist.died}</span>
              </div>

              {/* Achievements */}
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Key Achievements</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  {scientist.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>

              {/* Quotes */}
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Famous Quotes</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  {scientist.quotes.map((quote, i) => (
                    <li key={i} className="italic">"{quote}"</li>
                  ))}
                </ul>
              </div>

              {/* Fun Facts */}
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Fun Facts</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  {scientist.funFacts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* DISCOVERIES */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
              Famous Discoveries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {scientist.discoveries.map((d) => (
                <Link
                  key={d.id}
                  to={`/discovery/${d.id}`}
                  className="bg-slate-800/70 backdrop-blur-lg p-5 rounded-2xl hover:scale-105 transition-transform shadow-lg border border-white/10"
                >
                  <h3 className="font-semibold text-lg sm:text-xl">{d.title}</h3>
                  <p className="text-cyan-400 mt-1 text-sm sm:text-base font-medium">{d.year} • Read story →</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
