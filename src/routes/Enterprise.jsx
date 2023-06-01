import React, { useState } from "react";
import { Link } from "react-router-dom";

const EnterpriseDashboard = () => {
  return (
    <div className="block justify-center items-center h-64  mt-1">
      <div className="text-4xl font-bold tracking-tight text-gray-900 mt-6">
        Welcome to the Enterprise Dashboard
      </div>
      <div className="text-xl text-center  text-blue-900 ">
        <Link to="/messageEnt">Click here for Message Feature</Link>
      </div>
    </div>
  );
};

const ListofCustomers = () => {
  const [country, setCountry] = useState("");
  const [clientName, setClientName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setShowForm(false);
  };

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
    setShowForm(true);
  };

  return (
    <div className="p-4">
      <div className="mr-6 mt-5">
        <label
          htmlFor="country"
          className="block text-xl font-medium text-gray-700 mb-5"
        >
          List of Enterprise Partner
        </label>
        <select
          id="country"
          value={country}
          onChange={handleCountryChange}
          className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">-- Select Country --</option>
          <option value="india">India</option>
          <option value="singapore">Singapore</option>
          <option value="thailand">Thailand</option>
        </select>
      </div>

      {country && (
        <div className="mt-4">
          <label htmlFor="clientName" className="block mb-2">
            Name of Client:
          </label>
          <select
            id="clientName"
            value={clientName}
            onChange={handleClientNameChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">-- Select Name of Client --</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 1">Client 2</option>
            <option value="Client 1">Client 3</option>
            <option value="Client 1">Client 4</option>
          </select>
        </div>
      )}

      {showForm && (
        <div className="p-4 mt-4">
          <div className="border border-gray-300 rounded-lg shadow-lg p-6">
            <p>
              <strong>Full Name*:</strong> John Doe
            </p>
            <p>
              <strong>Email Address*:</strong> johndoe@example.com
            </p>
            <p>
              <strong>SELECT COUNTRY *:</strong> India
            </p>
            <p>
              <strong>STATE*:</strong> State
            </p>
            <p>
              <strong>CITY*:</strong> City
            </p>
            <p>
              <strong>Landmark:</strong> Landmark
            </p>
            <p>
              <strong>ZIP CODE:</strong> ZIP Code
            </p>
            <p>
              <strong>PROPERTY NO:</strong> Property Number
            </p>
            <p>
              <strong>STREET NAME:</strong> Street Name
            </p>
            <p>
              <strong>BUSINESS NAME*:</strong> ABC Corporation
            </p>
            <p>
              <strong>CATEGORY TYPE*:</strong> Housing Society
            </p>
            <p>
              <strong>Date of Activation*:</strong> Activation Date
            </p>
            <p>
              <strong>Solution Type *:</strong> Solution Type
            </p>
            <p>
              <strong>PHONE NUMBER:</strong> 123-456-7890
            </p>
            <p>
              <strong>Timings Schedule*:</strong> Timings Schedule
            </p>
            <p>
              <strong>Referral Code:</strong> Referral Code
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const UpdatePayments = () => {
  const [country, setCountry] = useState("");
  const [clientName, setClientName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setShowForm(false);
  };

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
    setShowForm(true);
  };
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div className="p-4">
      <div className="mr-6 mt-5">
        <label
          htmlFor="country"
          className="block text-xl font-medium text-gray-700 mb-5"
        >
          List of Update Payments
        </label>
        <select
          id="country"
          value={country}
          onChange={handleCountryChange}
          className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">-- Select Country --</option>
          <option value="india">India</option>
          {/* Add country options */}
        </select>
      </div>

      {country && (
        <div className="mt-4">
          <label htmlFor="clientName" className="block mb-2">
            Name of Client:
          </label>
          <select
            id="clientName"
            value={clientName}
            onChange={handleClientNameChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">-- Select Name of Client --</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 1">Client 2</option>
            <option value="Client 1">Client 3</option>
            <option value="Client 1">Client 4</option>
          </select>
        </div>
      )}

      {showForm && (
        <div className="mt-4">
          {uploadedFile && (
            <div className="mt-4">
              <h3>Upload Invoice PDF as per Month:</h3>
              <embed
                src={URL.createObjectURL(uploadedFile)}
                width="400"
                height="400"
                type="application/pdf"
              />
            </div>
          )}
          <div>
            <div className="mt-4">
              <input type="file" onChange={handleFileUpload} accept=".pdf" />
            </div>
            <button
              type="button"
              class="text-white mt-4 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const UpdateServicehistory = () => {
  const [country, setCountry] = useState("");
  const [clientName, setClientName] = useState("");
  const [seviceName, setSeviceName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [maintenanceData, setMaintenanceData] = useState([
    { date: "", time: "", engineer: "", problem: "" },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...maintenanceData];
    updatedData[index][name] = value;
    setMaintenanceData(updatedData);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setShowForm(false);
  };

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
    setShowForm(true);
  };

  const handleSeviceNameChange = (event) => {
    setSeviceName(event.target.value);
    setShowForm(true);
  };

  return (
    <div className="p-4">
      <div className="mr-6 mt-5">
        <label
          htmlFor="country"
          className="block text-xl font-medium text-gray-700 mb-5"
        >
          List of Update Service History
        </label>
        <select
          id="country"
          value={country}
          onChange={handleCountryChange}
          className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">-- Select Country --</option>
          <option value="india">India</option>
          {/* Add country options */}
        </select>
      </div>

      {country && (
        <div className="mt-4">
          <label htmlFor="clientName" className="block mb-2">
            Name of Client:
          </label>
          <select
            id="clientName"
            value={clientName}
            onChange={handleClientNameChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">-- Select Name of Client --</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 2">Client 2</option>
            <option value="Client 3">Client 3</option>
            <option value="Client 4">Client 4</option>
          </select>
        </div>
      )}

      {clientName && (
        <div className="mt-4">
          <label htmlFor="serviceName" className="block mb-2">
            Name of Service:
          </label>
          <select
            id="serviceName"
            value={seviceName}
            onChange={handleSeviceNameChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">-- Select Service Type--</option>
            <option value="Service 1">Electrical </option>
            <option value="Service 2">Carpenter </option>
            <option value="Service 3">Plumbing </option>
            <option value="Service 4">Computer </option>
            <option value="Service 5"> Cleaning </option>
          </select>
        </div>
      )}

      {showForm && (
        <div className="mt-4">
          <table className="border border-gray-300 rounded-lg shadow-lg p-4">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Maintenance Engineer</th>
                <th>Problem Fixed</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="date"
                      value={data.date}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="time"
                      value={data.time}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="engineer"
                      value={data.engineer}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="problem"
                      value={data.problem}
                      onChange={(e) => handleInputChange(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center my-4 items-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Enterprise = () => {
  const [activeSelection, setActiveSelection] = useState(null);

  const handleClick = (text) => {
    setActiveSelection(text);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`w-64 p-4 mx-auto border-2 mt-3 border-gray-900 cursor-pointer text-gray-900 text-center bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "Enterprise Dashboard" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleClick("Enterprise Dashboard")}
        >
          <h5 className="text-2xl font-bold text-gray-900">
            Enterprise Dashboard
          </h5>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-5">
          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "List of Customers" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("List of Customers")}
          >
            <h5 className="text-lg font-bold text-white">List of Customers</h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to see List of Customers
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update Payments " ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("Update Payments ")}
          >
            <h5 className="text-lg font-bold text-white">Update Payments</h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to Update Payments
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update Service History " ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("Update Service History ")}
          >
            <h5 className="text-lg font-bold text-white">
              Update Service History
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to Update Service History
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center mt-6 ">
        {activeSelection === "Enterprise Dashboard" && <EnterpriseDashboard />}
        {activeSelection === "List of Customers" && <ListofCustomers />}
        {activeSelection === "Update Payments " && <UpdatePayments />}
        {activeSelection === "Update Service History " && (
          <UpdateServicehistory />
        )}

        {activeSelection === null && (
          <div className="text-3xl">
            {/* Default component content */}
            <h1>Select above content</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Enterprise;
