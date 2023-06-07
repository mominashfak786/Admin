import React from "react";

const registration_form = () => {
  return (
    <>
      <div class="mx-auto my-4 md:w-1/2">
        <div class="p-3 md:p-6   bg-gray-100 shadow-lg ">
          <h2 className="text-4xl text-center font-bold mb-6">
            Registration Form
          </h2>
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block mb-2 font-bold">
                *First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full p-2 border rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="middle-name" className="block mb-2 font-bold">
                Middle Name
              </label>
              <input
                type="text"
                id="middle-name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-2 font-bold">
                *Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full p-2 border rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-2 font-bold">
                *Country
              </label>
              <select
                id="country"
                className="w-full p-2 border rounded"
                required=""
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            <div>
              <label htmlFor="profile-picture" className="block mb-2 font-bold">
                *Upload Photo
              </label>
              <input
                type="file"
                id="profile-picture"
                className="w-full  border border-gray-900 rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-bold">
               * Set Your Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border  rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-bold">
               * Email ID
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="profession" className="block mb-2 font-bold">
               * Profession Type
              </label>
              <select
                id="profession"
                className="w-full p-2 border rounded"
                required=""
              >
                <option value="">Select Profession</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="computer-engineer">Computer Engineer</option>
                <option value="cleaner">Cleaner</option>
                <option value="gardener">Gardener</option>
                <option value="other">Other</option>
                <option value="facility-manager">Facility Manager</option>
              </select>
            </div>
            <div>
              <label htmlFor="govt-id" className="block mb-2 font-bold">
                *Upload Govt. ID
              </label>
              <input
                type="file"
                id="govt-id"
                className="w-full border-gray-900   border rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="contact" className="block mb-2 font-bold">
                *Contact
              </label>
              <input
                type="text"
                id="contact"
                className="w-full p-2 border rounded"
                required=""
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 font-bold">
                *Address
              </label>
              <input
                type="text"
                id="house-no"
                placeholder="House No"
                className="w-full p-2 mb-2 border rounded"
                required=""
              />
              <input
                type="text"
                id="street-name"
                placeholder="Street Name"
                className="w-full p-2 mb-2 border rounded"
                required=""
              />
              <select
                id="city"
                className="w-full p-2 mb-2 border rounded"
                required=""
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
            <div>
              <select
                id="state"
                className="w-full p-2 mb-2 mt-8 border rounded"
                required=""
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
              </select>
              <input
                type="text"
                id="landmark"
                placeholder="Landmark"
                className="w-full p-2 mb-2 border rounded"
                required=""
              />

              <input
                type="text"
                id="pin-code"
                placeholder="Pin Code"
                className="w-full p-2 mb-2 border rounded"
                required=""
              />
            </div>
            <div></div>
            <div></div>
            <button
              type="submit"
              className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default registration_form;
