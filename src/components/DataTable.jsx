import React, { useState } from "react";
import './DataTable.css'; // Import the CSS file

const DataTable = () => {
  const [data, setData] = useState([]);

  const handleWriteFile = async () => {
    try {
      const sampleData = [
        {
          product_id: 654321,
          title: "Product A",
          price: 15000.0,
          sku: "1307A 0101000",
        },
      ];
      const response = await window.api.writeFile(sampleData);
      alert(response);
    } catch (error) {
      console.error("Error writing file:", error);
    }
  };

  const handleReadFile = async () => {
    try {
      const fileData = await window.api.readFile();
      setData(fileData);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  return (
    <div className="container">
      <h1>JSON Data Table</h1>
      <div className="button-container">
        <button
          onClick={handleWriteFile}
          className="bg-blue-500"
        >
          Write JSON File
        </button>
        <button
          onClick={handleReadFile}
          className="bg-green-500"
        >
          Read and Render JSON
        </button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Title</th>
              <th>Price (INR)</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.product_id}>
                <td>{item.product_id}</td>
                <td>{item.title}</td>
                <td className="price">{item.price.toFixed(2)}</td>
                <td>{item.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
