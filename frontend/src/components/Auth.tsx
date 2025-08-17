import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const roles = [
  { value: "vendor", label: "Vendor" },
  { value: "supplier", label: "Supplier" },
];

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialMode = searchParams.get("mode") === "register" ? false : true;
  const initialRole = searchParams.get("role") || "vendor";

  const [isLogin, setIsLogin] = useState(initialMode);
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-md p-6 relative"
      >
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {/* Role Dropdown */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-slate-300 mb-1">
            {isLogin ? "Login as" : "Register as"}
          </label>
          <button
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
            className="w-full flex justify-between items-center px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 transition"
          >
            <span>{roles.find((r) => r.value === selectedRole)?.label}</span>
            {showRoleDropdown ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {showRoleDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-slate-700 border border-slate-600 rounded-lg shadow-lg overflow-hidden">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => {
                    setSelectedRole(role.value);
                    setShowRoleDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-600 transition-colors ${
                    selectedRole === role.value ? "bg-blue-600 text-white" : "text-slate-200"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Forms */}
        {isLogin ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500"
            >
              Login
            </motion.button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-slate-300 mb-1">
                {selectedRole === "vendor" ? "Shop Name" : "Your Name"}
              </label>
              <input
                id="signup-name"
                type="text"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={selectedRole === "vendor" ? "Awesome Shop" : "John Doe"}
                required
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="signup-phone" className="block text-sm font-medium text-slate-300 mb-1">
                Phone
              </label>
              <input
                id="signup-phone"
                type="tel"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1234567890"
                required
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label htmlFor="signup-location" className="block text-sm font-medium text-slate-300 mb-1">
                {selectedRole === "vendor" ? "Shop Location" : "Your Location"}
              </label>
              <input
                id="signup-location"
                type="text"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={selectedRole === "vendor" ? "123 Main St, City" : "Your area"}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500"
            >
              Sign Up
            </motion.button>
          </form>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white text-sm font-medium"
          >
            {isLogin ? (
              <>
                Not registered?{" "}
                <span className="text-blue-400 underline hover:text-blue-300">Switch to Signup</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-400 underline hover:text-blue-300">Switch to Login</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
