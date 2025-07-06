import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { RadarDataPoint } from "@/types/dashboard";

export interface AdmissionsStrengthD3Props {
  /** Radar chart data points */
  data: RadarDataPoint[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * AdmissionsStrength component - D3-powered radar chart with alternating polygon backgrounds
 * Provides complete control over styling and alternating ring colors
 */
export const AdmissionsStrength: React.FC<AdmissionsStrengthD3Props> = ({
  data,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  // Use a simple static ID to avoid hydration issues
  const gradientId = "radar-chart-gradient";

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Chart dimensions and configuration
    const width = 400;
    const height = 320;
    const centerX = width / 2;
    const centerY = height / 2;
    const labelSpace = 30; // Space reserved for labels
    const maxRadius = Math.min(width, height) / 2 - labelSpace;
    const levels = 5; // Number of concentric rings
    const angleSlice = (Math.PI * 2) / data.length;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const defs = svg.append("defs");

    // Create main group
    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX}, ${centerY})`);

    // Color scheme for alternating backgrounds
    const backgroundColors = [
      "#F0F2FA",
      "white",
      "#F0F2FA",
      "white",
      "#F0F2FA",
    ];

    // Create alternating polygon backgrounds
    for (let level = levels; level > 0; level--) {
      const radius = (maxRadius * level) / levels;
      const points: Array<[number, number]> = [];

      // Calculate hexagon/polygon points
      for (let i = 0; i < data.length; i++) {
        const angle = angleSlice * i - Math.PI / 2; // Start from top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push([x, y]);
      }

      // Create polygon path
      const line = d3
        .line()
        .x((d) => d[0])
        .y((d) => d[1])
        .curve(d3.curveLinearClosed);

      g.append("path")
        .datum(points)
        .attr("d", line)
        .attr("fill", backgroundColors[level - 1])
        .attr("stroke", "none")
        .attr("opacity", 1);
    }

    // Create grid lines (on top of backgrounds)
    for (let level = 1; level <= levels; level++) {
      const radius = (maxRadius * level) / levels;
      const points: Array<[number, number]> = [];

      for (let i = 0; i < data.length; i++) {
        const angle = angleSlice * i - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push([x, y]);
      }

      const line = d3
        .line()
        .x((d) => d[0])
        .y((d) => d[1])
        .curve(d3.curveLinearClosed);

      g.append("path")
        .datum(points)
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "#4880FF40")
        .attr("stroke-width", 1);
    }

    // Create radial lines
    for (let i = 0; i < data.length; i++) {
      const angle = angleSlice * i - Math.PI / 2;
      const x = maxRadius * Math.cos(angle);
      const y = maxRadius * Math.sin(angle);

      g.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "#4880FF59")
        .attr("stroke-width", 1);
    }

    // Add percentage labels on radial axis
    for (let level = 0; level <= levels; level++) {
      const radius = (maxRadius * level) / levels;
      const percentage = (level * 100) / levels;

      g.append("text")
        .attr("x", 10)
        .attr("y", -radius + 5)
        .attr("text-anchor", "start")
        .attr("font-size", "10px")
        .attr("fill", "#000000")
        .attr("opacity", 0.5)
        .text(`${percentage}%`);
    }

    // Create data path
    const dataPoints: Array<[number, number]> = [];
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const value = (d.value / d.max) * maxRadius;
      const x = value * Math.cos(angle);
      const y = value * Math.sin(angle);
      dataPoints.push([x, y]);
    });

    const dataLine = d3
      .line()
      .x((d) => d[0])
      .y((d) => d[1])
      .curve(d3.curveLinearClosed);

    const radarAreaGradient = defs
      .append("radialGradient")
      .attr("id", "radar-area-gradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "88.99%");

    radarAreaGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "rgba(4, 104, 190, 0.5)");

    radarAreaGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "rgba(120, 190, 216, 0.25)");

    g.append("path")
      .datum(dataPoints)
      .attr("d", dataLine)
      .attr("fill", "url(#radar-area-gradient)")
      .attr("stroke", "none");

    // Add data outline
    g.append("path")
      .datum(dataPoints)
      .attr("d", dataLine)
      .attr("fill", "none")
      .attr("stroke", "#0468BEBF")
      .attr("stroke-width", 2);

    // Add data points with gradient and white border
    g.selectAll(".data-point")
      .data(dataPoints)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 4)
      .attr("fill", `url(#${gradientId})`)
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", 3)
      .style("opacity", 1)
      .style("filter", "drop-shadow(0px 1.63px 8.14px rgba(2, 62, 162, 0.22))");

    // Add category labels
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const labelDistance = maxRadius + 8;

      const x = labelDistance * Math.cos(angle);
      const y = labelDistance * Math.sin(angle);

      let anchor: "start" | "middle" | "end" = "middle";
      if (angle > -Math.PI / 2 && angle < Math.PI / 2) {
        anchor = "start"; // Right side
      } else if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
        anchor = "end"; // Left side
      }

      const isTopOrBottom = Math.abs(Math.cos(angle)) < 0.1;

      g.append("text")
        .attr("x", x)
        .attr("y", y + (isTopOrBottom ? (y > 0 ? 10 : -10) : 0)) // Add vertical offset if needed
        .attr("text-anchor", anchor)
        .attr("dominant-baseline", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "700")
        .attr("fill", "#A3AED0")
        .text(d.category);
    });

    // Gradient for data points
    const gradient = defs
      .append("linearGradient")
      .attr("id", gradientId)
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .attr("gradientTransform", "rotate(204.92)");

    gradient
      .append("stop")
      .attr("offset", "12.64%")
      .attr("stop-color", "#0468BE");

    gradient
      .append("stop")
      .attr("offset", "94.58%")
      .attr("stop-color", "#157EBF");
  }, [data]);

  return (
    <Card className={cn("rounded-xl border-none p-6", className)}>
      <CardHeader>
        <CardTitle className="text-1.5xl leading-6 text-gray-dark">
          Admissions Strength Index
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex h-80 items-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-1">
              <div className="p-1">
                <div className="h-2 w-2 rounded-full bg-blue-primary" />
              </div>
              <span className="text-xs leading-3 text-black opacity-70">
                You
              </span>
            </div>
          </div>
          {/* Chart container */}
          <div className="h-full flex-1 flex items-center justify-center">
            <svg ref={svgRef} className="overflow-visible" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdmissionsStrength;
