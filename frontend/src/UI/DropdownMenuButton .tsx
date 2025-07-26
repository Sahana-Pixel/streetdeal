// components/ui/DropdownMenuButton.tsx
import React from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DropdownItem {
  label: string;
  icon: LucideIcon;
  id: string;
}

interface DropdownMenuButtonProps {
  buttonLabel: string;
  icon: LucideIcon;
  items: DropdownItem[];
  isOpen: boolean;
  toggle: () => void;
  onSelect: (id: string) => void;
  bgColor?: string; // optional for different button bg (e.g., blue)
  textColor?: string; // optional for text color
}

const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = ({
  buttonLabel,
  icon: Icon,
  items,
  isOpen,
  toggle,
  onSelect,
  bgColor = "bg-gray-900",
  textColor = "text-white",
}) => {
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg ${bgColor} ${textColor} hover:bg-opacity-80 transition-all shadow-md hover:shadow-lg border border-gray-700 text-base font-medium group`}
      >
        <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span>{buttonLabel}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-xl py-2 z-10 border border-gray-700">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="flex items-center space-x-2 w-full px-4 py-3 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuButton;
