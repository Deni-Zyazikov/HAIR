import type { FeatureChipProps } from './types';

export const FeatureChip = ({
  icon,
  children,
  iconClassName,
  textClassName,
}: FeatureChipProps) => {
  return (
    <div className="flex h-100 reveal items-center rounded-full bg-mist pl-14 shadow-soft [--reveal-delay:150ms]">
      <span
        className={`flex size-76 shrink-0 rounded-full inset-ring-2 ${iconClassName}`}
      >
        {icon}
      </span>
      <p
        className={`font-semibold tracking-display text-cocoa uppercase ${textClassName}`}
      >
        {children}
      </p>
    </div>
  );
};
