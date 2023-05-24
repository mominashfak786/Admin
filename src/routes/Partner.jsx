import React, { useState } from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  const [activeSelection, setActiveSelection] = useState(null);
  const [channelPartnerSelection, setChannelPartnerSelection] = useState("");
  const [referralHistory, setReferralHistory] = useState([]);
  const [commissionHistory, setCommissionHistory] = useState([]);
  const [currentPayoutMode, setCurrentPayoutMode] = useState("");

  const handleClick = (text) => {
    setActiveSelection(text);
  };

  const handleChannelPartnerChange = (event) => {
    setChannelPartnerSelection(event.target.value);
  };

  const handleReferralHistoryChange = (event) => {
    setReferralHistory(event.target.value);
  };

  const handleCommissionHistoryChange = (event) => {
    setCommissionHistory(event.target.value);
  };

  const handlePayoutModeChange = (event) => {
    setCurrentPayoutMode(event.target.value);
  };

  const renderPartnerDashboard = () => {
    return (
      <>
        <div className="block justify-center items-center h-64  mt-6">
          <div className="text-4xl font-bold tracking-tight text-gray-900 mt-6">
          Welcome to the Partner Dashboard
          </div> 
          <div className="text-xl text-center  text-blue-900 ">
            {" "}
            <Link to="/Message">Click here for Message Feature</Link>
          </div>
        </div>
      </>
    );
  };

  const renderListOfChannelPartner = () => {
    return (
      <div className="flex justify-between w-2/4 items-center mt-5">
        <div className="mr-6 mt-5">
          <label
            htmlFor="channelPartner"
            className="block text-xl font-medium text-gray-700"
          >
            Select Channel Partner:
          </label>
          <select
            id="channelPartner"
            value={channelPartnerSelection}
            onChange={handleChannelPartnerChange}
            className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">-- Select --</option>
            <option value="partner1">1.Referral ID </option>
            <option value="partner2">2.Referral ID</option>
            <option value="partner3">3.Referral ID</option>
            <option value="partner1">4.Referral ID </option>
          </select>
        </div>
        <p className=" text-gray-900 text-xl">
          Form Details of this ID: {channelPartnerSelection}
        </p>
      </div>
    );
  };

  const renderReferralHistory = () => {
    return (
      <div>
        <div className="block  w-full  mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="channelPartner"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Referral History]:
            </label>
            <select
              id="channelPartner"
              value={channelPartnerSelection}
              onChange={handleChannelPartnerChange}
              className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">-- Select --</option>
              <option value="partner1">1.Referral ID </option>
              <option value="partner2">2.Referral ID</option>
              <option value="partner3">3.Referral ID</option>
              <option value="partner1">4.Referral ID </option>
            </select>
          </div>
          <div>
            <div className="mt-5">
              <table className="table-auto border border-gray-200 ">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Name of the lead</th>
                    <th className="px-4 py-2">Solution Type</th>
                    <th className="px-4 py-2">Category of Premises</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Sample Date 1</td>
                    <td className="border px-4 py-2">Sample Name 1</td>
                    <td className="border px-4 py-2">Sample Solution Type 1</td>
                    <td className="border px-4 py-2">Sample Category 1</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Sample Date 2</td>
                    <td className="border px-4 py-2">Sample Name 2</td>
                    <td className="border px-4 py-2">Sample Solution Type 2</td>
                    <td className="border px-4 py-2">Sample Category 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Edit
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    );
  };

  const renderCommissionHistory = () => {
    return (
      <div>
        <div className="block  w-full  mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="channelPartner"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Commission History]:
            </label>
            <select
              id="channelPartner"
              value={channelPartnerSelection}
              onChange={handleChannelPartnerChange}
              className="mt-1 block w-full mb-5 py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">-- Select --</option>
              <option value="partner1">1.Referral ID </option>
              <option value="partner2">2.Referral ID</option>
              <option value="partner3">3.Referral ID</option>
              <option value="partner1">4.Referral ID </option>
            </select>
          </div>
          <div>
            <div className="mt-5">
              <table className="table-auto border border-gray-200 ">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Date of Subscription</th>
                    <th className="px-4 py-2">Name of the Lead</th>
                    <th className="px-4 py-2">Solution Type</th>
                    <th className="px-4 py-2">Commission Amount</th>
                    <th className="px-4 py-2">Payment Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">12/02/2023</td>
                    <td className="border px-4 py-2">Mr. Avinash Sharma</td>
                    <td className="border px-4 py-2">Individual Package</td>
                    <td className="border px-4 py-2">SGD xxxx</td>
                    <td className="border px-4 py-2">Bank Transfer</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">12/02/2023</td>
                    <td className="border px-4 py-2">Mr. Avinash Sharma</td>
                    <td className="border px-4 py-2">Individual Package</td>
                    <td className="border px-4 py-2">SGD xxxx</td>
                    <td className="border px-4 py-2">Bank Transfer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Edit
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    );
  };

  const renderPayoutMode = () => {
    return (
      <div className="flex justify-between w-2/4 items-center mt-5">
        <div className="mr-6 mt-5">
          <label
            htmlFor="channelPartner"
            className="block text-xl font-medium text-gray-700"
          >
            Current Payout Mode of C.P :
          </label>
          <select
            id="channelPartner"
            value={channelPartnerSelection}
            onChange={handleChannelPartnerChange}
            className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">-- Select --</option>
            <option value="partner1">1.Referral ID </option>
            <option value="partner2">2.Referral ID</option>
            <option value="partner3">3.Referral ID</option>
            <option value="partner1">4.Referral ID </option>
          </select>
        </div>
        <p className=" text-gray-900 text-xl">
          Details of this ID: {channelPartnerSelection}
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-6 mb-5">
        <div
          className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "Partner Dashboard" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleClick("Partner Dashboard")}
        >
          <h5 className="text-lg font-bold text-white">Partner Dashboard</h5>
        </div>

        <div
          className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "List of Channel Partner" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleClick("List of Channel Partner")}
        >
          <h5 className="text-lg font-bold text-white">
            List of Channel Partner
          </h5>
        </div>

        <div
          className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "Update CP Dashboard [Referral History]"
              ? "bg-blue-200"
              : ""
          }`}
          onClick={() => handleClick("Update CP Dashboard [Referral History]")}
        >
          <h5 className="text-lg font-bold text-white">
            Update CP Dashboard [Referral History]
          </h5>
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
      </div>
    </div>
  );
};

export default Partner;
