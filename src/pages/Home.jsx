import { Link } from "react-router-dom";
import { FeaturedScientists } from "../data/FeaturedScientists";
import { FamousDiscoveries } from "../data/FamousDiscoveries";
import GradientButton from "../components/GradientButton";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/scrollAnimations";


export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative min-h-[90vh] flex items-center justify-center text-center px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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

            <GradientButton to="/explore-discovery" className="">
              Explore Stories
            </GradientButton>
            <Link
              to="/timeline"
              className="px-10 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Timeline
            </Link>

          </div>

        </div>

      </motion.section>


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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {FeaturedScientists.map((sci) => (
            <motion.div
              key={sci.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <Link
                key={sci.id}
                to={`/scientist/${sci.id}`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={sci.image}
                    alt={sci.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                    {sci.name}
                  </h3>

                  <p className="text-emerald-400 mt-1 text-sm">
                    {sci.field}
                  </p>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
                    {sci.line}
                  </p>

                  <span className="mt-5 inline-block text-cyan-400 group-hover:text-emerald-400 font-medium text-sm">
                    View Profile →
                  </span>
                </div>
              </Link>

            </motion.div>
          ))}
        </motion.div>

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



      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-28 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >

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
            {FamousDiscoveries.map((d) => (
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

      </motion.section>


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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >

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

          <GradientButton to="/explore-discovery" className="mt-12">
            Start Exploring
          </GradientButton>
        </motion.div>

      </section>


    </div>
  );
}
