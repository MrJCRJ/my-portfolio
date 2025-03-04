import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import Image from "next/image";
import Link from "next/link"; // Importe o Link do Next.js

export default function ProjectsSection({ id }: { id?: string }) {
  const projects = [
    {
      id: "my-history", // Adicione um ID único para cada projeto
      title: "My-History",
      description:
        "Descrição breve do projeto. Tecnologias usadas: React, Node.js, Tailwind CSS.",
      link: "https://my-history-frontend-git-main-jose-ciceros-projects.vercel.app/",
      image: "/projeto_1.png",
      technologies: [
        { icon: <FaReact className="w-6 h-6 text-blue-500" />, name: "React" },
        {
          icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
          name: "Node.js",
        },
        {
          icon: <FaCss3Alt className="w-6 h-6 text-purple-500" />,
          name: "Tailwind CSS",
        },
      ],
    },
    {
      id: "projeto-2", // Adicione um ID único para cada projeto
      title: "Projeto 2",
      description:
        "Descrição breve do projeto. Tecnologias usadas: Next.js, TypeScript, MongoDB.",
      link: "https://github.com/seu-usuario/projeto-2",
      image: "/images/projeto2.png",
      technologies: [
        {
          icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
          name: "Next.js",
        },
        {
          icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
          name: "TypeScript",
        },
        {
          icon: <SiMongodb className="w-6 h-6 text-green-600" />,
          name: "MongoDB",
        },
      ],
    },
  ];

  return (
    <section id={id} className="mb-12 scroll-mt-20 px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-6">Projetos</h2>
      <div className="grid sm:grid-cols-2 gap-6 justify-center">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projetos/${project.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={`Imagem do ${project.title}`}
              width={500}
              height={300}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
