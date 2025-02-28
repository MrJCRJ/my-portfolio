export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
        <h1 className="text-4xl font-bold">Jose Cicero Ribeiro Junior</h1>
        <p className="text-lg text-center sm:text-left">
          Desenvolvedor Full Stack | Apaixonado por tecnologia e inovação.
        </p>

        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Projetos</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://github.com/seu-usuario/projeto-1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <strong>Projeto 1</strong> - Descrição breve do projeto.
              </a>
            </li>
            <li>
              <a
                href="https://github.com/seu-usuario/projeto-2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <strong>Projeto 2</strong> - Descrição breve do projeto.
              </a>
            </li>
          </ul>
        </section>

        <section className="w-full">
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

        <section className="w-full">
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <div className="flex gap-4">
            <a href="mailto:seu-email@example.com" className="hover:underline">
              E-mail
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
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
