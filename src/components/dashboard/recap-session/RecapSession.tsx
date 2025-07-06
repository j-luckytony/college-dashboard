import React from "react";

import Image from "next/image";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { SessionRecap } from "@/types/dashboard";

export interface RecapSessionProps {
  /** Session recap data */
  data: SessionRecap;
  /** Additional CSS classes */
  className?: string;
}

/**
 * RecapSession component - displays information about the last counseling session
 * Shows counselor, date, topic, key points, and next action
 */
export const RecapSession: React.FC<RecapSessionProps> = ({
  data,
  className,
}) => {
  return (
    <Card className={cn("rounded-xl border-none p-6", className)}>
      <CardHeader className="mb-3">
        <CardTitle className="text-1.5xl leading-6 text-gray-dark">
          Recap on Last Session
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Session header with counselor and date */}
        <div className="gap-4.25 flex items-center">
          {/* Counselor avatar */}
          <Image
            src="/icons/counselor.svg"
            alt="Counselor"
            width={36}
            height={36}
            className="h-9 w-9"
          />

          <div className="flex-1 font-inter">
            <div className="text-sm text-black">{data.counselorName}</div>
            <div className="text-xs text-gray-muted">{data.date}</div>
          </div>
        </div>

        {/* Recap summary section - unified text container */}
        <div>
          <h4 className="mb-3 text-lg font-medium leading-5 text-gray-dark">
            Recap summary
          </h4>

          {/* All content in one div with consistent styling */}
          <div className="text-sm text-black">
            <div>Topic: {data.topic}</div>
            {data.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <span className="ml-2 mr-3">•</span>
                <span>{point}</span>
              </div>
            ))}
            <div>Next Step: {data.nextAction}</div>
          </div>
        </div>

        {/* Continue chat button */}
        <Button
          variant="outline"
          size="sm"
          className="py-2.5 border border-blue-soft px-6 text-sm text-blue-primary font-bold"
        >
          Continue Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecapSession;
