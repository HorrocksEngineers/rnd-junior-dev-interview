import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import "./App.css";

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmitForm = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <div className="main-container">
      <h1 className="h1-style">Front-End Technical</h1>
      <FormComponent onSubmit={handleSubmitForm} />
      <TableComponent data={submittedData} />
    </div>
  );
};

export default App;
