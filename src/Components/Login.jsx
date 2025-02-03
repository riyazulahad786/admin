import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Importing eye icons
import logo from '../assets/logo.png';
import backgroundImage from '../assets/login.png';

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] min-h-screen bg-cover bg-center px-[72px] py-[62px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left Side (Logo) */}
      <div className="hidden lg:flex items-center justify-center bg-[#A5A5A538] bg-opacity-50">
        <img src={logo} alt="Logo" />
      </div>

      {/* Vertical Divider with Dots */}
      <div className="relative hidden bg-[#A5A5A538] lg:flex items-center justify-center">
        <div className="h-[90%] border-l-2 border-[#E25845] relative">
          {/* Top Dot */}
          <div className="w-3 h-3 bg-[#E25845] rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
          {/* Bottom Dot */}
          <div className="w-3 h-3 bg-[#E25845] rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="flex items-center justify-center bg-[#A5A5A538] bg-opacity-80">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[500px]">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="mb-4 text-gray-400">Welcome to Free Shop App Controller</p>

          <form onSubmit={handleSubmit} className="space-y-4 py-3">
            {/* Username Input */}
            <div>
              <label className="block text-gray-700 font-bold">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Input with Eye Icon */}
            <div className="relative">
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center mt-5 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center text-[#199FB1] justify-center">
              <p>Forgot password</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-5 bg-[#199FB1] text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>

            {/* Create Account */}
            <div className="flex items-center text-[#199FB1] justify-center">
              <p>Create New Account</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
