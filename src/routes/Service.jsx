import React, { useState } from "react";

const ServiceDashboard = () => {
  return (
    <div className="block justify-center items-center h-64  mt-1">
      <div className="text-4xl font-bold tracking-tight text-gray-900 mt-6">
        Welcome to the Service Dashboard
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
          List of Service team
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
            <option value="Client 1">Client 1 Name</option>
            <option value="Client 1">Client 2 Name</option>
            <option value="Client 1">Client 3 Name</option>
            <option value="Client 1">Client 4 Name</option>
          </select>
        </div>
      )}

      {showForm && (
        <div className="p-4 mt-4">
          <div className="border border-gray-300 rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center mb-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAC6CAMAAADVh1IcAAAAZlBMVEX///8AAACenp4QEBCioqL6+vr29vbGxsbY2NjR0dFJSUmKioqZmZnw8PA7OzsgICAnJydTU1O8vLxnZ2caGhrk5ORAQEA1NTV0dHQICAgWFhaAgICqqqrq6uotLS16enpeXl6zs7NsfFQoAAAFFUlEQVR4nO2dCbaiMBAAjUIChEVREERc7n/JEZ2Zr6IfkF4iL3UBqUfM0uluZjNCZLouHZfyF5FwI78QFyYgU/tO3qiI2Od+lJFI/7wWf9GS+2lGkaV6K/6z536cEUgVnnY/KmJz5n6ij8mcIhYPlN/6ZlQV7MQzIfdTfUI0D5Ytkwu5x/1kg8mKVyJXgoz74QYhVf5WpWH+NbOzzPbbX1UuLEK//gKhyNdJl8rtr6NTLzN6Y5OpqpfJjfI0T/2a+5nfkO3X3QbPL+joKAN9MudUDnZp2BahMmu8ycdNy9D3sz4bpKNeLPWDWAaK2+Ef1WacSsPmaMTLqePuR+3D1oCtgTrAuAiRpNwuaed6358D8zwA6cJt4weQLpdJmnFSq0+wLkKs2GYBV0O7CFFxDTQf3kUIroEGtMA8suVxURguQvCsNmCr5SMsr8bDcRGCI36DMJXd0AwyKyyZFb1L1C9y8QFJRC7j48nQX+GcRx4u37OjvylwFlgyizm5zBxNpqS/KcCTWUxJxr4ZU2Um9WYmJTOpYTapdYZBZlI7ACtjZayMlbEyHTKOlbEyVsbKWBkrY2WsjJWxMlbGymCiP0uW7UFJf90MnJx1D/V1cx2i3c8KsXRIE7e94cnlg1gTZmlER1wXIY50uQAeWnbGP1Z0r2ZaMuC5mc+c6GSiIXUyH1ER5s/MsWUog5pntOX/RkmZPqNQck1/iClzaLFnAMLJbDaTyKtmQZo/h5ageYN234x3mmkgPtHAlpo8c6BN1M5QNzTEtRoR6nR2Is6fRZ3OCloXxBAAQxAgRSpraCD+/19mgN8bGIwiJi9tQIzOBOSlWoghjTW1y2yPlj6/oO9NI6dUpYE3zuhHGVr9HFNxI5YMh8sMKURTscgglQPytKZzcWSYiptRQjQxjwtOIICjSrMhxZDhaqRRY8hwdTfAqDvdMexlrsj3/eU+pmBrfIawo+HrCJKBR88Y2wJF4JOz5vrLXFDAUdqSs8MR9B16wdqGLgWdnXe8raci0NmZ9lqmDeSFIOnl30tCuDgtf5NdF+w+4GRAIz2oQG1sQBs9sAwH/kHWIAGaNQqxMaS1Lshas+G2uOHCyBjw959NbJhlIPcBOyMmM6Ct84J9+b8Ck69FmpX1HgdGhj5p/hVAx02u6N8jQLdOHHdMbYDSaBgazr0A6BI94Pa4MiWZGugIkJvQU98DigRuTfj+iQ8lY8KnqaCStRiqs1p4YBlBAfc4kylkqCllPQbUwDc0nOFZGcK6CBHyvRsP/B4wYfvfuOAv5vJquEIBEUJWw5Yrdo6SPMM1zhBGGd8ZDcOFKd0MK0WLZ5whFQTxjDOQQGYblqDzhL4LIFO8VGDi/aarKsTmBklF+Rk3v8IuOq2ojp0ZtspNh+JWwNUvP8cKz1KjjzX0evN7UGvP3TNqrWmbBdq3wqKOb8uikCuMM0GkkNuzvGMNriNThOTSvhSgq6irkKvMu9Bwq6ivEYsy+3HQMKuopxn+921yPX4DGmmC5b4f8djU2jBB7mMyhDIZk/m05378Nh/WcLop0SZsGMt0+MQWKfTmUp+yGriKRopxjeymGKBzOUciBSug2PQ+iyqNeCSGItF9sqB8M9bIbvLOTUH2LSoNuf7taC11bNAa2U0Z67f7aecL/ivPJK/T1FCqLilo1am4HEdiKPLHeVqidyzEpbr/65AGkDC4C0plTLEKONY/kzT0x+TpCXwrYyZWxlRuMn8ANXNp7sYl0pkAAAAASUVORK5CYII="
                alt=""
                className="w-40 h-40 rounded-full mb-2"
              />
              <span className="text-gray-900"> Photo</span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8AAADj4+MwMDA1NTXp6eltbW22traHh4eZmZl3d3ehoaG8vLzv7+/7+/v09PTW1tYkJCRLS0scHBxeXl4YGBiOjo49PT3d3d0pKSnCwsLIyMh/f38NDQ1ERESpqamEVx2eAAADX0lEQVRoge2a2ZKDIBBFXYL7giYak5jJ///lqFFxaWITFypV3JeZqULO2EBzG9E0JSUlJSUlJSVZColxlEg4o9vlVT9O19Ie0QPzQPhbZsDw+eH0Wm5LjywpeF23IolvX6uJAJWG13VaRf8ikX+Jhq+fmMcoYUjKRt+L98lrgGKvg7pa2oXiMHqtbtBTLWt/Mw7lFy0109pfTHIon3QJt+OfDuafFF/xf4cfhkURbpggxfiPsknZpkNl8Mlgh7xsFAMBPh15w+s2eRrPn9mT4lB+35BFgDcE1F5QEM67XeID7sgDGxq3ecuZnEiQfwc6eT6gOOHKF1+MD1tzC2hpo/D6MxbiE7gXYAaUOL4uxvfhTux5S3cXPsebAzOQPFH47kkkP4V7uUTzpqgJ8NetQBx/vvjbbqDG1HcWlNvRrOeP/IKzpk+rk/Bv8AnnWAKM/w786A/mQ/NvD77A+tuH78B8F2q7B59zNrHeAiD5MbgAznCXgbsgnwquf87ZUA61pGc4ViN5ovs/NAAZ5IKNDGg5lyPIh1YAeFLxQuEF9z/KDgoGKrR4HgFv3m4t37CeBJgBTu3KyukJMscprODX1q+sfk72QLPqoUrLycQEEsz0Exn/5r2f9QiMNoEz7bzOxAQ9MP7XQs//1k+l2mQNUPb35B8wAn9BLxazJX4/nWuvywrAtMp8RR/p+3TI8FrgU+bm6ikQv5r6N3PD0Z58+94GLPAHJ6S61Ux1w7abRWcP80y6E3+8mE53lrYnGyJgxDfgG8mYoqcvWq26+JFPTTa3Fl3FB2qJZzI6tu712oOPKyXeAdiBjywl32JrkPregsogxvCxpWSj3ooFmNYXRP0TcooeWGb7SgauOaL+Q/bUqX1uu/1PaPj7FLDd/o/tqVX5fgrpf7JlPqfm5ql1YwSz/TLr+oEv+B08bZOzwanVRursxwd+JPgpvH8wpMGC7qxu4fNDXCB73b4qhvh8AqX5Dzp/dSa+HR+sRlbwReO/9ftrgvxk4/FHnyS2AovRNXyN5hZWXv747ijm175/Kb7iK/6OfGn3P2Tff5F9/0fG/adwcP9J9v0vufffNOn3/4QNx4Z6F8+y73/KisDgK85dqObfRKfx6WXgHHr/2Qm0qeTe/1ZSUlJSUlJSOkr/PoY8MZMYah4AAAAASUVORK5CYII="
                alt=""
                className="w-40 h-40 mb-2"
              />
              <span className="text-gray-900">Government ID Card</span>
            </div>
            <p>
              <strong>*First Name:</strong> John
            </p>
            <p>
              <strong> Middle Name:</strong> smith
            </p>
            <p>
              <strong>*Last Name:</strong> Doe
            </p>
            <p>
              <strong>Email Address*:</strong> johndoe@example.com
            </p>
            <p>
              <strong>Country *:</strong> India
            </p>
            <p>
              <strong>Profession Type:</strong> xxxxx
            </p>
            <p>
              <strong>Contact:</strong> xxxxxxxxxxx
            </p>
            <p>
              <strong>Adrress:</strong> xxxxxxxxxxxxx
            </p>
            <p>
              <strong>City:</strong> xxxxxxxxxxxxx
            </p>
            <p>
              <strong>State:</strong> xxxxxxxxxxxxx
            </p>{" "}
            <p>
              <strong>City:</strong> xxxxxxxxxxxxx
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
const ServiceRequest = () => {
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
          <table className="border border-gray-300 rounded-lg shadow-lg ">
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Client Name</th>
                <th>Location</th>
                <th>Contact Details</th>
                <th>Problem</th>
                <th>Date</th>
                <th>Time</th>
                <th>Message</th>
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
                      name="Location"
                      value={data.problem}
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
                      name="Location"
                      value={data.problem}
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
                <th>Client Name</th>
                <th>Location</th>
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
                      name="Location"
                      value={data.problem}
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
const ServiceFeedbackDetails = () => {
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
          <div className="text-3xl text-center mt-4">Details</div>
        </div>
      )}
    </div>
  );
};
const UpdateMyEarnings = () => {
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
          <div className="text-3xl text-center mt-4">Enter Details</div>
          <table className="border border-gray-300 rounded-lg shadow-lg p-4">
            <thead>
              <tr>
                <th>Service ID</th>
                <th>Date of Task</th>
                <th>My Earning</th>
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
                      name="Location"
                      value={data.problem}
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

const Service = () => {
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
          onClick={() => handleClick("Service Dashboard")}
        >
          <h5 className="text-2xl font-bold text-gray-900">
            Service Dashboard
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

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update My Earnings " ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("Update My Earnings ")}
          >
            <h5 className="text-lg font-bold text-white">Update My Earnings</h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to Update My Earnings
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Service Feedback Details"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() => handleClick("Service Feedback Details")}
          >
            <h5 className="text-lg font-bold text-white">Service Feedback Details</h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to view  Service Feedback Details
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update Pending Service Reuest"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() => handleClick("Update Pending Service Reuest ")}
          >
            <h5 className="text-lg font-bold text-white">
              Update Pending Service
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to Update Pending Service Request
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
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center mt-6 ">
        {activeSelection === "Service Dashboard" && <ServiceDashboard />}
        {activeSelection === "List of Customers" && <ListofCustomers />}
        {activeSelection === "Update Payments " && <UpdatePayments />}
        {activeSelection === "Update Pending Service Reuest " && (
          <ServiceRequest />
        )}
        {activeSelection === "Update Service History " && (
          <UpdateServicehistory />
        )}
        {activeSelection === "Update My Earnings " && <UpdateMyEarnings />}
        {activeSelection === "Service Feedback Details" && (
          <ServiceFeedbackDetails />
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

export default Service;
