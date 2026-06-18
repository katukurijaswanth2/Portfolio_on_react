import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const phoneNumber = "916303875815";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! My name is ${form.firstName} ${form.lastName}.\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-wrapper">
      {/* Big heading */}
      <h1 className="contact-heading">Contact me</h1>

      <div className="contact-body">
        {/* Left info column */}
        <div className="contact-info">
          <p>katukurijaswanth2@gmail.com</p>
          <p> +91 6303875815
          </p>
          <p>
            kothagudem<br />
            Telangana, INDIA
          </p>
        </div>

        {/* Right form column */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name </label>
            <div className="name-row">
              <div className="name-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="name-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message </label>
            <input
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;