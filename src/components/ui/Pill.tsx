import type { PillProps } from './types';

const toneClassNames = {
  light: 'bg-white text-ink',
  dark: 'bg-ink text-white',
};

export const Pill = ({
  children,
  tone = 'light',
  className = '',
}: PillProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-display font-semibold tracking-display whitespace-nowrap shadow-soft ${toneClassNames[tone]} ${className}`}
    >
      {children}
    </span>
  );
};
