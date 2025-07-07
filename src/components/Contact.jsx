// src/components/Contact.jsx

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6">
          Let’s Connect!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 text-lg text-gray-600">
          I’m always open to exciting opportunities, collaboration, or just a
          good tech chat. Drop me a line!
        </motion.p>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* ✅ Email */}
          <a
            href="mailto:ayushghole@gmail.com"
            className="text-indigo-600 hover:text-indigo-800 text-3xl"
            aria-label="Email">
            <FaEnvelope />
          </a>

          {/* ✅ LinkedIn */}
          <a
            href="www.linkedin.com/in/ayush-ghole-0b4391262/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-3xl"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          {/* ✅ GitHub */}
          <a
            href="https://github.com/ayushghole"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-3xl"
            aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        {/* ✅ Email button */}
        <a
          href="mailto:ayushghole@gmail.com"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition">
          Email Me
        </a>

        {/* ✅ Optional fallback text */}
        <p className="mt-4 text-gray-600">
          or email me directly at:{" "}
          <span className="underline">ayushghole@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
