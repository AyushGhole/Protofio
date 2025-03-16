import React, { useState } from "react";
import Swal from "sweetalert2";

const GetStartedForm = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors when typing
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Enter a valid 10-digit phone number.";
    }

    if (formData.address.trim().length === 0) {
      newErrors.address = "Address cannot be empty.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    // Show SweetAlert2 Success Message
    Swal.fire({
      title: "🎉 Thank You!",
      html: `<b>${formData.name}</b>, we have received your details.<br>Our team will contact you soon! 🚀`,
      icon: "success",
      confirmButtonText: "Great!",
      timer: 4000,
      timerProgressBar: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    setShowModal(false); // Close modal after submission
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4 glassmorphism">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold text-primary">Get Started</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-pill p-3"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-pill p-3"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </div>

                {/* Contact Number Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    className="form-control rounded-pill p-3"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                  {errors.contact && (
                    <p className="text-danger">{errors.contact}</p>
                  )}
                </div>

                {/* Address Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Address</label>
                  <textarea
                    name="address"
                    className="form-control rounded-3 p-3"
                    placeholder="Enter your address"
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    required></textarea>
                  {errors.address && (
                    <p className="text-danger">{errors.address}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    name="message"
                    className="form-control rounded-3 p-3"
                    placeholder="Enter your message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required></textarea>
                  {errors.message && (
                    <p className="text-danger">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill p-3 fw-semibold shadow-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={() => setShowModal(false)}></div>
    </>
  );
};

export default GetStartedForm;
