import { motion } from 'framer-motion';
import { FaCode, FaPython, FaHtml5, FaCss3Alt, FaFlask, FaGitAlt, FaGithub, FaRobot, FaDatabase, FaChartBar } from 'react-icons/fa';
import { SiCplusplus, SiVisualstudiocode } from 'react-icons/si';

const SkillCard = ({ icon, title, level, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-tertiary rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`h-2.5 rounded-full ${color}`}
        ></motion.div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{level}</p>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "C++",
      level: "85%",
      icon: <SiCplusplus size={28} />,
      color: "bg-blue-600"
    },
    {
      title: "Python",
      level: "80%",
      icon: <FaPython size={28} />,
      color: "bg-yellow-600"
    },
    {
      title: "HTML",
      level: "90%",
      icon: <FaHtml5 size={28} />,
      color: "bg-orange-500"
    },
    {
      title: "CSS",
      level: "85%",
      icon: <FaCss3Alt size={28} />,
      color: "bg-blue-500"
    },
    {
      title: "Flask",
      level: "75%",
      icon: <FaFlask size={28} />,
      color: "bg-gray-700"
    },
    {
      title: "Web Scraping",
      level: "80%",
      icon: <FaCode size={28} />,
      color: "bg-green-600"
    },
    {
      title: "Git",
      level: "70%",
      icon: <FaGitAlt size={28} />,
      color: "bg-red-500"
    },
    {
      title: "GitHub",
      level: "75%",
      icon: <FaGithub size={28} />,
      color: "bg-gray-800"
    },
    {
      title: "VS Code",
      level: "90%",
      icon: <SiVisualstudiocode size={28} />,
      color: "bg-blue-600"
    },
    {
      title: "AI/ML",
      level: "70%",
      icon: <FaRobot size={28} />,
      color: "bg-purple-600"
    },
    {
      title: "Data Analysis",
      level: "65%",
      icon: <FaChartBar size={28} />,
      color: "bg-indigo-600"
    },
    {
      title: "Database",
      level: "60%",
      icon: <FaDatabase size={28} />,
      color: "bg-blue-800"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I'm proficient with.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              level={skill.level}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Always Learning New Technologies
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
            My passion for learning drives me to explore new tools and frameworks that can enhance my 
            projects and solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 