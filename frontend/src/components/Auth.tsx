import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Store, Mail, Lock, Phone, MapPin, Truck } from "lucide-react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
};

type UserRole = "vendor" | "supplier" | null;

export const AuthModal = ({ 
  isOpen, 
  onClose, 
  initialMode = "login" 
}: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [role, setRole] = useState<UserRole>(null);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    location: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Logging in", { email: formData.email, password: formData.password, role });
    } else {
      console.log("Signing up", { ...formData, role });
    }
    onClose();
  };

  const toggleMode = () => {
    setMode(prev => prev === "login" ? "signup" : "login");
    setRole(null);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-slate-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {mode === "login" ? "Login" : "Sign Up"}
              </h2>

              {/* Role Selection Dropdown */}
              <div className="relative mb-6">
                <button
                  type="button"
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${
                    role ? "border-blue-400" : "border-slate-600"
                  } bg-slate-700 text-slate-200`}
                >
                  <div className="flex items-center gap-2">
                    {role === "vendor" ? (
                      <Store size={18} className="text-sky-300" />
                    ) : role === "supplier" ? (
                      <Truck size={18} className="text-indigo-300" />
                    ) : (
                      <User size={18} />
                    )}
                    <span>{role ? role.charAt(0).toUpperCase() + role.slice(1) : "Select your role"}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: showRoleDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {showRoleDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 mt-1 w-full bg-slate-700 rounded-lg shadow-lg overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setRole("vendor");
                          setShowRoleDropdown(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-slate-600 text-slate-200"
                      >
                        <Store size={18} className="text-sky-300" />
                        <span>Vendor</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setRole("supplier");
                          setShowRoleDropdown(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-slate-600 text-slate-200"
                      >
                        <Truck size={18} className="text-indigo-300" />
                        <span>Supplier</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <form onSubmit={handleSubmit}>
                {mode === "signup" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-slate-400 mb-2">
                        {role === "vendor" ? "Shop Name" : "Your Name"}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={role === "vendor" ? "Enter shop name" : "Enter your name"}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <label className="block text-slate-400 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {mode === "signup" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-slate-400 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-slate-400 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Enter your location"
                          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-6">
                  <label className="block text-slate-400 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!role}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                    role
                      ? "bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-xl"
                      : "bg-slate-600 cursor-not-allowed"
                  }`}
                >
                  {mode === "login" ? "Login" : "Sign Up"}
                </button>

                <div className="mt-4 text-center text-slate-400">
                  {mode === "login" ? (
                    <span>
                      Not registered?{" "}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        Switch to Signup
                      </button>
                    </span>
                  ) : (
                    <span>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        Switch to Login
                      </button>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Helper component for dropdown arrow
const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);