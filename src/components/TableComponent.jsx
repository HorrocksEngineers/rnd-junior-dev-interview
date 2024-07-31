import React from "react";

const TableComponent = ({ data }) => {
  return (
    <div>
      <h2 style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 30,
        paddingTop: '25px',
      }}>Submitted Data Table</h2>
      <table style={{
        display: 'flex',
        justifyContent: 'center',
        borderCollapse: 'collapse',
        borderWidth: '2px',
        flexDirection: 'column',
      }}>
        <thead style={{
          display: 'flex',
          justifyContent: 'center',
          borderCollapse: 'collapse',
          borderWidth: '2px',
          borderColor: 'red',
        }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          {data.map((item, index) => (
            <tr key={index} style={{
              padding: '10px',
            }}>
              <td style={{
                padding: '10px',
                borderWidth: '2px',
              }}>{item.id}</td>
              <td style={{
                padding: '10px',
                borderWidth: '2px',
              }}>{item.name}</td>
              <td style={{
                padding: '10px',
                borderWidth: '2px',
              }}>{item.email}</td>
              <td style={{
                padding: '10px',
                borderWidth: '2px',
              }}>{item.message}</td>
              <td style={{
                padding: '10px',
                borderWidth: '2px',
              }}>{item.phonenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
