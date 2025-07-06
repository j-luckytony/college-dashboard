import React from "react";

import Image from "next/image";

import { Badge, formatRecommendationText } from "@/components/ui";
import type { College } from "@/types/dashboard";

export interface CollegeItemProps {
  /** College data */
  college: College;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual college list item component
 */
export const CollegeItem: React.FC<CollegeItemProps> = ({
  college,
  className,
}) => {
  return (
    <div
      className={`rounded-3.75 flex items-center space-x-3 bg-gray-soft px-3 pb-4.5 pt-4 ${className || ""}`}
    >
      {/* College logo */}
      <div className="h-15 w-15 flex flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
        {college.logoUrl ? (
          <Image
            src={college.logoUrl}
            alt={`${college.name} logo`}
            width={60}
            height={60}
            className="h-15 w-15 rounded-full object-cover"
          />
        ) : (
          // Placeholder for college logo
          <div className="h-6 w-6 rounded-full bg-gray-400" />
        )}
      </div>

      {/* College info */}
      <div className="min-w-0 flex-1 space-y-1">
        <h4 className="leading-4.5 truncate text-lg font-medium text-black">
          {college.name}
        </h4>
        <p className="font-intertruncate text-sm text-black">
          {college.location}
        </p>

        {/* Badges */}
        <div className="mt-2 flex items-center space-x-2">
          {/* College type badge */}
          <Badge
            className={`rounded-15.25 px-3 py-1 text-white text-xs leading-5.5 h-6 tracking-[0.3px] ${
              college.type === "reach"
                ? "bg-purple-base"
                : college.type === "target"
                  ? "bg-blue-primary"
                  : college.type === "safety"
                    ? "bg-green-500"
                    : "bg-gray-500"
            }`}
          >
            {college.type.charAt(0).toUpperCase() + college.type.slice(1)}
          </Badge>

          {/* Recommendation badge */}
          <Badge
            className={`rounded-15.25 px-3 py-1 text-white text-xs leading-5.5 h-6 tracking-[0.3px] ${
              college.recommendedBy === "student"
                ? "bg-gray-medium-dark"
                : college.recommendedBy === "counselor"
                  ? "bg-gradient-to-r from-blue-primary to-blue-baby"
                  : "bg-gray-500"
            }`}
          >
            {formatRecommendationText(college.recommendedBy)}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CollegeItem;
