import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
        <div className="space-y-4 text-gray-800 dark:text-gray-100">
          <p>
            🚀{" "}
            <strong className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Júnior Full Stack Problem Solver na área!
            </strong>
          </p>
          <p>
            Sou um desenvolvedor{" "}
            <span
              className="font-semibold text-blue-600 dark:text-blue-400 underline decoration-dotted cursor-pointer"
              data-tooltip-id="fullstack-tooltip"
            >
              Full Stack
            </span>
            , apaixonado por transformar ideias em código funcional. Se tem um
            bug insistente, um layout quebrado ou um back-end teimoso, pode
            contar comigo! Minha missão? Resolver problemas no front, no back e
            até na infraestrutura, porque código bem feito é código que
            funciona.
          </p>
          <p>
            Claro, eu não faço tudo sozinho! Tenho um time de peso:
            documentação, comunidade dev e inteligência artificial (obrigado,
            IA, por me salvar várias vezes 😆). E se eu não souber algo? Aprendo
            rápido! O importante é que tenho uma base sólida e sei onde
            encontrar as melhores soluções.
          </p>
          <p>
            💡{" "}
            <strong className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              O que isso significa na prática?
            </strong>
          </p>
          <p>
            Mais do que listar tecnologias, meu foco está em entregar soluções
            eficientes e escaláveis. Mas, para quem gosta de detalhes:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Front-end?</strong> Faço interfaces modernas e responsivas
              com{" "}
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
              <strong>Back-end?</strong> Construo APIs bem estruturadas e
              seguras com{" "}
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
              para manter tudo rodando liso, sem sustos.
            </li>
          </ul>
          <p>
            Quando não estou codando, você me encontra jogando algum jogo indie,
            explorando novas ferramentas de desenvolvimento ou tentando cozinhar
            algo que não queime (ainda estou aprendendo 😅).
          </p>
          <p>
            No fim das contas, não importa a tecnologia – o que importa é
            resolver problemas de verdade e entregar código que faz a diferença.
            Bora criar algo incrível? 😃💻
          </p>
          <p className="font-bold">
            Se quiser saber mais sobre meus projetos ou bater um papo sobre
            tecnologia, é só me chamar!
          </p>
        </div>
      </motion.div>

      {/* Tooltips - Ajustados para mobile */}
      <Tooltip
        id="fullstack-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Desenvolvedor que trabalha tanto no front-end quanto no back-end.
      </Tooltip>
      <Tooltip
        id="react-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Biblioteca JavaScript para construir interfaces de usuário interativas.
      </Tooltip>
      <Tooltip
        id="nextjs-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Framework React para aplicações web otimizadas e server-side rendering.
      </Tooltip>
      <Tooltip
        id="typescript-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Superset do JavaScript que adiciona tipagem estática para evitar erros.
      </Tooltip>
      <Tooltip
        id="nodejs-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Ambiente de execução JavaScript no servidor, usado para back-end.
      </Tooltip>
      <Tooltip
        id="express-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Framework minimalista para construir APIs com Node.js.
      </Tooltip>
      <Tooltip
        id="mongodb-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Banco de dados NoSQL orientado a documentos, flexível e escalável.
      </Tooltip>
      <Tooltip
        id="docker-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Plataforma para criar, gerenciar e executar aplicativos em containers.
      </Tooltip>
      <Tooltip
        id="cicd-tooltip"
        place="bottom"
        float={true}
        style={{ maxWidth: "90vw" }}
      >
        Prática DevOps para automação de build, testes e deploy contínuos.
      </Tooltip>
    </section>
  );
}
