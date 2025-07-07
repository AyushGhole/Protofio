// src/components/Projects.jsx

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const projects = [
    {
      title: "Wonderlust",
      description:
        "Wanderlust Web is a dynamic and user-friendly travel accommodation platform, similar to Airbnb, designed for explorers seeking unique stays and memorable experiences.",
      image: "wonderlust.png",
      link: "https://wonderlust-in.onrender.com/listing",
      tech: "React, Tailwind CSS, MERN(MVC Architecture)",
    },
    {
      title: "MeetCall",
      description:
        "MeetCall.in is a modern video call web application designed for seamless real-time communication.",
      image: "meetcall.png",
      link: "https://meetvideocall.onrender.com/",
      tech: "Socket.IO,  Tailwind CSS, RESTful API, Material UI, Render,   Bootstrap, , WebRTC, MERN.",
    },
    {
      title: "PayWay.in",
      description:
        "This is PayWay.in — a payment gateway similar to Razorpay or PayPal, plus a virtual bank with account creation and banking facilities.",
      image: "payway.png",
      link: "https://payway-in.onrender.com/main",
      tech: "React, MVC Architecture, MERN",
    },
    {
      title: "Zerodha",
      description:
        "This is the Stock exchange and investment website for easily investing the customers asset into the trusted funds and stocks. Integrated real-time stock market data.",
      image: "zerodha.png",
      link: "https://zerodha-frontend-h6my.onrender.com/",
      tech: "MERN,Tailwind CSS",
    },
    {
      title: "ChatApp",
      description:
        "TA Real-time Chat Application built with MERN stack & Socket.io featuring secure authentication, instant messaging, and real-time update and see messages instantly. ",
      image: "chatapp.png",
      link: "https://sytemicaltruism.onrender.com/",
      tech: "MERN, Sockets, Tailwind Css",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center">
          Projects
        </motion.h2>

        {/* Navigation buttons */}
        <div className="swiper-button-prev text-gray-600"></div>
        <div className="swiper-button-next text-gray-600"></div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
