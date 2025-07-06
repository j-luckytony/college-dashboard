import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SidebarItem } from "./SidebarItem";

export interface SidebarProps {
  /** Currently active sidebar item index */
  activeIndex?: number;
  /** Handler for sidebar item clicks */
  onItemClick?: (index: number) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Sidebar component - left navigation panel with icons
 * Displays profile, camera, magic wand, and document icons as shown in the design
 */
export const Sidebar: React.FC<SidebarProps> = ({
  activeIndex = 0,
  onItemClick,
  className,
}) => {
  // Navigation items with SVG icons
  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <Image
          src="/icons/dashboard.svg"
          alt="Dashboard"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ),
    },
    {
      id: "magic",
      label: "Magic Wand",
      icon: (
        <Image
          src="/icons/magic-wand.svg"
          alt="Magic Wand"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ),
    },
    {
      id: "document",
      label: "Document",
      icon: (
        <Image
          src="/icons/document.svg"
          alt="Document"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ),
    },
  ];

  return (
    <aside
      className={cn(
        "flex h-screen w-27 flex-col items-center bg-white pt-9",
        className,
      )}
    >
      {/* Profile section */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={34}
            height={32}
            className="-ml-0.5 h-8 w-8.5"
          />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Profile</p>
        </TooltipContent>
      </Tooltip>

      {/* Navigation items */}
      <nav className="mt-5.5 flex flex-col space-y-2">
        {sidebarItems.map((item, index) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <SidebarItem
                icon={item.icon}
                isActive={index === activeIndex}
                onClick={() => onItemClick?.(index)}
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      {/* Bottom spacer */}
      <div className="flex-1" />

      {/* Avatar at bottom */}
      <div className="p-4 pt-3 w-full">
        <div className="flex items-center justify-center border-gray-line border rounded-lg px-6 py-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/icons/avatar.svg"
                alt="User Avatar"
                width={20}
                height={20}
                className="h-5 w-5 rounded-full"
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
