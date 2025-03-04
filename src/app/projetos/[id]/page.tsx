import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    id: "my-history",
    title: "My-History",
    description:
      "O My-History é uma aplicação web full-stack que permite aos usuários criar, visualizar e gerenciar histórias de forma simples e intuitiva.",
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
    details: [
      {
        title: "Funcionalidades Principais",
        list: [
          "Publicação de histórias com título e conteúdo.",
          "Listagem de histórias em ordem cronológica.",
          "Interface responsiva e moderna.",
        ],
      },
      {
        title: "Tecnologias Utilizadas",
        list: [
          "Frontend: Next.js, React, Tailwind CSS.",
          "Backend: Node.js, Express, MongoDB.",
          "Deploy: Vercel (frontend e backend).",
        ],
      },
    ],
  },
];

interface PageProps {
  params: { id: string };
}

export default function ProjectDetails({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold">Projeto não encontrado</h2>
        <p className="text-gray-600">
          Parece que o projeto que você está procurando não existe.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={project.image}
            alt={`Imagem do ${project.title}`}
            width={800}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
          <div>
            {project.details.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="list-disc list-inside mb-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
