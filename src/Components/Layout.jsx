import Header from "./Header";
import Sidebar from "./Sidebar";
import backgroundImage from "../assets/Vector.png";

function Layout({ children }) {
  return (
    <div className="relative pt-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-top -z-10"
        style={{ backgroundImage: `url(${backgroundImage})`,backgroundSize:"contain" }}
      ></div>

      <div className="container mx-auto flex h-screen  overflow-hidden rounded ">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 overflow-x-auto">
          {/* Fixed Header */}
          <Header />

          {/* Scrollable Main Content */}
          <main className="p-6 flex-1 overflow-y-auto  relative">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
