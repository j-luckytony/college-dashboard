import React from "react";

import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Child components */
  children: React.ReactNode;
}

/**
 * Card component - provides consistent white background container
 * Used throughout the dashboard for section containers
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

/**
 * Props for CardHeader component
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Child components */
  children: React.ReactNode;
}

/**
 * CardHeader component - provides consistent header styling
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-4 flex items-center justify-between", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

/**
 * Props for CardTitle component
 */
export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Additional CSS classes */
  className?: string;
  /** Child components */
  children: React.ReactNode;
}

/**
 * CardTitle component - provides consistent title styling
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-semibold text-gray-900", className)}
        {...props}
      >
        {children}
      </h3>
    );
  },
);

CardTitle.displayName = "CardTitle";

/**
 * Props for CardContent component
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes */
  className?: string;
  /** Child components */
  children: React.ReactNode;
}

/**
 * CardContent component - provides consistent content container
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = "CardContent";
