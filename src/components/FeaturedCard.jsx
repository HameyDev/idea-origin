import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FeaturedCard({
  to,
  image,
  title,
  subtitle,
  description,
  cta = "Read More →",
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group"
    >
      <Link
        to={to}
        className="block relative bg-slate-950 rounded-3xl overflow-hidden
                   border border-white/10
                   hover:border-cyan-400
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                   transition-all duration-300"
      >
        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover
                       group-hover:scale-110
                       transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t
                          from-slate-900/80 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white
                         group-hover:text-cyan-400 transition">
            {title}
          </h3>

          {subtitle && (
            <p className="text-emerald-400 text-sm mt-1">
              {subtitle}
            </p>
          )}

          <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          <span className="inline-block mt-5 text-cyan-400
                           group-hover:text-emerald-400
                           font-medium text-sm">
            {cta}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
