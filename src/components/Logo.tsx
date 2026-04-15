"use client";

interface LogoProps {
  variant?: "horizontal" | "icon";
  className?: string;
}

export default function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        className={className}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ACORVI"
      >
        {/* Red dot */}
        <circle cx="20" cy="4" r="3.5" fill="#CC1515" />
        {/* Letter A shape */}
        <path
          d="M20 10 L8 34 L13 34 L16 27 L24 27 L27 34 L32 34 Z"
          fill="#CC1515"
        />
        <path
          d="M17.5 22 L20 15 L22.5 22 Z"
          fill="#0f172a"
        />
        {/* Swoosh */}
        <path
          d="M6 37 Q20 33 34 37"
          stroke="#CC1515"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width="160"
      height="44"
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ACORVI"
    >
      {/* Red dot above A */}
      <circle cx="16" cy="2.5" r="3" fill="#CC1515" />
      {/* Letter A */}
      <path
        d="M16 8 L4 36 L9.5 36 L12.5 28.5 L19.5 28.5 L22.5 36 L28 36 Z"
        fill="#CC1515"
      />
      <path
        d="M14 23.5 L16 17 L18 23.5 Z"
        fill="#0f172a"
      />
      {/* Swoosh underline */}
      <path
        d="M4 40 Q20 36 38 40"
        stroke="#CC1515"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Text: corvi */}
      <text
        x="34"
        y="34"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#1E3A8A"
        letterSpacing="-0.5"
      >
        corvi
      </text>
    </svg>
  );
}
