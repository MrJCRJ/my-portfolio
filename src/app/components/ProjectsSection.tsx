import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import Image from "next/image";

export default function ProjectsSection({ id }: { id?: string }) {
  const projects = [
    {
      title: "Projeto 1",
      description:
        "Descrição breve do projeto. Tecnologias usadas: React, Node.js, Tailwind CSS.",
      link: "https://my-history-frontend-git-main-jose-ciceros-projects.vercel.app/",
      image: "/images/projeto1.png", // Caminho da imagem local ou externa
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
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6">Projetos</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </section>
  );
}
