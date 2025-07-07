// src/components/Experience.jsx

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Systemic Altruism",
      date: "Mar 2025 - Jun 2025",
      description:
        "Built dynamic UI components using Tailwind CSS and shadcn/ui, ensuring responsive design and user-friendly experience. Developed and deployed real-time chat functionality using React, Node.js, and Socket.IO, supporting features like audio messages, file uploads, typing indicators, and read receipts. Implemented audio message recording, upload, and playback system with media APIs, backend integration, and database storage. Collaborated with backend services to handle file uploads (images/audio) securely and stored metadata in a structured database schema. Utilized MongoDB to manage chat history, user activity, and organization data. Designed and integrated organization and channel management system, enabling users to create, search, and manage categorized chat channels. Wrote modular, maintainable code and participated in code reviews to ensure quality and consistency.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Sockets",
        "WebRTC",
      ],
      logo: "sa.jpg", // ✅ Add your logo path here
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center">
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              {/* ✅ Logo and title flex layout */}
              <div className="flex items-center space-x-4 mb-3">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-indigo-600 font-medium">
                    {exp.company} — {exp.date}
                  </p>
                </div>
              </div>

              <p className="mb-4 text-gray-700">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
