import {} from "react";
import logo from "../assets/logo.png";
function Setting() {
  return (
    <div className="container mx-auto ">
      <div className=" bg-white rounded-lg py-4 px-4 my-2 ">
      <div className="mx-2 py-1">App Logo</div>
        <div className="flex items-center gap-3">
       
          <div className="border px-3 py-2">
         
            <img src={logo} />
          </div>
          <div>
            <button className="py-1 px-4 bg-white text-black border-2 border-[#199FB1] rounded-md">
              Change Logo
            </button>
          </div>
        </div>
        <div className="py-3">
          <div className="py-2">
            <label className="block text-gray-700 font-bold">App Name</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div className="py-2">
            <label className="block text-gray-700 font-bold">Tags Name</label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="py-2">
              <label className="block text-gray-700 font-bold">Contact</label>
              <input
                type="text"
                name="contact"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Contact"
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700 font-bold">Email</label>
              <input
                type="text"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg py-4 px-4 my-2">
        <div className="flex flex-col">
          <label className="block text-gray-700 font-bold">
            Select Currency
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="radio1"
              type="radio"
              name="radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="radio1" className="text-gray-700 font-medium">
              Enable
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="radio1"
              type="radio"
              name="radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="radio1" className="text-gray-700 font-medium">
              Disable
            </label>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-lg py-4 px-4 my-2">
        <label className="block text-gray-700 font-bold">
          Enable/disable payment gateways
        </label>
        <label className="py-3 inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Toggle me
          </span>
        </label>
      </div>
      <div className="bg-white rounded-lg py-4 px-4 my-2">
        <label className="block text-gray-700 font-bold">
          Push Notifications
        </label>
        <div className="py-2">
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="headline"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="sub headline"
          />
        </div>
        <div className="py-2">
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="description"
          />
        </div>

        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="multiple_files"
        >
          Upload banner
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
        />
      </div>
      <div className="bg-white rounded-lg py-4 px-4 my-2">
        <label className="block text-gray-700 font-bold">
          Privacy policy/Terms
        </label>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="bg-white rounded-lg py-4 px-4 my-2">
        <label className="block text-gray-700 font-bold">
          Terms & conditions
        </label>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex justify-center items-center py-3">
      <button className="py-2 px-4 bg-[#199FB1] text-white rounded-md">
                Save all Changes
              </button>
      </div>
    </div>
  );
}

export default Setting;
