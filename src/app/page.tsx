"use client"; // Marca o componente como Client Component

import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen p-6 sm:p-8 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Botão de alternância de tema */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

      {/* Conteúdo principal */}
      <main className="max-w-2xl mx-auto">
        {/* Seção do nome e descrição */}
        <section className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            {/* Adicione sua foto ou avatar aqui */}
            <img
              src="https://avatars.githubusercontent.com/u/140264468?v=4"
              alt="Foto de perfil"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Jose Cicero Ribeiro Junior
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Desenvolvedor Full Stack | Apaixonado por tecnologia e inovação.
          </p>
        </section>

        {/* Seção "Sobre Mim" */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sou um desenvolvedor Full Stack com experiência em React, Node.js e
            outras tecnologias modernas. Adoro resolver problemas complexos e
            criar soluções inovadoras que impactam positivamente a vida das
            pessoas.
          </p>
        </section>

        {/* Seção de projetos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projetos</h2>
          <div className="grid gap-6">
            <a
              href="https://github.com/seu-usuario/projeto-1"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Descrição breve do projeto. Tecnologias usadas: React, Node.js,
                Tailwind CSS.
              </p>
            </a>
            <a
              href="https://github.com/seu-usuario/projeto-2"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Descrição breve do projeto. Tecnologias usadas: Next.js,
                TypeScript, MongoDB.
              </p>
            </a>
          </div>
        </section>

        {/* Seção de habilidades */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </section>

        {/* Seção de contato */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:seu-email@example.com"
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              📧 E-mail
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              🐙 GitHub
            </a>
          </div>
        </section>

        {/* Botão de Download do Currículo */}
        <section className="mb-12">
          <a
            href="/seu-curriculo.pdf" // Substitua pelo caminho do seu currículo
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📄 Baixar Currículo
          </a>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="text-center text-sm text-gray-600 dark:text-gray-400 mt-12">
        <p>
          © {new Date().getFullYear()} Jose Cicero Ribeiro Junior. Todos os
          direitos reservados.
        </p>
        <a
          href="https://github.com/MrJCRJ/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Código-fonte no GitHub
        </a>
      </footer>
    </div>
  );
}
