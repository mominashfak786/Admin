import React, { useState } from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  const [activeSelection, setActiveSelection] = useState(null);

  const [country, setCountry] = useState("");
  const [referralId, setReferralId] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [showTable, setShowTable] = useState(false);

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const [tableData, setTableData] = useState([
    { date: "", leadName: "", solutionType: "", premisesCategory: "" },
  ]);

  const [tableDatas, setTableDatas] = useState([
    {
      subscriptionDate: "",
      leadName: "",
      solutionType: "",
      commissionAmount: "",
      paymentMode: "",
    },
  ]);
  const handleClick = (text) => {
    setActiveSelection(text);
  };

  const renderPartnerDashboard = () => {
    return (
      <>
        <div className="block justify-center items-center h-64  mt-1">
          <div className="text-4xl font-bold tracking-tight text-gray-900 mt-6">
            Welcome to the Partner Dashboard
          </div>
          <div className="text-xl text-center  text-blue-900 ">
            <Link to="/Message">Click here for Message Feature</Link>
          </div>
        </div>
      </>
    );
  };

  const renderListOfChannelPartner = () => {
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
      setShowForm(false);
    };

    const handleReferralIdChange = (event) => {
      setReferralId(event.target.value);
      setShowForm(true);
    };

    return (
      <div className="p-4">
        <div className="mr-6 mt-5">
          <label
            htmlFor="country"
            className="block text-xl font-medium text-gray-700 mb-5"
          >
            List of Channel Partner
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
            <label htmlFor="referralId" className="block mb-2">
              Referral ID:
            </label>
            <select
              id="referralId"
              value={referralId}
              onChange={handleReferralIdChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">-- Select Referral ID --</option>
              <option value="1">Referral ID 1</option>
            </select>
          </div>
        )}

        {showForm && (
          <div className="mt-4">
            <div className="border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-4">
                    <strong>Full Name*:</strong> John Doe
                  </p>

                  <p className="mb-4">
                    <strong>Email Address*:</strong> johndoe@example.com
                  </p>

                  <p className="mb-4">
                    <strong>Business Name*:</strong> ABC Corporation
                  </p>

                  <p>
                    <strong>Country*:</strong> India
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    <strong>STATE*:</strong> State Name
                  </p>

                  <p className="mb-4">
                    <strong>City*:</strong> City Name
                  </p>

                  <p className="mb-4">
                    <strong>Zip code*:</strong> 123456
                  </p>

                  <p className="mb-4">
                    <strong> Business Category*:</strong>
                  </p>

                  <p>
                    <strong>PHONE NUMBER*:</strong> 123-456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderReferralHistory = () => {
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
      setReferralId("");
      setShowTable(false);
    };

    const handleReferralIdChange = (event) => {
      setReferralId(event.target.value);
      setShowTable(true);
    };

    const handleInputChange = (event, index, field) => {
      const { value } = event.target;
      const updatedData = [...tableData];
      updatedData[index][field] = value;
      setTableData(updatedData);
    };

    const addRow = () => {
      setTableData([
        ...tableData,
        { date: "", leadName: "", solutionType: "", premisesCategory: "" },
      ]);
    };

    const handleSubmit = () => {
      // Perform any necessary actions with the submitted table data
      console.log(tableData);
    };

    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Referral History]
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
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
              </label>
              <select
                id="referralId"
                value={referralId}
                onChange={handleReferralIdChange}
                className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Referral ID --</option>
                <option value="referral1">Referral ID 1</option>
                <option value="referral2">Referral ID 2</option>
                {/* Add referral ID options based on the selected country */}
              </select>
            </div>
          )}

          {showTable && (
            <>
              <div className="mt-5 py-6 ">
                <table className="block table-auto mt-6  border-2 border-gray-900">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Name of the lead</th>
                      <th className="px-4 py-2">Solution Type</th>
                      <th className="px-4 py-2">Category of Premises</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.date}
                            onChange={(event) =>
                              handleInputChange(event, index, "date")
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.leadName}
                            onChange={(event) =>
                              handleInputChange(event, index, "leadName")
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.solutionType}
                            onChange={(event) =>
                              handleInputChange(event, index, "solutionType")
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.premisesCategory}
                            onChange={(event) =>
                              handleInputChange(
                                event,
                                index,
                                "premisesCategory"
                              )
                            }
                            className="w-full"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center my-4 items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderCommissionHistory = () => {
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
      setReferralId("");
      setShowTable(false);
    };

    const handleReferralIdChange = (event) => {
      setReferralId(event.target.value);
      setShowTable(true);
    };
    const handleInputChange = (event, index, field) => {
      const { value } = event.target;
      const updatedData = [...tableData];
      updatedData[index][field] = value;
      setTableDatas(updatedData);
    };

    const addRow = () => {
      setTableDatas([
        ...tableData,
        {
          subscriptionDate: "",
          leadName: "",
          solutionType: "",
          commissionAmount: "",
          paymentMode: "",
        },
      ]);
    };

    const handleSubmit = () => {
      // Perform any necessary actions with the submitted table data
      console.log(tableData);
    };

    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Commission History]
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
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
              </label>
              <select
                id="referralId"
                value={referralId}
                onChange={handleReferralIdChange}
                className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Referral ID --</option>
                <option value="referral1">Referral ID 1</option>
                <option value="referral2">Referral ID 2</option>
                {/* Add referral ID options based on the selected country */}
              </select>
            </div>
          )}

          {showTable && (
            <>
              <div className="mt-5">
                <table className="table-auto border border-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2"> Date</th>
                      <th className="px-4 py-2">Lead Name</th>
                      <th className="px-4 py-2">Solution Type</th>
                      <th className="px-4 py-2">Commission Amount</th>
                      <th className="px-4 py-2">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableDatas.map((row, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.subscriptionDate}
                            onChange={(event) =>
                              handleInputChange(
                                event,
                                index,
                                "subscriptionDate"
                              )
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.leadName}
                            onChange={(event) =>
                              handleInputChange(event, index, "leadName")
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.solutionType}
                            onChange={(event) =>
                              handleInputChange(event, index, "solutionType")
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.commissionAmount}
                            onChange={(event) =>
                              handleInputChange(
                                event,
                                index,
                                "commissionAmount"
                              )
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            value={row.paymentMode}
                            onChange={(event) =>
                              handleInputChange(event, index, "paymentMode")
                            }
                            className="w-full"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center my-4 items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderPayoutMode = () => {
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
      setReferralId("");
      setShowTable(false);
      setSelectedPaymentOption("");
    };

    const handleReferralIdChange = (event) => {
      setReferralId(event.target.value);
      setShowTable(true);
      setSelectedPaymentOption("");
    };

    const handlePaymentOptionChange = (event) => {
      setSelectedPaymentOption(event.target.value);
    };

    const handleSave = () => {
      // Perform saving logic here
      console.log("Data saved");
    };

    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Current Payout Mode of C.P.
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
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
              </label>
              <select
                id="referralId"
                value={referralId}
                onChange={handleReferralIdChange}
                className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Referral ID --</option>
                <option value="referral1">Referral ID 1</option>
                <option value="referral2">Referral ID 2</option>
                {/* Add referral ID options based on the selected country */}
              </select>
            </div>
          )}

          {showTable && (
            <div className="mt-5 mb-4 ">
              <label
                htmlFor="paymentOption"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Payment Option:
              </label>
              <select
                id="paymentOption"
                value={selectedPaymentOption}
                onChange={handlePaymentOptionChange}
                className="mt-1 block w-full py-2 mb-6  px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Payment Option --</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="paymentLink">Payment Link</option>
              </select>
            </div>
          )}

          {showTable && selectedPaymentOption === "bankTransfer" && (
            <div className=" border-2 mt-2 border-graay-900 rounded-lg">
              <div className="bg-white rounded-md shadow-sm  p-6 mt-2">
                <h2 className="text-lg font-medium text-gray-700 mb-3">
                  Bank Transfer Details:
                </h2>
                <p>
                  <strong>Name of the Account Holder:</strong> John Doe
                </p>
                <p>
                  <strong>Account Number:</strong> 1234567890
                </p>
                <p>
                  <strong>Bank Name:</strong> ABC Bank
                </p>
                <p>
                  <strong>Bank Address:</strong> 123 Main Street, City, Country
                </p>
                <p>
                  <strong>SWIFT Code:</strong> ABCD1234
                </p>
                <p>
                  <strong>IFSC Code:</strong> IFSC1234
                </p>
                <p>
                  <strong>Mobile Number:</strong> 123-456-7890
                </p>
                <p>
                  <strong>Your Address:</strong> 456 Suburb Street, City,
                  Country
                </p>
              </div>
            </div>
          )}

          {showTable && selectedPaymentOption === "paypal" && (
            <div className="mt-5">
              <div className="bg-white rounded-md shadow-sm p-4">
                <h2 className="text-lg font-medium text-gray-700 mb-3">
                  PayPal Details:
                </h2>
                <p>
                  <strong>PayPal Email:</strong> johndoe@example.com
                </p>
                <p>
                  <strong>Account Name:</strong> John Doe
                </p>
                <p>
                  <strong>Address:</strong> 123 PayPal Street, City, Country
                </p>
              </div>
            </div>
          )}

          {showTable && selectedPaymentOption === "paymentLink" && (
            <div className="mt-5">
              <div className="bg-white rounded-md shadow-sm p-4">
                <h2 className="text-lg font-medium text-gray-700 mb-3">
                  Payment Link:
                </h2>
                <p>
                  <strong>Link:</strong> https://helloWorld!.com/
                </p>
               
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`w-64 p-4 mx-auto border-2 mt-3 border-gray-900 cursor-pointer text-gray-900 text-center bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "Partner Dashboard" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleClick("Partner Dashboard")}
        >
          <h5 className="text-2xl font-bold  text-gray-900">
            Partner Dashboard
          </h5>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-5">
          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "List of Channel Partner" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("List of Channel Partner")}
          >
            <h5 className="text-lg font-bold text-white">
              List of Channel Partner
            </h5>
            <p className="text-sm text-gray-300 mt-2">Click to view partners</p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update CP Dashboard [Referral History]"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() =>
              handleClick("Update CP Dashboard [Referral History]")
            }
          >
            <h5 className="text-lg font-bold text-white">
              Update CP Dashboard [Referral History]
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to update referral history
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update CP Dashboard [Commission History]"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() =>
              handleClick("Update CP Dashboard [Commission History]")
            }
          >
            <h5 className="text-lg font-bold text-white">
              Update CP Dashboard [Commission History]
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to update commission history
            </p>
          </div>

          <div
            className={`w-68 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Current Payout Mode of C.P."
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() => handleClick("Current Payout Mode of C.P.")}
          >
            <h5 className="text-lg font-bold text-white">
              Current Payout Mode of C.P.
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to view current payout mode
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center mt-6 ">
        {activeSelection === "Partner Dashboard" && renderPartnerDashboard()}
        {activeSelection === "List of Channel Partner" &&
          renderListOfChannelPartner()}
        {activeSelection === "Update CP Dashboard [Referral History]" &&
          renderReferralHistory()}
        {activeSelection === "Update CP Dashboard [Commission History]" &&
          renderCommissionHistory()}
        {activeSelection === "Current Payout Mode of C.P." &&
          renderPayoutMode()}

        {activeSelection !== "Partner Dashboard" &&
          activeSelection !== "List of Channel Partner" &&
          activeSelection !== "Update CP Dashboard [Referral History]" &&
          activeSelection !== "Update CP Dashboard [Commission History]" &&
          activeSelection !== "Current Payout Mode of C.P." && (
            <div className="text-3xl">
              {/* Default component content */}
              <h1>Select above content</h1>
            </div>
          )}
      </div>
    </>
  );
};

export default Partner;
