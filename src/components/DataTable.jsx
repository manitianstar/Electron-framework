import React, { useState } from "react";

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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">JSON Data Table</h1>
      <div className="flex justify-center mb-4 gap-4">
        <button
          onClick={handleWriteFile}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Write JSON File
        </button>
        <button
          onClick={handleReadFile}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Read and Render JSON
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Product Title</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Price (INR)</th>
              <th className="border border-gray-300 px-4 py-2 text-center">SKU</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.product_id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{item.product_id}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
