import { m } from "framer-motion";
import { useState } from "react"; // Import useState

const projects = [
  {
    title: "New Horizons Cairo",
    tech: ["React", "Node.js", "SQL"],
    description: "Website redesign improving accessibility by 40%",
    image: "./blue.jpeg",
    link: "https://newhorizonscairo.com",
  },
  {
    title: "Ramy-Rent",
    tech: ["React", "Tailwind", "MongoDB"],
    description: "Car rental platform with 35% efficiency boost",
    image: "./orange.webp",
    link: "https://ramy-rent.com",
  },
];

export default function Projects() {
  const [themeColor, setThemeColor] = useState('blue'); // State for theme color

  const handleThemeChange = (color: string) => {
    setThemeColor(color); // Update the theme color
  };

  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center font-chocolate mb-12">My Work</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <m.div
              key={project.title}
              className={`flex flex-col md:flex-row items-center gap-10 p-6 bg-white/10  rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`bg-${themeColor}-500 text-white px-3 py-1 text-sm rounded-lg`} // Dynamic color class
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Project
                </a>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
