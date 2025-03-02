import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const tooltipData = [
  {
    id: "fullstack-tooltip",
    text: "Desenvolvedor que trabalha tanto no front-end quanto no back-end.",
  },
  {
    id: "react-tooltip",
    text: "Biblioteca JavaScript para construir interfaces de usuário interativas.",
  },
  {
    id: "nextjs-tooltip",
    text: "Framework React para aplicações web otimizadas e server-side rendering.",
  },
  {
    id: "typescript-tooltip",
    text: "Superset do JavaScript que adiciona tipagem estática para evitar erros.",
  },
  {
    id: "nodejs-tooltip",
    text: "Ambiente de execução JavaScript no servidor, usado para back-end.",
  },
  {
    id: "express-tooltip",
    text: "Framework minimalista para construir APIs com Node.js.",
  },
  {
    id: "mongodb-tooltip",
    text: "Banco de dados NoSQL orientado a documentos, flexível e escalável.",
  },
  {
    id: "docker-tooltip",
    text: "Plataforma para criar, gerenciar e executar aplicativos em containers.",
  },
  {
    id: "cicd-tooltip",
    text: "Prática DevOps para automação de build, testes e deploy contínuos.",
  },
];

const TechTooltip = () => (
  <>
    {tooltipData.map(({ id, text }) => (
      <Tooltip
        key={id}
        id={id}
        place="bottom"
        float={true}
        style={{
          maxWidth: "90vw",
          backgroundColor: "#1e40af",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "8px 12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {text}
      </Tooltip>
    ))}
  </>
);

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Sobre Mim
        </h2>
        <div className="space-y-6 text-gray-800 dark:text-gray-100">
          <p>
            🚀{" "}
            <strong className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack Júnior Problem Solver na área!
            </strong>
          </p>
          <p>
            Sou um desenvolvedor{" "}
            <span
              className="underline decoration-dotted cursor-pointer"
              data-tooltip-id="fullstack-tooltip"
            >
              Full Stack
            </span>
            , apaixonado por transformar ideias em código funcional.
          </p>
          <p>
            Tenho um time de peso: documentação, comunidade dev e inteligência
            artificial (obrigado, IA! 😆). Se eu não souber algo? Aprendo
            rápido! O importante é que tenho uma base sólida e sei onde
            encontrar as melhores soluções.
          </p>
          <p>
            💡{" "}
            <strong className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              O que isso significa na prática?
            </strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Front-end?</strong> Faço interfaces modernas com{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="react-tooltip"
              >
                React
              </span>
              ,{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="nextjs-tooltip"
              >
                Next.js
              </span>{" "}
              e{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="typescript-tooltip"
              >
                TypeScript
              </span>
              .
            </li>
            <li>
              <strong>Back-end?</strong> Construo APIs seguras com{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="nodejs-tooltip"
              >
                Node.js
              </span>
              ,{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="express-tooltip"
              >
                Express
              </span>{" "}
              e{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="mongodb-tooltip"
              >
                MongoDB
              </span>
              .
            </li>
            <li>
              <strong>DevOps?</strong> Uso{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="docker-tooltip"
              >
                Docker
              </span>{" "}
              e{" "}
              <span
                className="underline decoration-dotted cursor-pointer"
                data-tooltip-id="cicd-tooltip"
              >
                CI/CD
              </span>{" "}
              para manter tudo rodando liso.
            </li>
          </ul>
          <p>
            Quando não estou codando, estou jogando jogos indie, explorando
            novas ferramentas ou tentando cozinhar algo que não queime. 😅
          </p>
          <p className="font-bold text-blue-600 dark:text-blue-400">
            Se quiser saber mais ou bater um papo sobre tecnologia, é só me
            chamar!
          </p>
        </div>
      </motion.div>
      <TechTooltip />
    </section>
  );
}
