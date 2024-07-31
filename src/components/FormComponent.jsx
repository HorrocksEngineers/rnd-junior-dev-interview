import React, { useState } from "react";
import "../App.css";

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: 1, // Initial ID
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form fields
    setFormData({
      id: formData.id + 1, // Increment ID for next entry
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  return (
    <div className="main-form">
      <h2 className="h2-style">Submit Form</h2>
      <form className="form-style" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button className="button-style" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
