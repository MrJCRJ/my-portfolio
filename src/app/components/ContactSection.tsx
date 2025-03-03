import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "E-mail",
    link: "mailto:mr.jociriju@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jose-cicero-ribeiro-1b2632271/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    link: "https://github.com/MrJCRJ",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Contato</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {contacts.map(({ icon: Icon, label, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md 
                       hover:shadow-lg transition-all duration-300 hover:scale-105 
                       focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700"
            aria-label={label}
          >
            <span className="text-blue-600 dark:text-blue-400">
              <Icon className="w-6 h-6" />
            </span>
            <span className="text-gray-800 dark:text-gray-100 font-medium">
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
