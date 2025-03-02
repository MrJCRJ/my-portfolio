import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Meu Portfólio
        </Link>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">
            Sobre
          </Link>
          <Link href="/projects" className="hover:underline">
            Projetos
          </Link>
        </div>
      </div>
    </nav>
  );
}