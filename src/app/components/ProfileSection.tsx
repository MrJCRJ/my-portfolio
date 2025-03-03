import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ProfileSection() {
  return (
    <section className="text-center mb-12">
      {/* Container da Foto de Perfil */}
      <div className="w-36 h-36 mx-auto mb-6 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 shadow-lg">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/140264468?v=4"
            alt="Foto de perfil"
            width={144}
            height={144}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Nome e Descrição */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
        José Cícero Ribeiro Junior
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        🚀 Desenvolvedor Full Stack | Apaixonado por tecnologia e inovação.
      </p>

      {/* Links de Contato */}
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/jose-cicero-ribeiro-1b2632271/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href="https://github.com/MrJCRJ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
        >
          <FaGithub className="w-6 h-6" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </section>
  );
}
