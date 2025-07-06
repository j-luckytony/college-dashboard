import React from "react";

import { cn } from "@/lib/utils";

export interface SidebarItemProps {
  /** Icon element - will be provided as SVG later */
  icon: React.ReactNode;
  /** Whether this item is currently active */
  isActive?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual sidebar navigation item
 */
export const SidebarItem = React.forwardRef<
  HTMLButtonElement,
  SidebarItemProps
>(({ icon, isActive = false, onClick, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "flex px-6 py-3 items-center justify-center rounded-lg transition-colors",
        "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300",
        {
          "bg-gray-faint text-blue-600": isActive,
          "text-gray-600 hover:text-gray-900": !isActive,
        },
        className,
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      {icon}
    </button>
  );
});

SidebarItem.displayName = "SidebarItem";

export default SidebarItem;
