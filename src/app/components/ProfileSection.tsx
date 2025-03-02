import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="text-center mb-12">
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <Image
          src="https://avatars.githubusercontent.com/u/140264468?v=4"
          alt="Foto de perfil"
          width={500}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Jose Cicero Ribeiro Junior</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Desenvolvedor Full Stack | Apaixonado por tecnologia e inovação.
      </p>
    </section>
  );
}