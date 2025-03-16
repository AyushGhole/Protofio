import React from "react";

function Projects() {
  return (
    <div className="container mt-5 mb-5 ">
      <h1 className="text-center text-gradient fw-bold mb-5 mt-5 p-3 ">
        Projects
      </h1>

      {/* Project List */}
      {projectsData.map((project, index) => (
        <div
          className={`row align-items-center p-3 mt-5 mb-5 gap-5 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          key={index}>
          {/* Video Section */}
          <div className="col-lg-5 text-center">
            <iframe
              width="100%"
              height="360"
              className="rounded-4 shadow-lg"
              src={project.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>

          {/* Text Section */}
          <div className="col-lg-6 p-5  mt-5 mb-5">
            <h2 className="fw-bold text-dark">{project.title}</h2>
            <p className="fs-5 text-secondary">{project.description}</p>
            <div className="mt-4">
              <a
                href={project.demoUrl}
                className="btn btn-primary me-4 px-4 py-2 fw-semibold shadow">
                Try Demo <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <a
                href={project.githubUrl}
                className="btn btn-outline-dark px-4 py-2 fw-semibold">
                Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Project Data
const projectsData = [
  {
    title: "PayWay",
    description:
      "PayWay is a secure payment gateway, similar to Razorpay and PayPal. It also functions as a virtual bank, offering account creation and full banking features.",
    videoUrl: "https://www.youtube.com/embed/XHy9QOcM2gA?si=-N2UhPeaRxHoBw12",
    demoUrl: "https://payway-in.onrender.com/main",
    githubUrl: "https://github.com/AyushGhole/PayWay",
  },
  {
    title: "Wonderlust",
    description:
      "A travel & rental website designed for couples and solo travelers. Features high-quality accommodation listings, detailed amenities, and booking options.",
    videoUrl: "https://www.youtube.com/embed/QUu4Kn83EOY?si=0xyo2jreFomLIhNG",
    demoUrl: "https://wonderlust-in.onrender.com/listing",
    githubUrl: "https://github.com/AyushGhole/Airbnb-",
  },
  {
    title: "MeetVideoCall",
    description:
      "A real-time video calling platform built with WebRTC. Offers one-on-one and group calls, screen sharing, in-call chat, and secure meeting links.",
    videoUrl: "https://www.youtube.com/embed/GVZnS_creeQ?si=kRf1GfLz6UFshBMK",
    demoUrl: "https://meetvideocall.onrender.com/",
    githubUrl: "https://github.com/AyushGhole/MeetVideoCall",
  },
];

export default Projects;
