export const WheelRing = () => {
  return (
    <svg
      viewBox="0 0 744 744"
      aria-hidden="true"
      className="absolute -top-372 -left-372 size-744 text-cocoa"
    >
      <defs>
        <filter
          id="wheel-ring-inner-shadow"
          x="-2%"
          y="-2%"
          width="104%"
          height="104%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="7" />
          <feGaussianBlur stdDeviation="1.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"
          />
          <feBlend in2="SourceGraphic" mode="normal" />
        </filter>
      </defs>
      <circle
        cx="372"
        cy="372"
        r="361"
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        filter="url(#wheel-ring-inner-shadow)"
      />
    </svg>
  );
};
