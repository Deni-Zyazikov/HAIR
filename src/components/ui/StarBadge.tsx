import type { StarBadgeProps } from './types';

export const StarBadge = ({
  children,
  className,
  textRotation = 0,
}: StarBadgeProps) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 180 179"
        aria-hidden="true"
        className="absolute inset-0 size-full fill-ink"
      >
        <path d="M89.993 0L106.587 12.4217L126.798 7.82316L136.905 25.9202L157.239 29.94L159.111 50.5832L176.053 62.5262L169.367 82.1462L179.986 99.9474L165.898 115.152L168.359 135.733L149.304 143.893L143.181 163.696L122.455 163.4L108.807 179L89.993 170.3L71.1794 179L57.5309 163.4L36.8051 163.696L30.6818 143.893L11.6275 135.733L14.0882 115.152L-1.53417e-05 99.9474L10.6192 82.1462L3.93312 62.5262L20.8746 50.5832L22.7468 29.94L43.0813 25.9202L53.1879 7.82316L73.3994 12.4217L89.993 0Z" />
      </svg>
      <p
        className="relative flex size-full items-center justify-center text-center leading-[1.13] font-semibold tracking-display text-white"
        style={{ rotate: `${textRotation}deg` }}
      >
        {children}
      </p>
    </div>
  );
};
