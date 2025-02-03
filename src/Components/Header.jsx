import { FaBell, FaSearch } from "react-icons/fa";
import profile from "../assets/image.png";
function Header() {
  return (
    <header className="p-1 flex items-center border-b lg:justify-between justify-end px-3">
      {/* Left - Search Input */}
      <div className="flex-1 hidden lg:block">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-4 pr-10 border border-transparent bg-[#FFFFFF33] text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-0 py-3 px-3 top-1/2 transform -translate-y-1/2 bg-[#199FB1] p-2 ">
            <FaSearch className="text-white" />
          </div>
        </div>
      </div>

      {/* Right - Notification Icon & Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <button className="relative">
          <FaBell className="text-gray-300 text-xl" />
          <span className="absolute top-[-3px] right-[-2px] bg-white text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
        </button>

        {/* Profile Picture */}
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
