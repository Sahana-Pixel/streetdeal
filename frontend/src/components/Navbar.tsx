import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, Home, BookOpen, HelpCircle,  
  LogIn, UserPlus, Menu, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [authModalOpen, setAuthModalOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);
  // const [selectedRole, setSelectedRole] = useState("vendor");
  // const [showRoleDropdown, setShowRoleDropdown] = useState(false);
const navigate = useNavigate();

const handleAuthButtonClick = (isLoginForm: boolean) => {
  const mode = isLoginForm ? "login" : "register";
  navigate(`/auth?mode=${mode}&role=vendor`);
};

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: BookOpen },
    { id: "how-it-works", label: "How It Works", icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // const handleAuthButtonClick = (isLoginForm: boolean) => {
  //   setAuthModalOpen(true);
  //   setIsLogin(isLoginForm);
  //   setMobileMenuOpen(false);
  // };

  // const roles = [
  //   { value: "vendor", label: "Vendor" },
  //   { value: "supplier", label: "Supplier" },
  // ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-2xl drop-shadow-xl backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Left side - Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <ShoppingCart className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">
              Street<span className="text-blue-400">Deal</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${                
                       "text-slate-200"
                  } hover:text-blue-300 hover:bg-slate-800 hover:shadow-lg hover:drop-shadow-md`}
                >
                  <item.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAuthButtonClick(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl hover:drop-shadow-lg transition-all duration-300 text-lg font-medium"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAuthButtonClick(false)}
              className="flex items-center gap-2 border border-blue-400 text-blue-400 px-5 py-2.5 rounded-lg shadow-lg hover:bg-blue-900/50 hover:shadow-xl hover:text-blue-300 hover:border-blue-300 transition-all duration-300 text-lg font-medium"
            >
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-slate-800 shadow-2xl"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 py-4 px-5 text-lg font-medium rounded-lg transition-all duration-200 text-slate-200 hover:bg-slate-700/50 hover:text-blue-300"
                  >
                    <item.icon className="h-6 w-6 flex-shrink-0" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
                
                <div className="border-t border-slate-700 my-2"></div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAuthButtonClick(true)}
                  className="flex items-center gap-3 py-4 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200 text-lg font-medium"
                >
                  <LogIn className="h-6 w-6 flex-shrink-0" />
                  <span>Login</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAuthButtonClick(false)}
                  className="flex items-center gap-3 py-4 px-5 mt-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-slate-700/50 hover:text-blue-300 hover:border-blue-300 transition-all duration-200 text-lg font-medium"
                >
                  <UserPlus className="h-6 w-6 flex-shrink-0" />
                  <span>Register</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Auth Modal */}
      
    </>
  );
};

export default Navbar;