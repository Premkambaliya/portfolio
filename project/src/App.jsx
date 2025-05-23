
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import Myphoto from './assets/Photo.jpg';
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
  PenTool
} from 'lucide-react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      id: "anime-world-fullstack",
      title: "Anime World Fullstack",
      description: "A full-stack anime streaming platform built with React, Node.js, and MongoDB",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745082459/ovezvrhpyypbxspkohcf.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/anime_world",
      demoLink: "https://anime-world-frontend.vercel.app",
      category: "FullStack",
    },
    {
      id: "myshop",
      title: "MyShop",
      description: "A full-stack online shopping platform with React, Node.js, and Express",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192343/zydku5wwbnsexttflvki.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/Shop",
      demoLink: "https://shop-mrlt.vercel.app/",
      category: "FullStack",
    },
    {
      id: "crunchyroll-clone",
      title: "Crunchyroll Clone",
      description: "A frontend clone of Crunchyroll's anime streaming interface using React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192398/fbxheyj3vlv5q8hucxbq.png",
      year: "2023",
      githubLink: "https://github.com/Premkambaliya/Crunchyroll",
      demoLink: "https://crunchyroll-07ll.onrender.com/",
      category: "Frontend",
    },
    {
      id: "ajio-clone",
      title: "Ajio Clone",
      description: "A frontend clone of Ajio's e-commerce platform built with React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745082381/yn5kb68urodct0wk5jr2.png",
      year: "2023",
      githubLink: "https://github.com/Premkambaliya/AJIO",
      demoLink: "https://ajio-wqkr.vercel.app/",
      category: "Frontend",
    },
    {
      id: "when-in-city",
      title: "When in City",
      description: "A frontend travel guide app for city exploration using JavaScript and React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192418/cn1isteqd4suixmn48g9.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/When-in-City",
      demoLink: "https://when-in-city.onrender.com",
      category: "Frontend",
    },
    {
      id: "fastack",
      title: "Fastack",
      description: "A frontend task management app built with React and Tailwind CSS",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192468/wlju0jqkj9wtisvhple8.png",
      year: "2023",
      githubLink: "https://github.com/Premkambaliya/Fastrack",
      demoLink: "https://fastrack.onrender.com/",
      category: "Frontend",
    },
    {
      id: "spotify-clone",
      title: "Spotify Clone",
      description: "A frontend clone of Spotify's music streaming interface using React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192500/d853fudjif0sefvpb9s2.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/Spotify",
      demoLink: "https://task-rouge-two.vercel.app/",
      category: "Frontend",
    },
    {
      id: "youtube-clone",
      title: "YouTube Clone",
      description: "A frontend clone of YouTube's video streaming interface using React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192526/waplkwj60zsfhn5yevq8.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/Youtube",
      demoLink: "https://youtubereact-indol.vercel.app/",
      category: "Frontend",
    },
    {
      id: "static-sudoku",
      title: "Static Sudoku",
      description: "A static Sudoku board UI built with HTML and CSS",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745084161/lmsrcqmfoeh63fv4bhhv.png",
      year: "2023",
      githubLink: "https://github.com/Premkambaliya/SUDOKU",
      demoLink: "https://sudokucg.netlify.app/",
      category: "Frontend",
    },
    {
      id: "2048-game",
      title: "2048",
      description: "A classic 2048 number puzzle game built with JavaScript With full responsive",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081736/qsupsr3cdbivmk3iyagt.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/2048-Game",
      demoLink: "https://2048game-opal.vercel.app/",
      category: "Games",
    },
    {
      id: "snake-game",
      title: "Snake Game",
      description: "A retro Snake game developed using JavaScript and HTML5 Canvas",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192552/mhnscynznpyvbgllqjhv.png",
      year: "2023",
      githubLink: "https://github.com/Premkambaliya/Snack-Game",
      demoLink: "https://snack-game-swart.vercel.app/",
      category: "Games",
    },
    {
      id: "chess-game",
      title: "Chess",
      description: "An interactive Chess game with AI opponent built with React",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1744192579/qi3rnttgwfe5jz0fv9wi.png",
      year: "2024",
      githubLink: "https://github.com/Premkambaliya/Chess-Game",
      demoLink: "https://chess-game-mu-three.vercel.app/",
      category: "Games",
    },
    {
      id: "instagram-redesign",
      title: "Instagram Redesign",
      description: "A modern UI/UX redesign of Instagram's interface in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081148/sy3tjclbrvyvsctqlk0s.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-3&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "anime-world-figma",
      title: "Anime World Design",
      description: "A vibrant UI design for an anime streaming platform in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081078/pemxndt7vrjau3qudwzf.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-9&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "ludo-design",
      title: "Ludo App Design",
      description: "A playful and intuitive UI design for a Ludo game app in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081187/boudja9vw37eake0zndn.png",
      year: "2023",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-2&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "fast-shopping",
      title: "Fast Shopping",
      description: "A sleek e-commerce UI design for quick shopping in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081340/i4t8gudt5ttfpjqrbqk9.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=0-1&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "coding-gita",
      title: "Coding Gita",
      description: "A clean UI design for a coding education platform in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081418/mhyff1jnzq1couvvukvu.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-5&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "indian-gov-design",
      title: "Indian Government Websites and Apps",
      description: "A user-friendly redesign of Indian government digital interfaces in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081442/mtc7ky2ozbutzazw5lbx.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=1-10&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "scanner-design",
      title: "Scanner App Design",
      description: "A minimalist UI design for a document scanner app in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081480/qha7jhhskalabcipm5dy.png",
      year: "2024",
      demoLink: "https://www.figma.com/design/DTPG3EnZsGCmoRPZSl4mS2/Untitled?node-id=2-5&t=yVzUmRSx8AwNhrrV-1",
      category: "Figma",
    },
    {
      id: "roadhelp-design",
      title: "RoadHelp",
      description: "A UI design for a roadside assistance app in Figma",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1745081521/vsmid7jolub5syrnv3uc.png",
      year: "2024",
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
      category: "Tools",
      icon: <Wrench className="w-6 h-6 text-red-500" />,
      skills: ["Git", "GitHub", "Vercel"],
    },
    {
      category: "UI/UX",
      icon: <PenTool className="w-6 h-6 text-pink-500" />,
      skills: ["Figma"],
    },
  ];

  const certificates = [
    {
      id: "react-js-cert",
      title: "C Language Certification",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822335/jicvyt7hahfmpmckvk80.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822335/jicvyt7hahfmpmckvk80.jpg",
    },
    {
      id: "node-js-cert",
      title: "JavaScript Certification",
      image: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822334/hu2hnelasdfkqvcquxc7.jpg",
      link: "https://res.cloudinary.com/dczue3n9b/image/upload/v1746822334/hu2hnelasdfkqvcquxc7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      <nav className="fixed w-full z-40 bg-gray-800/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="home" smooth={true} className="text-2xl font-bold text-primary cursor-pointer">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="certificates">Certificates</NavLink>
              <NavLink to="education">Education</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
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
              className="md:hidden absolute w-full bg-gray-800 shadow-lg"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                <MobileNavLink to="about" onClick={toggleMenu}>About</MobileNavLink>
                <MobileNavLink to="skills" onClick={toggleMenu}>Skills</MobileNavLink>
                <MobileNavLink to="projects" onClick={toggleMenu}>Projects</MobileNavLink>
                <MobileNavLink to="certificates" onClick={toggleMenu}>Certificates</MobileNavLink>
                <MobileNavLink to="education" onClick={toggleMenu}>Education</MobileNavLink>
                <MobileNavLink to="contact" onClick={toggleMenu}>Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={Myphoto}
                alt="Prem Kambaliya"
                className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-lg shadow-lg mr-20 border-4 border-gray-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
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

      <section id="projects" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'FullStack', 'Frontend', 'Games', 'Figma'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-all ${filter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
              >
                {category}
              </motion.button>
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
                    image={project.image}
                    year={project.year}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-section-bg">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle>Certificates</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20">
            {certificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                title={certificate.title}
                image={certificate.image}
                link={certificate.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionTitle>Education</SectionTitle>
          <div className="max-w-4xl mx-auto space-y-8">
            <EducationCard
              degree="B.Tech in Computer Science"
              institution="CodingGita x Rai University"
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

      <section id="about" className="py-20 bg-section-bg relative">
        <div className="container mx-auto px-6">
          <SectionTitle>About Me</SectionTitle>
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 right-0 w-16 h-16 text-primary opacity-50"
            >
              <Code />
            </motion.div>
            <motion.div className="bg-gray-700 rounded-lg p-8 shadow-sm border border-gray-600">
              {[
                "Hello! I'm Kambaliya Prem, a passionate Full-Stack Developer & UI/UX Designer with a love for creating sleek, user-friendly, and high-performance web applications.",
                "My expertise lies in React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. I thrive on solving complex problems and crafting intuitive UI designs that not only look great but also deliver seamless user experiences.",
                "Beyond coding, I enjoy experimenting with new technologies, contributing to open-source projects, and exploring the latest design trends. Apart from coding, I am a national player in archery, and I also enjoy playing football, mobile gaming, and listening to music. You'll often find me sketching ideas, gaming, or traveling to find inspiration for my next big project.",
                "I'm always excited to collaborate on innovative projects—let's build something amazing together!",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false }}
                  className="text-lg text-text mb-6"
                >
                  {text}
                </motion.p>
              ))}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1Y7LF0rnP5rH79w_PZ-_eysI-zrtyyqfI"
                className="flex items-center space-x-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-40 min-w-max"
                download
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                viewport={{ once: false }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionTitle>Contact Me</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto"
          >
            <form
              action="https://formspree.io/f/xblokyka"
              method="POST"
              className="space-y-6"
            >
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text peer"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.label
                  className="absolute left-4 top-3 text-gray-400 peer-focus:-top-6 peer-focus:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Name
                </motion.label>
              </div>
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text peer"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.label
                  className="absolute left-4 top-3 text-gray-400 peer-focus:-top-6 peer-focus:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.label>
              </div>
              <div className="relative">
                <motion.textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text peer"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.label
                  className="absolute left-4 top-3 text-gray-400 peer-focus:-top-6 peer-focus:text-primary peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Message
                </motion.label>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const NavLink = ({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="relative"
  >
    <Link
      to={to}
      smooth={true}
      className="text-text hover:text-primary transition-colors cursor-pointer"
    >
      {children}
    </Link>
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-primary"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.2 }}
    />
  </motion.div>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative"
  >
    <Link
      to={to}
      smooth={true}
      onClick={onClick}
      className="block text-text hover:text-primary transition-colors cursor-pointer"
    >
      {children}
    </Link>
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-primary"
      initial={{ width: 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.2 }}
    />
  </motion.div>
);

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-primary hover:text-white transition-colors"
    whileHover={{ scale: 1.2 }}
  >
    {icon}
  </motion.a>
);

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
    className="text-3xl font-bold text-center text-accent mb-12"
  >
    {children}
  </motion.h2>
);

const SkillCategoryCard = ({ category, icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-600"
  >
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h3 className="text-lg font-semibold text-accent">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="px-3 py-1 bg-gray-600 text-text rounded-full text-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, image, year, githubLink, demoLink }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-600"
  >
    <div className="w-full h-48">
      <img
        src={image}
        alt={`${title} Preview`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
      <p className="text-text mb-2">{description}</p>
      <p className="text-text mb-4">Year: {year}</p>
      <div className="flex space-x-4">
        {githubLink && (
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-primary hover:text-primary-dark"
            whileHover={{ x: 5 }}
          >
            <Code className="w-4 h-4" />
            <span>Code</span>
          </motion.a>
        )}
        <motion.a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-primary hover:text-primary-dark"
          whileHover={{ x: 5 }}
        >
          <Globe className="w-4 h-4" />
          <span>Live Demo</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const CertificateCard = ({ title, image, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-600"
  >
    <div className="w-full h-48">
      <img
        src={image}
        alt={`${title} Certificate`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-accent mb-2">{title}</h3>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-primary hover:text-primary-dark"
        whileHover={{ x: 5 }}
      >
        <Globe className="w-4 h-4" />
        <span>View Certificate</span>
      </motion.a>
    </div>
  </motion.div>
);

const EducationCard = ({ degree, institution, year, details }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-600"
  >
    <h3 className="text-xl font-semibold text-accent mb-2">{degree}</h3>
    <h4 className="text-lg text-primary mb-2">{institution}</h4>
    {year && <p className="text-text mb-4">{year}</p>}
    <ul className="list-disc list-inside space-y-2">
      {details.map((detail, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="text-text"
        >
          {detail}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default App;
