import React, { useState } from "react";

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: 1, // Initial ID
    name: "",
    email: "",
    message: "",
    phonenumber: "",
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
      phonenumber: "",
    });
  };

  return (
    <div style={{
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
        textAlign: 'center',
        flex: 1,
    }}>
      <h2 style={{
        fontSize: 30,
      }}>Submit Form</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <label style={{
          fontSize: 20,
          display: 'flex',
          alignContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'left',
          paddingTop: '10px',
          paddingBottom: '10px',
          flex: 1,
        }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              borderWidth: '2px',
              borderColor: 'black',
              borderRadius: '10px',
              flex: 1,
              width: '250px',
            }}
            required
          />
        </label>
        <br />
        <label style={{
          fontSize: 20,
          display: 'flex',
          alignContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'left',
          // paddingTop: '10px',
          paddingBottom: '10px',
          flex: 1,
        }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              borderWidth: '2px',
              borderColor: 'black',
              borderRadius: '10px',
              flex: 1,
              width: '250px',
            }}
            required
          />
        </label>
        <br />
        <label style={{
          fontSize: 20,
          display: 'flex',
          alignContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'left',
          // paddingTop: '10px',
          paddingBottom: '10px',
          flex: 1,
        }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              borderWidth: '2px',
              borderColor: 'black',
              borderRadius: '10px',
              flex: 1,
              width: '250px',
            }}
            required
          />
        </label>
        <br/>
        <label style={{
          fontSize: 20,
          display: 'flex',
          alignContent: 'space-around',
          flexDirection: 'column',
          textAlign: 'left',
          // paddingTop: '10px',
          paddingBottom: '10px',
          flex: 1,
        }}>
          Phone Number:
          <input
            name="phonenumber"
            type="text"
            value={formData.phonenumber}
            onChange={handleChange}
            style={{
              borderWidth: '2px',
              borderColor: 'black',
              borderRadius: '10px',
              flex: 1,
              width: '250px',
            }}
            required
          />
        </label>
        <br />
        <button type="submit" style={{
          width: '150px',
          height: '75px',
          borderRadius: '10px',
          borderColor: 'green',
          borderWidth: '3px',
          fontSize: 20
        }}>Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
