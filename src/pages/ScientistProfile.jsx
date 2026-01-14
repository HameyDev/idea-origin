import { useParams, Link } from "react-router-dom";

export default function ScientistProfile() {
  const { id } = useParams();

  // Dummy data (later fetch from API)
  const scientists = {
    einstein: {
      name: "Albert Einstein",
      field: "Theoretical Physics",
      born: "1879",
      died: "1955",
      bio: "Albert Einstein revolutionized physics with his theory of relativity and changed how we understand space, time, and energy.",
      discoveries: [
        { id: "relativity", title: "Theory of Relativity" },
        { id: "photoelectric", title: "Photoelectric Effect" },
      ],
    },
    tesla: {
      name: "Nikola Tesla",
      field: "Electrical Engineering",
      born: "1856",
      died: "1943",
      bio: "Nikola Tesla was a visionary inventor who laid the foundations of modern electricity and wireless communication.",
      discoveries: [
        { id: "ac", title: "AC Electricity" },
        { id: "wireless", title: "Wireless Energy" },
      ],
    },
    newton: {
      name: "Isaac Newton",
      field: "Mathematics & Physics",
      born: "1643",
      died: "1727",
      bio: "Isaac Newton formulated the laws of motion and universal gravitation, becoming one of the most influential scientists in history.",
      discoveries: [
        { id: "gravity", title: "Law of Gravity" },
        { id: "motion", title: "Laws of Motion" },
      ],
    },
  };

  const scientist = scientists[id];

  if (!scientist) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-950 px-4">
        <h2 className="text-2xl sm:text-3xl">Scientist not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HEADER */}
      <section className="py-12 sm:py-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          {scientist.name}
        </h1>
        <p className="mt-2 text-indigo-400 text-sm sm:text-base md:text-lg">
          {scientist.field}
        </p>
      </section>

      {/* PROFILE CARD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            
            {/* IMAGE */}
            <div className="h-48 sm:h-56 md:h-60 bg-slate-800 rounded-xl flex items-center justify-center text-gray-400 text-sm sm:text-base">
              Image
            </div>

            {/* INFO */}
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {scientist.bio}
              </p>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base text-gray-400">
                <span>Born: {scientist.born}</span>
                <span>Died: {scientist.died}</span>
              </div>
            </div>
          </div>

          {/* DISCOVERIES */}
          <div className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Famous Discoveries
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {scientist.discoveries.map((d) => (
                <Link
                  key={d.id}
                  to={`/discovery/${d.id}`}
                  className="bg-slate-800 p-4 sm:p-5 rounded-xl hover:bg-slate-700 transition"
                >
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {d.title}
                  </h3>
                  <p className="text-indigo-400 mt-1 text-sm sm:text-base">
                    Read story →
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
