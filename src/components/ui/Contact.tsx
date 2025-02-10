import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { m } from "framer-motion";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-600" />,
    link: "https://linkedin.com/in/mayaryouness",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
    link: "https://github.com/Megabyte2989",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="text-red-500" />,
    link: "mailto:mayar.youness28@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500" />,
    link: "https://wa.me/201019741633",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact) => (
            <m.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg font-medium"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {contact.icon}
              <span>{contact.name}</span>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}
