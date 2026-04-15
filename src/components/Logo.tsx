"use client";

interface LogoProps {
  variant?: "horizontal" | "icon";
  className?: string;
}

// Brand colors
const RED = "#CC1515";
const BLUE = "#1E3A8A";

/**
 * ACORVI Logo
 *
 * A mark: isosceles triangle (outer) + inner void triangle, combined with
 * fillRule="evenodd" so the void is truly transparent on any background.
 * Red dot sits above the apex. Swoosh extends under the full logo.
 *
 * Horizontal: A mark + "corvi" text + full-width swoosh
 * Icon:       A mark + swoosh only
 */
export default function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  if (variant === "icon") {
    // ViewBox: 40 wide × 46 tall
    // A mark: apex (20,8) → left (2,39) → right (38,39)
    // Void:   apex (20,8) → void-left (14.5,28) → void-right (25.5,28)
    // Crossbar implied at y=28 (~65% of the way down from 8 to 39)
    return (
      <svg
        className={className}
        width="40"
        height="46"
        viewBox="0 0 40 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ACORVI"
      >
        {/* Dot above apex */}
        <circle cx="20" cy="2.5" r="2.5" fill={RED} />

        {/* A shape — outer triangle + void triangle, evenodd = transparent void */}
        <path
          d="M20 8 L2 39 L38 39 Z M20 8 L14.5 28 L25.5 28 Z"
          fill={RED}
          fillRule="evenodd"
        />

        {/* Swoosh underline */}
        <path
          d="M2 43.5 Q20 41 38 43.5"
          stroke={RED}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Horizontal — ViewBox: 182 wide × 46 tall
  // A mark: apex (19,8) → left (2,38) → right (36,38)
  // Void:   apex (19,8) → void-left (13.5,27) → void-right (24.5,27)
  // "corvi" starts at x=44, font-size 27, baseline y=37
  // Swoosh runs from x=2 to x=180 (under A + "corvi")
  return (
    <svg
      className={className}
      width="182"
      height="46"
      viewBox="0 0 182 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ACORVI"
    >
      {/* Dot above apex */}
      <circle cx="19" cy="2.5" r="2.5" fill={RED} />

      {/* A shape — evenodd compound path */}
      <path
        d="M19 8 L2 38 L36 38 Z M19 8 L13.5 27 L24.5 27 Z"
        fill={RED}
        fillRule="evenodd"
      />

      {/* "corvi" — Inter 900, blue */}
      <text
        x="44"
        y="37"
        fontFamily="'Inter', 'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="27"
        fill={BLUE}
        letterSpacing="-0.5"
      >
        corvi
      </text>

      {/* Swoosh underline — spans full logo width */}
      <path
        d="M2 43.5 Q91 41 180 43.5"
        stroke={RED}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
