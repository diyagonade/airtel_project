import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactType: 'sales',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Get in Touch
          </h2>
          <p className="contact-subtitle">
            Ready to transform your location strategy? Let's discuss your requirements.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">

            {/* Name */}
            <div className="form-group">
              <label className="form-label">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email ID *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@company.com"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Contact Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Company */}
            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your company name"
              />
            </div>

            {/* Dropdown */}
            <div className="form-group">
              <label className="form-label">
                Who would you like to contact? *
              </label>
              <select
                name="contactType"
                value={formData.contactType}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="sales" className="select-option-primary">
                  Sales
                </option>
                <option value="support">Customer Support</option>
                <option value="talent">Talent Management</option>
                <option value="marketing">Marketing & PR</option>
                <option value="privacy">Privacy Team</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group form-group-full">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit */}
            <div className="form-group form-group-full">
              <button
                type="submit"
                className="submit-button"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;