import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  ];

  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        💡 Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-lg font-medium shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-gray-900 dark:text-gray-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
