import React from "react";

interface LoaderProps {
  height?: number | string;
  width?: number | string;
  color?: string;
  label?: string;
  radius?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  height = 40,
  width = 40,
  color = "green",
  label = "loading",
  radius = 48
}: LoaderProps) => (
  <svg
    width={width}
    height={height}
    version="1.1"
    id="L2"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    aria-label={label}
    className="loader"
  >
    <circle
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      cx="50"
      cy="50"
      r={radius}
    />
    <line
      fill="none"
      strokeLinecap="round"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      x1="50"
      y1="50"
      x2="85"
      y2="50.5"
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
    <line
      fill="none"
      strokeLinecap="round"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      x1="50"
      y1="50"
      x2="49.5"
      y2="74"
    >
      <animateTransform
        attributeName="transform"
        dur="15s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);
