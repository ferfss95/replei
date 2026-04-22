import React from "react";
import svgPaths from "../../imports/svg-0loa5h5unu";

interface LogoProps {
  color?: string;
}

export function Logo({ color = "#0F172B" }: LogoProps) {
  return (
    <span className="contents select-none">
      <svg className="block shrink-0" width="67" height="25" fill="none" viewBox="0 0 60 19.0327">
        <path d={svgPaths.pbff1d00} fill={color} />
        <path d={svgPaths.p2c3c4d80} fill={color} />
        <path d={svgPaths.p2cd23571} fill={color} />
        <path d={svgPaths.p1ceb1c00} fill={color} />
        <path d={svgPaths.p3c744200} fill={color} />
        <path d={svgPaths.p9781100} fill={color} />
      </svg>
    </span>
  );
}