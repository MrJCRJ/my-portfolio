"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Componente que lida com a navegação e busca de seções
const NavbarContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const links = [
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      handleScroll(id);
    } else {
      router.push(`/?section=${id}`, { scroll: false });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setTimeout(() => handleScroll(section), 100);
    }
  }, [searchParams]);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Voltar ao topo ou Home */}
        <button
          onClick={handleLogoClick}
          className="text-lg font-bold hover:underline"
        >
          Meu Portfólio
        </button>

        <div className="flex items-center gap-4">
          {/* Menu Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="hover:underline"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-center gap-2 animate-fadeIn">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="block w-full text-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Componente suspenso para lidar com a navegação
const Navbar = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <NavbarContent />
  </Suspense>
);

export default Navbar;
