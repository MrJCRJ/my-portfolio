export default function Footer() {
  return (
    <footer
      id="footer"
      className="text-center text-base text-gray-600 dark:text-gray-400 py-8 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <p className="mb-2">
          © {new Date().getFullYear()} Jose Cicero Ribeiro Junior. Todos os
          direitos reservados.
        </p>
        <a
          href="https://github.com/MrJCRJ/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repositório do código-fonte no GitHub"
          className="hover:underline hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Código-fonte no GitHub
        </a>
      </div>
    </footer>
  );
}
