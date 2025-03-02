"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Fecha o menu após clicar em um link
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Meu Portfólio
        </Link>
        <div className="flex items-center gap-4">
          {/* Botão do menu hamburguer (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          {/* Links (visíveis apenas em telas maiores) */}
          <div className="hidden sm:flex items-center gap-4">
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
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      {/* Menu mobile (visível apenas quando isMenuOpen é true) */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4">
          <button
            onClick={() => handleScroll("about")}
            className="block w-full text-left p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Sobre
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="block w-full text-left p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Projetos
          </button>
          <div className="p-2 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
