// components/ui/NavItemButton.tsx
import React from "react";
import type { LucideIcon } from "lucide-react";

interface NavItemButtonProps {
  id: string;
  label: string;
  icon: LucideIcon;
  activeSection: string;
  onClick: (id: string) => void;
  isMobile?: boolean;
}

const NavItemButton: React.FC<NavItemButtonProps> = ({
  id,
  label,
  icon: Icon,
  activeSection,
  onClick,
  isMobile = false,
}) => {
  const isActive = activeSection === id;

  const baseClasses = isMobile
    ? "flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-lg font-medium"
    : "flex items-center space-x-2 transition-all";

  const activeClasses = isMobile
    ? "bg-gray-800 text-blue-400"
    : "text-blue-400 font-semibold";

  const inactiveClasses = isMobile
    ? "text-gray-300 hover:bg-gray-800 hover:text-white"
    : "text-gray-300 hover:text-white";

  return (
    <button
      onClick={() => onClick(id)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon className={isMobile ? "w-6 h-6" : "w-5 h-5"} />
      <span className={isMobile ? "" : "text-base font-medium"}>{label}</span>
    </button>
  );
};

export default NavItemButton;
