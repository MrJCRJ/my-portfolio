export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="mb-12 pt-20">
      {" "}
      {/* Adicionado pt-20 */}
      <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Sou um desenvolvedor Full Stack com experiência em React, Node.js e
        outras tecnologias modernas. Adoro resolver problemas complexos e criar
        soluções inovadoras que impactam positivamente a vida das pessoas.
      </p>
    </section>
  );
}
