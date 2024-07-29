import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmitForm = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <div>
      <h1>Front-End Technical</h1>
      <FormComponent onSubmit={handleSubmitForm} />
      <TableComponent data={submittedData} />
    </div>
  );
};

export default App;
