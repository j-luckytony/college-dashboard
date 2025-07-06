import React from "react";

// Static counter for stable IDs
let idCounter = 0;

export interface CircularProgressBarProps {
  /** Progress percentage (0-100) */
  value: number;
  /** Size of the progress bar */
  size?: number;
  /** Stroke width */
  strokeWidth?: number;
  /** Progress stroke color - can be string or gradient object */
  strokeColor?: string | Record<string, string>;
  /** Trail (background) color */
  trailColor?: string;
  /** Gap degree (0-360) */
  gapDegree?: number;
  /** Gap position */
  gapPosition?: "top" | "bottom" | "left" | "right";
  /** Rotation offset in degrees */
  rotationOffset?: number;
  /** Show endpoint ring */
  showEndpointRing?: boolean;
  /** Endpoint ring color */
  endpointRingColor?: string;
  /** Children to render inside the circle */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CircularProgressBar component - Custom SVG implementation with proper rounded caps
 * Ensures both trail and progress have rounded endpoints
 */
export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  size = 206,
  strokeWidth = 12,
  strokeColor = {
    "0%": "#78BED8",
    "25%": "#0468BE",
    "75%": "#78BED8",
    "100%": "#0468BE",
  },
  trailColor = "#E8E8E8",
  gapDegree = 72,
  gapPosition = "top",
  rotationOffset = 108,
  showEndpointRing = true,
  endpointRingColor = "#0468BE",
  children,
  className,
}) => {
  // Generate stable ID for this component instance
  const [gradientId] = React.useState(() => `progress-gradient-${++idCounter}`);

  // Calculate dimensions for proper sizing
  const totalWidth = 238; // Total width including ring
  const totalHeight = 212; /// Total height
  const progressBarSize = 206; // Original progress bar size
  const padding = (totalWidth - progressBarSize) / 2; // 16px padding on each side

  const center = progressBarSize / 2;
  const radius = (progressBarSize - strokeWidth) / 2;

  // SVG positioning
  const svgCenter = totalWidth / 2;

  // Calculate arc parameters
  const availableArc = 360 - gapDegree;
  const progressAngle = (value * availableArc) / 100;

  // Convert to radians
  const startAngleRad = (rotationOffset * Math.PI) / 180;
  const endAngleRad = ((rotationOffset + progressAngle) * Math.PI) / 180;
  const trailEndAngleRad = ((rotationOffset + availableArc) * Math.PI) / 180;

  // Calculate path coordinates (centered in the total width)
  const startX = svgCenter + radius * Math.cos(startAngleRad);
  const startY = svgCenter + radius * Math.sin(startAngleRad);
  const endX = svgCenter + radius * Math.cos(endAngleRad);
  const endY = svgCenter + radius * Math.sin(endAngleRad);
  const trailEndX = svgCenter + radius * Math.cos(trailEndAngleRad);
  const trailEndY = svgCenter + radius * Math.sin(trailEndAngleRad);

  // Create SVG path for trail (background)
  const trailLargeArcFlag = availableArc > 180 ? 1 : 0;
  const trailPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${trailLargeArcFlag} 1 ${trailEndX} ${trailEndY}`;

  // Create SVG path for progress
  const progressLargeArcFlag = progressAngle > 180 ? 1 : 0;
  const progressPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${progressLargeArcFlag} 1 ${endX} ${endY}`;

  return (
    <div
      className={`relative ${className || ""}`}
      style={{
        width: totalWidth,
        height: totalHeight,
      }}
    >
      {/* Custom SVG Circle */}
      <svg
        width={totalWidth}
        height={totalHeight}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Define gradient and shadow filter */}
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {typeof strokeColor === "object" ? (
              Object.entries(strokeColor).map(([offset, color]) => (
                <stop key={offset} offset={offset} stopColor={color} />
              ))
            ) : (
              <stop offset="0%" stopColor={strokeColor} />
            )}
          </linearGradient>

          {/* Shadow filter for progress bar */}
          <filter
            id={`shadow-${gradientId}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="3"
              floodColor="#023EA2"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Trail (background) */}
        <path
          d={trailPath}
          fill="none"
          stroke={trailColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Progress with shadow */}
        <path
          d={progressPath}
          fill="none"
          stroke={
            typeof strokeColor === "object"
              ? `url(#${gradientId})`
              : strokeColor
          }
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#shadow-${gradientId})`}
        />

        {/* Manual rounded cap for progress end only */}
        <circle cx={endX} cy={endY} r={strokeWidth / 2} fill="#0468BE" />
      </svg>

      {/* Children (inner content) */}
      {children && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {children}
        </div>
      )}

      {/* Endpoint ring */}
      {showEndpointRing && (
        <div
          className="absolute h-4 w-4 rounded-full border-4 border-white"
          style={{
            backgroundColor: endpointRingColor,
            left: endX - 8,
            top: endY - 8,
            boxShadow: "0px 3.25px 8.14px 0px #023EA261",
          }}
        />
      )}
    </div>
  );
};

export default CircularProgressBar;
