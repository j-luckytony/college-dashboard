import React from "react";

import { cn } from "@/lib/utils";
import type { OverallProgress as OverallProgressType } from "@/types/dashboard";

export interface AcademicMetricsProps {
  /** Academic data to display */
  academics: OverallProgressType["academics"];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Component for displaying academic metrics in a grid
 */
export const AcademicMetrics: React.FC<AcademicMetricsProps> = ({
  academics,
  className,
}) => {
  return (
    <div className={`space-y-4 ${className || ""}`}>
      <h4 className="text-lg font-medium leading-5 text-gray-dark">
        Academics
      </h4>

      <div className="flex text-left gap-6 pr-2 tracking-[-2%]">
        <div className="space-y-1.5">
          <div className="font-roboto-condensed text-4xl leading-8 font-bold text-gray-dark">
            {academics.gpa.toFixed(1)}
          </div>
          <div className="text-sm leading-4 text-gray-dim font-medium">
            <div>Unweighted</div>
            <div>GPA</div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="font-roboto-condensed text-4xl leading-8 font-bold text-gray-dark">
            {academics.advancedPlacements}
          </div>
          <div className="text-sm leading-4 text-gray-dim font-medium">
            <div># APs</div>
            <div>&nbsp;</div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="font-roboto-condensed text-4xl leading-8 font-bold text-gray-dark">
            {academics.sat}
          </div>
          <div className="text-sm leading-4 text-gray-dim font-medium">
            <div>SAT</div>
            <div>superscore</div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div
            className={cn(
              "font-roboto-condensed text-4xl leading-8 font-bold",
              academics.act ? "text-gray-dark" : "text-gray-dim",
            )}
          >
            {academics.act ? academics.act.toString() : "N/A"}
          </div>
          <div className="text-sm leading-4 text-gray-dim font-medium">
            <div>ACT</div>
            <div>superscore</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicMetrics;
