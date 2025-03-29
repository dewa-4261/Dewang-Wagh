import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity, FaAward, FaUserTie } from 'react-icons/fa';

const ExperienceCard = ({ title, company, date, description, icon, index, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex gap-4 md:gap-6 ${isLeft ? 'md:flex-row-reverse text-right' : 'md:flex-row text-left'}`}
    >
      <div className="hidden md:flex md:w-1/2"></div>
      
      <div className="flex-shrink-0 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-500"></div>
      </div>
      
      <div className="md:w-1/2">
        <div className="bg-white dark:bg-tertiary p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{company}</p>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">{date}</p>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "Step One Step Ahead",
      date: "June 2023 - August 2023",
      description: "Worked on developing web applications and implementing machine learning algorithms for various projects. Collaborated with a team of developers to deliver solutions on time.",
      icon: <FaBriefcase size={20} />
    },
    {
      title: "Technical Co-Head",
      company: "CIIC",
      date: "April 2023 - Present",
      description: "Leading technical initiatives, organizing tech events, and mentoring junior members. Responsible for implementing new technologies and overseeing project development.",
      icon: <FaUserTie size={20} />
    },
    {
      title: "Computer Engineering Student",
      company: "K.C. College of Engineering",
      date: "2022 - Present",
      description: "Pursuing a degree in Computer Engineering with a focus on artificial intelligence, machine learning, and web development technologies.",
      icon: <FaUniversity size={20} />
    },
    {
      title: "College Council Member",
      company: "K.C. College of Engineering",
      date: "2022 - 2023",
      description: "Served as a member of the college council, participating in decision-making processes and organizing events to enhance student experience.",
      icon: <FaAward size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and notable achievements.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line - only visible on mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-500"></div>
          
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                {...exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My experiences have shaped my problem-solving abilities and technical skills. 
            I'm continuously seeking new opportunities to grow and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 