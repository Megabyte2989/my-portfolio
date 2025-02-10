import { m } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiBootstrap, SiCplusplus } from "react-icons/si";
import { MdPeople, MdOutlineSyncProblem, MdOutlineChat, MdEvStation, MdSyncAlt } from "react-icons/md";

const skills = {
  tech: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  ],
  soft: [
    { name: "Team Leadership", icon: <MdPeople className="text-gray-700" /> },
    { name: "Problem-Solving", icon: <MdOutlineSyncProblem className="text-red-500" /> },
    { name: "Communication", icon: <MdOutlineChat className="text-blue-500" /> },
    { name: "Presentation", icon: <MdEvStation className="text-orange-500" /> },
    { name: "Adaptability", icon: <MdSyncAlt className="text-green-500" /> },
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 ">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold  text-center font-berkshire mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold font-berkshiremb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.tech.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2 bg-gray-100/10 p-3 rounded-lg shadow">
                  {skill.icon}
                  <span className="text-gray-100 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Soft Skills */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl  font-berkshire mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.soft.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2 bg-gray-100/10 p-3 rounded-lg shadow">
                  {skill.icon}
                  <span className="text-gray-100 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
