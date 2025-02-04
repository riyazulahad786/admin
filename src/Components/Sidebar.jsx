import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons

function Sidebar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "User Management", path: "/user" },
    { label: "Rating & Review", path: "/rating-review" },
    { label: "Settings", path: "/setting" },
    { label: "History", path: "/history" },
    { label: "All Bookings", path: "/all-bookings" },
    { label: "Register", path: "/register" },
    { label: "Login", path: "/login" },
    { label: "Push Notifications", path: "/notifications" },
    { label: "Transaction List", path: "/transactions" },
    { label: "Google Analytics", path: "/analytics" },
    { label: "Multi Currency", path: "/multi-currency" },
    { label: "Category", path: "/category" },
    { label: "Live Chat History", path: "/chat-history" }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.label);
    navigate(item.path);
    setIsSidebarOpen(false); // Close sidebar after selection
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 bg-white rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:w-64 md:block z-50`}
      >
        <nav className="h-full flex flex-col px-3 py-2 overflow-y-auto relative">
          {/* Sidebar Header with Close Button */}
          <div className="flex justify-between items-center py-4">
            <h2 className="text-2xl font-bold text-[#199FB1] text-center w-full">Logo</h2>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <hr />

          <ul className="space-y-2 text-[#199FB1]">
            {menuItems.map((item, index) => (
              <div key={index}>
                <SidebarItem
                  label={item.label}
                  isActive={item.label === activeItem}
                  onClick={() => handleItemClick(item)}
                />
                {index !== menuItems.length - 1 && <hr className="border-gray-400" />}
              </div>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ label, isActive, onClick }) {
  return (
    <li
      className={`py-2 px-2 text-[20px] font-bold rounded-lg cursor-pointer my-2 ${
        isActive ? "bg-[#199FB1] text-white" : "text-[#199FB1]"
      } hover:bg-[#199FB1] hover:text-white`}
      onClick={onClick}
    >
      {label}
    </li>
  );
}

export default Sidebar;
