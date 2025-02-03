import { useState } from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import profile from "../assets/image.png";
import { FaSearch } from "react-icons/fa";

function Rating() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [statuses, setStatuses] = useState({});

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleAction = (index, action) => {
    setStatuses((prev) => ({
      ...prev,
      [index]: action,
    }));
    setDropdownOpen(null); // Close dropdown after selecting
  };

  const users = [
    { name: "Riyaz", role: "Developer" },
    { name: "Divya", role: "Manager" },
    { name: "Rahul", role: "Developer" },
  ];

  return (
    <div>
      <div className="flex-1 flex justify-end mb-4">
        <div className="relative w-2/4">
          <input
            type="text"
            placeholder="Search user by their name..."
            className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-xl py-2">Rating & Review</h1>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="w-4 h-4 text-blue-600" />
              </th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Comments</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Ratings</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50"
              >
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3 items-center">
                    <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                      <div>{user.name}</div>
                      <div className="text-gray-500">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-red-500 font-bold">2 Sold</div>
                    <div className="text-green-500 font-bold">1 Bought</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`py-1 px-3 rounded-md ${
                      statuses[index] === "Approved"
                        ? "bg-green-100 text-green-600"
                        : statuses[index] === "Declined"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {statuses[index] || "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 text-yellow-500">★★★☆☆</td>
                <td className="px-6 py-4 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    <TfiLayoutMenuSeparated />
                  </button>

                  {dropdownOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleAction(index, "Approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleAction(index, "Declined")}
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
