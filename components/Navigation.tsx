import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Search, Bell, Plus, Settings, LogOut, User } from "lucide-react";
// Replaced figma asset import with local file to avoid missing dependency
import sowticsLogo from "../assets/logo.png";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "servicios", label: "Servicios" },
    { id: "quienes-somos", label: "Quienes somos" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center">
        {/* Logo - Fixed width for balance */}
        <div className="flex items-center w-40">
          <button
            onClick={() => onPageChange("home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={sowticsLogo} alt="SOWTIC" className="h-10 w-auto" />
          </button>
        </div>

        {/* Navigation Links - Perfectly Centered */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm transition-colors duration-200 ${
                currentPage === item.id
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side - Fixed width for balance */}
        <div className="flex items-center justify-end w-40">
          {/* Space for future actions if needed */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-3 border-t bg-background/95">
        <div className="flex items-center gap-6 justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm transition-colors duration-200 ${
                currentPage === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
