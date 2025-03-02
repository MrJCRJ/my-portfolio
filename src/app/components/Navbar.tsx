"use client"; // Adicione isso no topo do arquivo

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Meu Portfólio
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScroll("about")}
            className="hover:underline"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:underline"
          >
            Projetos
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
