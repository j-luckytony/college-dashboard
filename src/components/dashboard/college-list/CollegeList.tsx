import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import type { College } from "@/types/dashboard";
import { CollegeItem } from "./CollegeItem";
import { cn } from "@/lib/utils";

export interface CollegeListProps {
  /** List of colleges to display */
  colleges: College[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * CollegeList component - displays the curated list of colleges
 * Shows college name, location, type (reach/target/safety), and who recommended it
 */
export const CollegeList: React.FC<CollegeListProps> = ({
  colleges,
  className,
}) => {
  return (
    <Card className={cn("p-6 border-none rounded-xl", className)}>
      <CardHeader>
        <CardTitle className="text-gray-dark text-1.5xl leading-6">
          Curated College List
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* College list */}
        <div className="space-y-3">
          {colleges.map((college) => (
            <CollegeItem key={college.id} college={college} />
          ))}
        </div>

        {/* Empty state */}
        {colleges.length === 0 && (
          <div className="py-8 text-center text-gray-500">
            <p>No colleges added yet</p>
            <p className="mt-1 text-sm">Start building your college list</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CollegeList;
