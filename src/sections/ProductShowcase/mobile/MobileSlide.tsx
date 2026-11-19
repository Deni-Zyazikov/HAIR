import { useRevealOnce } from '@/hooks/useRevealOnce';
import type { MobileSlideProps } from './types';

export const MobileSlide = ({
  label,
  children,
  className = '',
}: MobileSlideProps) => {
  const { ref, isRevealed } = useRevealOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label={label}
      data-state={isRevealed ? 'active' : 'idle'}
      className={`overflow-x-clip ${className}`}
    >
      <div className="@container mx-auto max-w-[480px]">
        <div className="design-units-mobile">{children}</div>
      </div>
    </section>
  );
};
