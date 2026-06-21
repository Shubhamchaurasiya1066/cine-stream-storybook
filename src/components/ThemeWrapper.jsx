"use client";

import { useSelector } from "react-redux";

export default function ThemeWrapper({ children }) {
  const darkMode = useSelector(
    (state) => state.theme.darkMode
  );

  return (
    <div
      className={
        darkMode
          ? "bg-[#050816] text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {children}
    </div>
  );
}