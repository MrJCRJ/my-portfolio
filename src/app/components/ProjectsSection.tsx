import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection({ id }: { id?: string }) {
  const projects = [
    {
      id: "my-history",
      title: "My-History",
      description:
        "Uma aplicação web full-stack para criação e gestão de histórias, utilizando React, Node.js e Tailwind CSS.",
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
      id: "projeto-2",
      title: "Projeto 2",
      description:
        "Aplicação com Next.js e TypeScript, utilizando MongoDB para persistência de dados.",
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
    <section id={id} className="mb-16 scroll-mt-20 px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-200">
        Meus Projetos
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/projetos/${project.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <Image
                src={project.image}
                alt={`Imagem do ${project.title}`}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6">
              <span className="text-blue-600 dark:text-blue-400 group-hover:underline transition-colors">
                Ver Detalhes
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
