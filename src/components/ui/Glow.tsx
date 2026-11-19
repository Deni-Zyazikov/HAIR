import type { GlowProps } from './types';

const BLUR_SPREAD = 2.4;

const toDesignUnits = (value: number) => {
  return `calc(var(--spacing) * ${value})`;
};

export const Glow = ({ x, y, diameter, color }: GlowProps) => {
  const size = diameter * BLUR_SPREAD;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full"
      style={{
        left: toDesignUnits(x - size / 2),
        top: toDesignUnits(y - size / 2),
        width: toDesignUnits(size),
        height: toDesignUnits(size),
        background: `radial-gradient(closest-side, ${color}, transparent)`,
      }}
    />
  );
};
