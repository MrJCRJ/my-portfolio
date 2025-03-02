export default function ProjectsSection() {
  const projects = [
    {
      title: "Projeto 1",
      description:
        "Descrição breve do projeto. Tecnologias usadas: React, Node.js, Tailwind CSS.",
      link: "https://github.com/seu-usuario/projeto-1",
    },
    {
      title: "Projeto 2",
      description:
        "Descrição breve do projeto. Tecnologias usadas: Next.js, TypeScript, MongoDB.",
      link: "https://github.com/seu-usuario/projeto-2",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projetos</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}