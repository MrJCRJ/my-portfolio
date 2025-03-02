import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="text-center mb-12">
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/140264468?v=4"
            alt="Foto de perfil"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-2">Jose Cicero Ribeiro Junior</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
        Desenvolvedor Full Stack | Apaixonado por tecnologia e inovação.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/jose-cicero-ribeiro-1b2632271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MrJCRJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
