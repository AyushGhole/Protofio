// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image with motion */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <img
            src="phto.jpg"
            alt="Ayush Ghole"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </motion.div>

        {/* About Text with motion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi! I’m <span className="font-semibold">Ayush Ghole</span>, a
            passionate and driven
            <span className="font-semibold"> Full-Stack Developer</span> with a
            knack for building efficient, user-friendly web applications.
          </p>
          <p className="text-lg mb-4">
            I enjoy transforming ideas into real-life products that make a
            difference. With a strong foundation in{" "}
            <span className="font-semibold">
              React, Node.js, and modern JavaScript frameworks
            </span>
            , I love solving challenging problems and continually expanding my
            skill set.
          </p>
          <p className="text-lg mb-4">
            Apart from coding, I enjoy contributing to open-source projects,
            collaborating with diverse teams, and staying up-to-date with the
            latest industry trends. My goal is to create impactful digital
            experiences that help people and businesses grow.
          </p>
          <p className="text-lg">
            Let’s connect and build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
