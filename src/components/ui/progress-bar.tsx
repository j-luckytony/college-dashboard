import React from "react";

import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
  className?: string;
  barClassName?: string;
  variant?: "blue" | "green" | "purple" | "orange" | "gradient";
  showFraction?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  className,
  barClassName,
  variant = "blue",
  showFraction = true,
}) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={cn("space-y-2", className)}>
      {/* Label + value */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium leading-5 text-gray-dark">
          {label}
        </span>
        {showFraction && (
          <div className="font-roboto-condensed text-gray-dark text-xl leading-8 font-bold tracking-[10%]">
            <span className="text-4xl leading-8">{current}</span>/{total}
          </div>
        )}
      </div>

      {/* Progress container */}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-gray-medium">
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out rounded-full",
            {
              "bg-blue-500": variant === "blue",
              "bg-green-500": variant === "green",
              "bg-purple-500": variant === "purple",
              "bg-orange-500": variant === "orange",
              "bg-gradient-to-r from-blue-deep to-blue-soft":
                variant === "gradient",
            },
            barClassName,
          )}
          style={{
            width: `${percentage}%`,
          }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`${label}: ${current} out of ${total}`}
        />
      </div>
    </div>
  );
};

/**
 * Compact fraction-only display
 */
export interface ProgressNumberProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressNumber: React.FC<ProgressNumberProps> = ({
  current,
  total,
  className,
}) => {
  return (
    <span className={cn("text-lg font-semibold text-gray-900", className)}>
      {current}
      <span className="text-gray-400">/{total}</span>
    </span>
  );
};
