import React from "react";

import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import type { Deadline } from "@/types/dashboard";

import { DeadlineItem } from "./DeadlineItem";
import { cn } from "@/lib/utils";

export interface UpcomingDeadlinesProps {
  /** List of deadlines to display */
  deadlines: Deadline[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * UpcomingDeadlines component - displays list of upcoming college deadlines
 * Shows deadline urgency and allows quick access to each item
 */
export const UpcomingDeadlines: React.FC<UpcomingDeadlinesProps> = ({
  deadlines,
  className,
}) => {
  // Sort deadlines by urgency and days left
  const sortedDeadlines = [...deadlines].sort((a, b) => {
    // Urgent deadlines first
    if (a.isUrgent && !b.isUrgent) return -1;
    if (!a.isUrgent && b.isUrgent) return 1;

    // Then by days remaining (ascending)
    return a.daysLeft - b.daysLeft;
  });

  return (
    <Card className={cn("p-6 pb-2 border-none rounded-xl", className)}>
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-gray-dark text-1.5xl leading-6">
            Upcoming deadlines
          </CardTitle>

          {/* External link icon */}
          <button
            className="text-gray-400 hover:text-gray-600"
            type="button"
            aria-label="View all deadlines"
          >
            <Image
              src="/icons/external-link.svg"
              alt="External link"
              width={16}
              height={16}
              className="h-4 w-4"
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="mr-6.5">
        {/* Deadlines list */}
        <div className="space-y-2">
          {sortedDeadlines.map((deadline) => (
            <DeadlineItem key={deadline.id} deadline={deadline} />
          ))}
        </div>

        {/* Empty state */}
        {deadlines.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <p>No upcoming deadlines</p>
            <p className="mt-1 text-sm">All caught up!</p>
          </div>
        )}

        {/* Show count if there are many deadlines */}
        {deadlines.length > 6 && (
          <div className="mt-4 text-center">
            <button
              className="text-sm text-blue-600 hover:text-blue-700"
              type="button"
            >
              View all {deadlines.length} deadlines
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingDeadlines;
