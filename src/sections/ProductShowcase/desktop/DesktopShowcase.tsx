import { useRef } from 'react';
import { slides } from '../slides';
import { getSlideState } from './getSlideState';
import { IconWheel } from './IconWheel';
import { SlideCard } from './SlideCard';
import { useSlideScroll } from './useSlideScroll';

export const DesktopShowcase = () => {
  const trackRef = useRef<HTMLElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { activeIndex, previousIndex, wheelStep, rotateWheel } = useSlideScroll(
    { trackRef, anchorRefs, count: slides.length },
  );

  return (
    <main>
      <section
        ref={trackRef}
        aria-label="Преимущества фена-стайлера"
        className="relative"
        style={{ height: `${slides.length * 100}vh` }}
      >
        {slides.map(({ id }, index) => {
          return (
            <div
              key={id}
              ref={(node) => {
                anchorRefs.current[index] = node;
              }}
              aria-hidden="true"
              className="absolute inset-x-0 h-screen snap-start snap-always"
              style={{ top: `${index * 100}vh` }}
            />
          );
        })}
        <div className="[container-type:size] sticky top-0 h-screen overflow-hidden bg-stage">
          <div className="relative size-full design-units-desktop">
            {slides.map(({ id, wheelLabel, Desktop }, index) => {
              return (
                <SlideCard
                  key={id}
                  label={wheelLabel.join(' ')}
                  state={getSlideState(index, activeIndex, previousIndex)}
                >
                  <Desktop />
                </SlideCard>
              );
            })}
            <IconWheel
              slides={slides}
              step={wheelStep}
              onRotate={rotateWheel}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
