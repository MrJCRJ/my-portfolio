export default function SkillsSection() {
  const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS"];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}