import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import Image from "next/image";

// Dados dos projetos (pode ser movido para um arquivo separado)
const projects = [
  {
    id: "my-history",
    title: "My-History",
    description:
      "O My-History é uma aplicação web full-stack que permite aos usuários criar, visualizar e gerenciar histórias de forma simples e intuitiva. O projeto foi desenvolvido com uma arquitetura moderna, separando o frontend e o backend para garantir escalabilidade e manutenção facilitada.",
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
    details: `
      <h3 class="text-xl font-bold mb-4">Funcionalidades Principais</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Publicação de histórias com título e conteúdo.</li>
        <li>Listagem de histórias em ordem cronológica.</li>
        <li>Interface responsiva e moderna.</li>
      </ul>
      <h3 class="text-xl font-bold mb-4">Tecnologias Utilizadas</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Frontend: Next.js, React, Tailwind CSS.</li>
        <li>Backend: Node.js, Express, MongoDB.</li>
        <li>Deploy: Vercel (frontend e backend).</li>
      </ul>
    `,
  },
  // Outros projetos...
];

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Projeto não encontrado</div>;
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
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: project.details }}
          />
          <div className="flex gap-3 mt-6">
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
