import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../App.css";
import GetStartedForm from "../components/contactForm"; // Import the form component

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container border-bottom text-center p-5 mt-5 mb-5">
      <div className="row align-items-center mt-5">
        {/* Left Section - Text Content */}
        <div className="col-lg-6 text-lg-start text-center">
          <h1 className="fw-bold display-4 text-gradient">Ayush Ghole</h1>

          {/* Typing Effect */}
          <p className="fs-4 text-secondary">
            <Typewriter
              words={[
                "Electronics & Computer Science Student",
                "Certified Full Stack Developer",
                "MERN Stack Specialist",
                "Current CGPA: 9.29",
                "Skilled Web Developer",
                "Willing to contribute my skills to professional settings.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          {/* Get Started Button */}
          <button
            className="btn btn-primary px-4 py-2 fs-5 mt-4 shadow"
            onClick={() => setShowModal(true)}>
            Get Started
          </button>
        </div>

        {/* Right Section - Profile Image */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img
            src="pic.jpg"
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            width="450"
            height="450"
          />
        </div>
      </div>

      {/* Render Modal Only When Button is Clicked */}
      {showModal && <GetStartedForm setShowModal={setShowModal} />}
    </div>
  );
};

export default Hero;
