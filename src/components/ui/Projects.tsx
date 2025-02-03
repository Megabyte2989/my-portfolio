import { m } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "New Horizons Cairo",
      tech: "React, Node.js, SQL",
      description: "Website redesign improving accessibility by 40%",
    },
    {
      title: "Ramy-Rent",
      tech: "React, Tailwind, MongoDB",
      description: "Car rental platform with 35% efficiency boost",
    },
  ];

  return (
    <section id="projects" className="bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold text-maroon-red">Projects</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-gray-900 p-6"
            >
              <div className="absolute inset-0 bg-maroon-red opacity-0 transition-opacity group-hover:opacity-10" />
              
              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech) => (
                  <span 
                    key={tech}
                    className="rounded-full bg-maroon-red/20 px-3 py-1 text-sm text-maroon-red"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;