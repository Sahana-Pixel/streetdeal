// components/BackgroundWrapper.tsx
import React from "react";
import { motion } from "framer-motion";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children, className = "" }) => {
  return (
    <section className={`relative bg-gradient-to-br from-slate-900 to-blue-900 text-white min-h-screen flex items-center justify-center px-4 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Blue Orbs */}
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "20%", "-10%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["20%", "-10%", "20%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl"
        ></motion.div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
    </section>
  );
};

export default BackgroundWrapper;