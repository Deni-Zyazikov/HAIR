import type { SlideCardProps } from './types';

export const SlideCard = ({ state, label, children }: SlideCardProps) => {
  const isActive = state === 'active';

  return (
    <article
      data-state={state}
      aria-label={label}
      aria-hidden={!isActive}
      inert={!isActive}
      className="absolute inset-0 m-auto h-800 w-1240 overflow-hidden radius-70 bg-card opacity-0 slide-transition data-[state=above]:-translate-y-[calc(50cqh+50%)] data-[state=active]:z-20 data-[state=active]:opacity-100 data-[state=below]:translate-y-[calc(50cqh+50%)] data-[state=leaving-above]:z-10 data-[state=leaving-above]:-translate-y-[8%] data-[state=leaving-above]:scale-[0.85] data-[state=leaving-below]:z-10 data-[state=leaving-below]:translate-y-[8%] data-[state=leaving-below]:scale-[0.85]"
    >
      {children}
    </article>
  );
};
