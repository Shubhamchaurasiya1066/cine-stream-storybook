"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  const favorites = useSelector(
    (state) => state.favorites.movies
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-purple-500 cursor-pointer hover:scale-105 transition duration-300">
          CineStream
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-8 items-center text-sm text-gray-300 font-medium">

          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Home
          </Link>

          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Movies
          </Link>

          <Link
            href="/"
            className="
              relative
              hover:text-white
              transition
              duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-purple-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Trending
          </Link>

          {/* Favorites Counter */}
          <div className="bg-red-500 px-3 py-2 rounded-lg text-white font-bold">
            ❤️ {favorites.length}
          </div>

          {/* Theme Button */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>
      </div>
    </nav>
  );
}