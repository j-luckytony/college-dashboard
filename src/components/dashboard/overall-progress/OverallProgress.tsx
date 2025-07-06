import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ProgressBar,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import type { OverallProgress as OverallProgressType } from "@/types/dashboard";
import { AcademicMetrics } from "./AcademicMetrics";
import { CircularProgressBar } from "./CircularProgressBar";

export interface OverallProgressRCProps {
  /** Progress data to display */
  data: OverallProgressType;
  /** Additional CSS classes */
  className?: string;
}

/**
 * OverallProgress component - RC-Progress powered version with better customization
 * Eliminates complex endpoint ring calculations and provides cleaner gradient control
 */
export const OverallProgressRC: React.FC<OverallProgressRCProps> = ({
  data,
  className,
}) => {
  return (
    <Card className={cn("rounded-xl border-none p-6 flex flex-col", className)}>
      <CardHeader className="flex items-center justify-between mb-0">
        <CardTitle className="text-1.5xl leading-6 text-gray-dark">
          Overall progress
        </CardTitle>
        <button
          className="leading-5.75 flex items-center gap-2 text-sm text-black font-semibold"
          type="button"
        >
          View more
          <Image
            src="/icons/external-link.svg"
            alt="External link"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </button>
      </CardHeader>

      <CardContent className="h-full pr-8">
        <div className="flex gap-3 h-full">
          {/* Left side: Custom CircularProgressBar component */}
          <div className="flex items-center h-full">
            <div className="font-roboto-condensed mb-4">
              <CircularProgressBar
                value={data.completeness}
                size={206}
                strokeWidth={12}
                strokeColor={{
                  "0%": "#0468BE",
                  "25%": "#78BED8",
                  "75%": "#0468BE",
                  "100%": "#78BED8",
                }}
                trailColor="#E8E8E8"
                gapDegree={90}
                gapPosition="top"
                rotationOffset={135}
                showEndpointRing={true}
                endpointRingColor="#0468BE"
              >
                {/* Custom text content inside circle */}
                <div className="font-roboto-condensed text-20 leading-full font-bold text-blue-primary tracking-[0.81px] mt-8">
                  {data.completeness}%
                </div>
                <div className="leading-full font-medium text-sm text-blue-primary tracking-[0.81px] font-metropolis">
                  Completeness
                </div>
              </CircularProgressBar>
            </div>
          </div>

          {/* Right side: Academic metrics and progress bars */}
          <div className="flex-1 px-3 py-6 space-y-6">
            {/* Academic metrics */}
            <AcademicMetrics academics={data.academics} />

            {/* Progress bars for activities and honors */}
            <div className="space-y-6">
              <ProgressBar
                label="Activities"
                current={data.activities.current}
                total={data.activities.total}
                variant="gradient"
                className="space-y-4.5"
              />

              <ProgressBar
                label="Honors"
                current={data.honors.current}
                total={data.honors.total}
                variant="gradient"
                className="space-y-4.5"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallProgressRC;
