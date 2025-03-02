export default function Footer() { return (
<footer className="text-center text-sm text-gray-600 dark:text-gray-400 mt-12">
  <p>
    © {new Date().getFullYear()} Jose Cicero Ribeiro Junior. Todos os direitos
    reservados.
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
); }
