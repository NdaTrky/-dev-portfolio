import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // İlk render'da hiçbir şey göstermemek için

  return (
    <header className='flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent'>
      <span></span>
      <button
        className='px-6 py-2 bg-pink-800 text-white rounded-md font-semibold uppercase'
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </header>
  );
}

export default Header;
