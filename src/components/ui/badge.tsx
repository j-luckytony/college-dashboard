import React from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "primary" | "secondary" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the badge */
  variant?: BadgeVariant;
  /** Additional CSS classes */
  className?: string;
  /** Badge content */
  children: React.ReactNode;
}

/**
 * Badge component - provides consistent styling for tags and labels
 * Pass custom className for specific styling needs
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
          {
            // Basic variants - use className prop for custom styling
            "bg-gray-100 text-gray-800": variant === "default",
            "bg-blue-100 text-blue-800": variant === "primary",
            "bg-gray-50 text-gray-600": variant === "secondary",
            "border border-gray-200 text-gray-700": variant === "outline",
          },
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

/**
 * Helper function to format recommendation source text
 */
export function formatRecommendationText(source: string): string {
  switch (source.toLowerCase()) {
    case "student":
      return "Student's Pick";
    case "counselor":
      return "Eddie's Pick";
    default:
      return source;
  }
}
