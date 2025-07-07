// src/components/Hero.jsx

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4">
        Hi, I’m Ayush Ghole
      </motion.h1>

      {/* Typing effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl mb-8">
        <ReactTyped
          strings={[
            "Full Stack Developer/Aspiring Software Developer",
            "Electronics And Computer Science Sudent.",
            "Ex-Intern @Systemic Altruism.",
            "Speciality MERN Stack Developer.",
            "Active learner/researcher",
            "I build awesome websites.",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </motion.div>

      {/* Call to action button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-100 transition">
        Contact Me
      </motion.a>
    </section>
  );
}
