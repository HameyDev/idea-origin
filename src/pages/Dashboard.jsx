import { Link } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    { label: "Stories Read", value: 12 },
    { label: "Favorites", value: 5 },
    { label: "Scientists Followed", value: 3 },
    { label: "Discoveries Saved", value: 8 },
  ];

  const recentActivity = [
    { id: 1, text: "Read the story of Theory of Relativity" },
    { id: 2, text: "Added Nikola Tesla to favorites" },
    { id: 3, text: "Saved AC Electricity discovery" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

      {/* HEADER */}
      <div className="mb-8 sm:mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
          Welcome back! Here’s your learning progress.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-slate-900 rounded-2xl p-4 sm:p-6 text-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500">
              {item.value}
            </p>
            <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* RECENT ACTIVITY */}
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-3 sm:space-y-4">
            {recentActivity.map((item) => (
              <li
                key={item.id}
                className="bg-slate-800 p-3 sm:p-4 rounded-xl text-gray-300 text-sm sm:text-base"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 mt-6 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Quick Actions
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            <Link
              to="/explore"
              className="bg-indigo-600 text-center py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-indigo-700 transition"
            >
              Explore Stories
            </Link>

            <Link
              to="/timeline"
              className="border border-gray-500 text-center py-2 sm:py-3 rounded-xl text-sm sm:text-base hover:bg-white hover:text-black transition"
            >
              View Timeline
            </Link>

            <Link
              to="/about"
              className="border border-gray-500 text-center py-2 sm:py-3 rounded-xl text-sm sm:text-base hover:bg-white hover:text-black transition"
            >
              About Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
