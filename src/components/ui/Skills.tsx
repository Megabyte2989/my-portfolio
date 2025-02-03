import { m } from "framer-motion";
import { FaCss3Alt,FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb,SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaCss3Alt />, name: "CSS" },
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold text-maroon-red">Skills</h2>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {skills.map((skill, index) => (
            <m.div
              key={index}
              className="flex flex-col items-center"
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;