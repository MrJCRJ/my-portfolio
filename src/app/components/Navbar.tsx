import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Meu Portfólio
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#about" className="hover:underline">
            Sobre
          </Link>
          <Link href="#projects" className="hover:underline">
            Projetos
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
