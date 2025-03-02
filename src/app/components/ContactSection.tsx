export default function ContactSection() {
  const contacts = [
    {
      icon: "📧",
      label: "E-mail",
      link: "mailto:seu-email@example.com",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      link: "https://linkedin.com/in/seu-perfil",
    },
    {
      icon: "🐙",
      label: "GitHub",
      link: "https://github.com/seu-usuario",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {contact.icon} {contact.label}
          </a>
        ))}
      </div>
    </section>
  );
}