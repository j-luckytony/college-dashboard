import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Deadline } from "@/types/dashboard";

export interface DeadlineItemProps {
  /** Deadline data */
  deadline: Deadline;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual deadline list item component
 */
export const DeadlineItem: React.FC<DeadlineItemProps> = ({ deadline }) => {
  return (
    <div className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-50">
      {/* Left side: Icon and deadline info */}
      <div className="flex items-center space-x-2">
        {/* Deadline icon */}
        <div className="flex p-1 rounded-lg flex-shrink-0 items-center justify-center bg-yellow-base bg-opacity-10">
          <Image
            src={
              deadline.type === "Essay"
                ? "/icons/essay.svg"
                : "/icons/clock.svg"
            }
            alt={deadline.type}
            width={16}
            height={16}
            className="h-4 w-4 text-gray-600"
          />
        </div>

        {/* Deadline details */}
        <div className="font-inter">
          <div className="text-black text-sm">{deadline.college}</div>
          <div
            className={cn("text-xs", {
              "text-orange-base": deadline.isUrgent,
              "text-gray-500": !deadline.isUrgent,
            })}
          >
            {deadline.daysLeft} days left
          </div>
        </div>
      </div>

      {/* Right side: Arrow icon */}
      <div className="flex items-center">
        {/* Chevron right icon */}
        <Image
          src="/icons/arrow-right.svg"
          alt="Arrow right"
          width={16}
          height={16}
          className="h-4 w-4 text-gray-400"
        />
      </div>
    </div>
  );
};

export default DeadlineItem;
