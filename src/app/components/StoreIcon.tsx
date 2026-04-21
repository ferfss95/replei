/**
 * StoreIcon Component
 * Ícone SVG customizado para Loja e Regional
 */

import svgPaths from "../../imports/svg-xgu2gec2in";

interface StoreIconProps {
  size?: number;
  className?: string;
}

export const StoreIcon = ({ size = 16, className = "" }: StoreIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d={svgPaths.p2d773940} fill="currentColor" />
  </svg>
);
