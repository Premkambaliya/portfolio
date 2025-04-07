import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Server,
  Database,
  Globe,
  Wrench,
  PenTool,
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      id: "anime-world-fullstack",
      title: "Anime World Fullstack",
      description: "A full-stack anime streaming platform built with React, Node.js, and MongoDB",
      youtubeLink: "https://youtu.be/EYL2CTwX8uU?si=CsCxepVzvaWyuMSF", // Placeholder, replace with actual video
      githubLink: "https://github.com/username/anime-world-fullstack",
      demoLink: "https://demo-link.com/anime-world",
      category: "FullStack",
    },
    {
      id: "myshop",
      title: "MyShop",
      description: "A full-stack online shopping platform with React, Node.js, and Express",
      youtubeLink: "https://www.youtube.com/embed/3tDrXGLoRwM", // Placeholder, replace with actual video
      githubLink: "https://github.com/username/myshop",
      demoLink: "https://shop-mrlt.vercel.app/",
      category: "FullStack",
    },
    {
      id: "crunchyroll-clone",
      title: "Crunchyroll Clone",
      description: "A frontend clone of Crunchyroll's anime streaming interface using React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/crunchyroll-clone",
      demoLink: "https://crunchyroll-07ll.onrender.com/",
      category: "Frontend",
    },
    {
      id: "ajio-clone",
      title: "Ajio Clone",
      description: "A frontend clone of Ajio's e-commerce platform built with React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/ajio-clone",
      demoLink: "https://demo-link.com/ajio",
      category: "Frontend",
    },
    {
      id: "when-in-city",
      title: "When in City",
      description: "A frontend travel guide app for city exploration using JavaScript and React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/when-in-city",
      demoLink: "https://when-in-city.onrender.com",
      category: "Frontend",
    },
    {
      id: "fastack",
      title: "Fastack",
      description: "A frontend task management app built with React and Tailwind CSS",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/fastack",
      demoLink: "https://fastrack.onrender.com/",
      category: "Frontend",
    },
    {
      id: "calculator",
      title: "Calculator",
      description: "A responsive calculator app built with JavaScript and CSS",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/calculator",
      demoLink: "https://demo-link.com/calculator",
      category: "Frontend",
    },
    {
      id: "static-ludo-board",
      title: "Static Ludo Board",
      description: "A static Ludo board UI built with HTML and CSS",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/static-ludo-board",
      demoLink: "https://demo-link.com/static-ludo-board",
      category: "Frontend",
    },
    {
      id: "spotify-clone",
      title: "Spotify Clone",
      description: "A frontend clone of Spotify's music streaming interface using React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/spotify-clone",
      demoLink: "https://task-rouge-two.vercel.app/",
      category: "Frontend",
    },
    {
      id: "youtube-clone",
      title: "YouTube Clone",
      description: "A frontend clone of YouTube's video streaming interface using React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/youtube-clone",
      demoLink: "https://youtubereact-indol.vercel.app/",
      category: "Frontend",
    },
    {
      id: "static-sudoku",
      title: "Static Sudoku",
      description: "A static Sudoku board UI built with HTML and CSS",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/static-sudoku",
      demoLink: "https://demo-link.com/static-sudoku",
      category: "Frontend",
    },
    {
      id: "2048-game",
      title: "2048",
      description: "A classic 2048 number puzzle game built with JavaScript With full responsive",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/2048-game",
      demoLink: "https://demo-link.com/2048",
      category: "Games",
    },
    {
      id: "snake-game",
      title: "Snake Game",
      description: "A retro Snake game developed using JavaScript and HTML5 Canvas",
      youtubeLink: "https://www.youtube.com/watch?v=SS-Vr2tTSdQ", // Updated with your YouTube link
      githubLink: "https://github.com/username/snake-game",
      demoLink: "https://snack-game-swart.vercel.app/", // Fixed typo: "snack-game" to match your intent
      category: "Games",
    },
    {
      id: "chess-game",
      title: "Chess",
      description: "An interactive Chess game with AI opponent built with React",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/chess-game",
      demoLink: "https://chess-game-mu-three.vercel.app/",
      category: "Games",
    },
    {
      id: "instagram-redesign",
      title: "Instagram Redesign",
      description: "A modern UI/UX redesign of Instagram's interface in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/instagram-redesign",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "anime-world-figma",
      title: "Anime World Design",
      description: "A vibrant UI design for an anime streaming platform in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/anime-world",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "ludo-design",
      title: "Ludo App Design",
      description: "A playful and intuitive UI design for a Ludo game app in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/ludo-design",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-2&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "fast-shopping",
      title: "Fast Shopping",
      description: "A sleek e-commerce UI design for quick shopping in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/fast-shopping",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=0-1&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "coding-gita",
      title: "Coding Gita",
      description: "A clean UI design for a coding education platform in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/coding-gita",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "indian-gov-design",
      title: "Indian Government Websites and Apps",
      description: "A user-friendly redesign of Indian government digital interfaces in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/indian-gov-design",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "scanner-design",
      title: "Scanner App Design",
      description: "A minimalist UI design for a document scanner app in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/scanner-design",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-5&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "roadhelp-design",
      title: "RoadHelp",
      description: "A UI design for a roadside assistance app in Figma",
      youtubeLink: "https://www.youtube.com/embed/VIDEO_ID_HERE", // Replace with actual video ID
      githubLink: "https://github.com/username/roadhelp-design",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-8&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter);

  const skillsData = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["MongoDB"],
    },
    {
      category: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      category: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-red-500" />,
      skills: ["Git", "GitHub", "Vercel"],
    },
    {
      category: "UI/UX",
      icon: <PenTool className="w-6 h-6 text-pink-500" />,
      skills: ["Figma"],
    },
  ];

  return (
    <div className={`min-h-screen bg-white ${darkMode ? 'dark bg-accent' : ''}`}>
      {/* Navbar */}
      <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="home" smooth={true} className="text-2xl font-bold text-accent cursor-pointer">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="education">Education</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-accent" />
              ) : (
                <Menu className="w-6 h-6 text-accent" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute w-full bg-white shadow-lg"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                <MobileNavLink to="about" onClick={toggleMenu}>About</MobileNavLink>
                <MobileNavLink to="skills" onClick={toggleMenu}>Skills</MobileNavLink>
                <MobileNavLink to="projects" onClick={toggleMenu}>Projects</MobileNavLink>
                <MobileNavLink to="education" onClick={toggleMenu}>Education</MobileNavLink>
                <MobileNavLink to="contact" onClick={toggleMenu}>Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Slide in from the left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
          Hi I'm <span className="text-primary">Prem Kambaliya</span>
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6">
          I'm{' '}
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                'A Passionate Developer',
                2000,
                'Frontend Magician',
                2000,
                'API Mastermind',
                2000,
                'Design Hacker',
                2000,
                'Syntax Ninja',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-xl text-text mb-8">
          Turning ideas into reality through code and design
        </p>
        <div className="flex space-x-4">
          <SocialLink href="https://github.com/Premkambaliya" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/premkambaliya/" icon={<Linkedin />} />
          <SocialLink href="mailto:premkambaliya1@gmail.com" icon={<Mail />} />
        </div>
      </motion.div>

      {/* Right Side: Photo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center md:justify-end"
      >
        <img
          src="https://via.placeholder.com/300x400" // Placeholder image; replace with your photo URL
          alt="Prem Kambaliya"
          className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-20 bg-white text-black">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {skillsData.map((skillCategory, index) => (
              <SkillCategoryCard
                key={index}
                category={skillCategory.category}
                icon={skillCategory.icon}
                skills={skillCategory.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'FullStack', 'Frontend', 'Games', 'Figma'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-accent hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    youtubeLink={project.youtubeLink}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle>Education</SectionTitle>
          <div className="max-w-4xl mx-auto space-y-8">
            <EducationCard
              degree="B.Tech in Computer Science"
              institution="CodingGita x Rai University"
              year="2024 - 2028"
              details={[
                "CGPA: 9.76/10",
                "Currently pursuing a Bachelor's degree in Computer Science at Rai University, Ahmedabad (First Year). Exploring core subjects Like programming, data structures, and algorithms while building a strong foundation in problem-solving and analytical thinking. Engaging in coursework and projects to enhance my understanding of computer systems and software development.",
              ]}
            />
            <EducationCard
              degree="Higher Secondary (12th)"
              institution="The Imperial Science School"
              year="2023-24"
              details={[
                "Percentage: 88%",
                "JEE Main: 72 percentile",
                "I secured 99 marks in Mathematics, showcasing strong analytical and problem-solving skills, 88 marks in Chemistry, reflecting a solid understanding of chemical concepts, and 77 marks in Physics, demonstrating proficiency in fundamental principles and logical reasoning",
              ]}
            />
            <EducationCard
              degree="Secondary (10th)"
              institution="Sorath International School"
              year="2021-22"
              details={["Percentage: 82.5%"]}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>About Me</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <p className="text-lg text-text mb-6">
                Hello! I'm Kambaliya Prem, a passionate Full-Stack Developer & UI/UX Designer with a love for creating sleek, user-friendly, and high-performance web applications.
              </p>
              <p className="text-lg text-text mb-6">
                My expertise lies in React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. I thrive on solving complex problems and crafting intuitive UI designs that not only look great but also deliver seamless user experiences.
              </p>
              <p className="text-lg text-text mb-6">
                Beyond coding, I enjoy experimenting with new technologies, contributing to open-source projects, and exploring the latest design trends. Apart from coding, I am a national player in archery, and I also enjoy playing football, mobile gaming, and listening to music. You'll often find me sketching ideas, gaming, or traveling to find inspiration for my next big project.
              </p>
              <p className="text-lg text-text mb-8">
                I'm always excited to collaborate on innovative projects—let's build something amazing together!
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1Y7LF0rnP5rH79w_PZ-_eysI-zrtyyqfI"
                className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-40 min-w-max"
                download
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Contact Me</SectionTitle>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    className="text-text hover:text-primary transition-colors cursor-pointer"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    onClick={onClick}
    className="block text-text hover:text-primary transition-colors cursor-pointer"
  >
    {children}
  </Link>
);

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 text-accent hover:bg-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-center text-accent mb-12">{children}</h2>
);

const SkillCategoryCard = ({ category, icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-lg font-semibold text-black">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, youtubeLink, githubLink, demoLink }) => {
  // Convert YouTube watch URL to embed URL if necessary
  const embedUrl = youtubeLink.includes('watch?v=')
    ? youtubeLink.replace('watch?v=', 'embed/').split('&')[0]
    : youtubeLink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="w-full h-48">
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={`${title} YouTube Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="object-cover"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
        <p className="text-text mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:text-primary/80"
          >
            <Code className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:text-primary/80"
          >
            <Globe className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const EducationCard = ({ degree, institution, year, details }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
  >
    <h3 className="text-xl font-semibold text-accent mb-2">{degree}</h3>
    <h4 className="text-lg text-primary mb-2">{institution}</h4>
    <p className="text-text mb-4">{year}</p>
    <ul className="list-disc list-inside space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="text-text">{detail}</li>
      ))}
    </ul>
  </motion.div>
);

export default App;