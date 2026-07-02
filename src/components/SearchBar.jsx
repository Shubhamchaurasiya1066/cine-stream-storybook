"use client";

import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@/store/filterSlice";

export default function SearchBar({
  placeholder = "Search movies, actors, genres...",
  disabled = false,
}) {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.filter.search);

  return (
    <div className="w-full max-w-2xl mx-auto mb-14 px-4">
      <div className="relative group">
        <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

        <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <FiSearch className="text-gray-400 text-2xl ml-5" />

          <input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            value={query}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full bg-transparent px-5 py-5 text-white placeholder:text-gray-500 outline-none text-lg disabled:opacity-50"
          />

          <button
            disabled={disabled}
            className="bg-purple-600 hover:bg-purple-700 transition px-7 py-5 font-semibold text-white disabled:bg-gray-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}