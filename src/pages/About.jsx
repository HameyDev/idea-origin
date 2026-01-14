export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HEADER */}
      <section className="py-16 text-center px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About Discovery Stories
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Behind every great idea is a human story.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto px-6 sm:px-0 pb-20 space-y-12 sm:space-y-16">

        {/* WHO WE ARE */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            What is Discovery Stories?
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Discovery Stories is a platform that brings science to life by
            sharing the human journeys behind the world’s greatest discoveries.
            We focus not just on the results, but on the struggles, failures,
            and moments of inspiration that shaped history.
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Our mission is to make science more engaging and relatable.
            We believe that when people understand the story behind an idea,
            learning becomes more meaningful and inspiring.
          </p>
        </div>

        {/* WHY THIS PROJECT */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Why This Project?
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            Many students see science as difficult and boring.
            This project was created to change that — by turning discoveries
            into stories that anyone can enjoy and remember.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            We envision a future where learning science feels like reading
            a great story — full of curiosity, emotion, and wonder.
            In the future, Discovery Stories will include interactive timelines,
            videos, and community contributions.
          </p>
        </div>

      </section>
    </div>
  );
}
