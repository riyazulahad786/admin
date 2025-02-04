import {} from "react";
// import Card from "../Components/Card";
import users from "../assets/Vector4.png";
import ads from "../assets/Vector7.png";
import buyers from "../assets/Vector5.png";
import seller from "../assets/Vector6.png";
import ear from "../assets/Vector8.png";
import profile from "../assets/image.png";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

function Dashboard() {
  return (
    <div>
      <div>
        <div className="flex flex-wrap bg-white rounded-lg py-4 px-4 ">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 p-2 space-y-4">
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-1  rounded-lg h-[120px] shadow bg-no-repeat  bg-center flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${users})`,
                  backgroundSize: "cover",
                }}
              >
                {/* Top Section */}
                <div>
                  <div className="lg:text-[20px]">Active Users</div>
                  <div className="text-center text-[#199FB1] font-bold text-2xl mt-3">
                    5556
                  </div>
                </div>

                {/* Bottom Section (Aligned to Bottom) */}
                <div className="text-right text-sm text-gray-600">
                  View All Users
                </div>
              </div>

              <div
                className="p-1 rounded-lg h-[120px] shadow bg-no-repeat bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${buyers})` }}
              >
                {/* Top Section */}
                <div>
                  <div className="lg:text-[20px]">Total Buyers</div>
                  <div className="text-center text-[#0FD43E] font-bold text-2xl mt-3">
                    3480
                  </div>
                </div>

                {/* Bottom Section (Aligned to Bottom) */}
                <div className="text-right text-sm text-gray-600">
                  View All buyers
                </div>
              </div>

              <div
                className="p-1 rounded-lg h-[120px] shadow bg-no-repeat bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${ads})` }}
              >
                {/* Top Section */}
                <div>
                  <div className="lg:text-[20px]">Total Ads</div>
                  <div className="text-center text-[#FFCC40] font-bold text-2xl mt-3">
                    459
                  </div>
                </div>

                {/* Bottom Section (Aligned to Bottom) */}
                <div className="text-right text-sm text-gray-600">
                  View All ads
                </div>
              </div>

              <div
                className="p-1 rounded-lg h-[120px] shadow  bg-no-repeat bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${seller})` }}
              >
                {/* Top Section */}
                <div>
                  <div className="lg:text-[20px]">Total Sellers</div>
                  <div className="text-center text-[#FF0838] font-bold text-2xl mt-3">
                    2924
                  </div>
                </div>

                {/* Bottom Section (Aligned to Bottom) */}
                <div className="text-right text-sm text-gray-600">
                  View All sellers
                </div>
              </div>
            </div>

            {/* Single Column Below Grid */}
            <div className="grid grid-cols-1 gap-4">
              <div
                className="p-4 text-center rounded-lg shadow-lg h-[120px] flex flex-col justify-between  bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${ear})`,
                  backgroundSize: "contain",
                }}
              >
                <div className="lg:text-[20px] text-start">Earnings</div>
                <div className="text-center font-bold text-2xl mt-3">
                  {" "}
                  3476876831
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Chart Area) */}
          <div className="hidden lg:block w-full lg:w-1/2 p-1 bg-gray-100 rounded-lg shadow flex flex-col justify-between">
            {/* Title for the Graph */}
            <div className="text-xl font-semibold mb-4">Company Growth</div>

            {/* Placeholder for the Graph (could be an actual chart) */}
            <div className="flex-1 text-center text-gray-600">
              Graph will go here
            </div>

            {/* Button Section */}
            <div className="flex justify-around items-center mt-4 space-x-2">
              <button className="py-1 px-4 bg-[#199FB1] text-white rounded-md">
                Month
              </button>
              <button className="py-1 px-4 bg-white text-black border-2 border-[#199FB1] rounded-md">
                Year
              </button>
              <button className="py-1 px-4 bg-white text-black border-2 border-[#199FB1] rounded-md">
                1 Year
              </button>
              <button className="py-1 px-4 bg-white text-black border-2 border-[#199FB1] rounded-md">
                2 Year
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-xl py-2">User Management</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Deal
              </th>
              <th scope="col" className="px-6 py-3">
                Block/unblock
              </th>
              <th scope="col" className="px-6 py-3">
                Ratings
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={profile} />
                  </div>
                  <div className="flex flex-col">
                    <div>Riyaz</div>
                    <div>developer</div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-2">
                  <div className="text-red-500 font-bold">2 Sold</div>
                  <div className="text-green-500 font-bold">1 brought</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <button className="py-2 px-4 bg-white text-black border-2 bg-[#f75151] rounded-md">
                  un Block
                </button>
              </td>
              <td className="px-6 py-4">
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <TfiLayoutMenuSeparated />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={profile} />
                  </div>
                  <div className="flex flex-col">
                    <div>divya</div>
                    <div>manager</div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-2">
                  <div className="text-red-500 font-bold">2 Sold</div>
                  <div className="text-green-500 font-bold">1 brought</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <button className="py-2 px-4 bg-white text-black border-2 border-[#f75151] rounded-md">
                  Blocked
                </button>
              </td>
              <td className="px-6 py-4">
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <TfiLayoutMenuSeparated />
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={profile} />
                  </div>
                  <div className="flex flex-col">
                    <div>Rahul</div>
                    <div>Developer</div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-2">
                  <div className="text-red-500 font-bold">2 Sold</div>
                  <div className="text-green-500 font-bold">1 brought</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <button className="py-2 px-4 bg-white text-black border-2 bg-[#f75151] rounded-md">
                  un Block
                </button>
              </td>
              <td className="px-6 py-4">
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-500">★</span> {/* Full Star */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
                <span className="text-yellow-400">☆</span>{" "}
                {/* Half Star (Empty) */}
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <TfiLayoutMenuSeparated />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
