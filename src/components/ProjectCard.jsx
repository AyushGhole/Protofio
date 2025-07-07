// src/components/ProjectCard.jsx

import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link, tech }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="block bg-white rounded-lg ms-5 shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-54 object-cover"
        style={{ borderBottomLeftRadius: "none" }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500">{tech}</p>
      </div>
    </motion.a>
  );
}
