import type { CSSProperties } from 'react';
import { wrapIndex } from '@/utils/wrapIndex';
import type { IconWheelProps } from './types';
import { WheelRing } from './WheelRing';

const ICON_COUNT = 21;
const STEP_ANGLE = 360 / ICON_COUNT;

const getOffsetFromCenter = (iconIndex: number, step: number) => {
  const offset = wrapIndex(iconIndex - step, ICON_COUNT);

  if (offset > ICON_COUNT / 2) {
    return offset - ICON_COUNT;
  }

  return offset;
};

const getOrbitTransform = (iconAngle: number) => {
  return [
    `rotate(calc(var(--wheel-angle) - ${iconAngle}deg))`,
    'translateX(calc(var(--spacing) * 361))',
    `rotate(calc(${iconAngle}deg - var(--wheel-angle)))`,
  ].join(' ');
};

export const IconWheel = ({ slides, step, onRotate }: IconWheelProps) => {
  const activeIndex = wrapIndex(step, slides.length);
  const wheelStyle = {
    '--wheel-angle': `${step * STEP_ANGLE}deg`,
  } as CSSProperties;

  return (
    <nav
      aria-label="Слайды"
      className="absolute top-1/2 -left-238 z-30 wheel-rotation"
      style={wheelStyle}
    >
      <WheelRing />
      <ul>
        {Array.from({ length: ICON_COUNT }, (_, iconIndex) => {
          const { Glyph, wheelLabel } = slides[iconIndex % slides.length];
          const offset = getOffsetFromCenter(iconIndex, step);
          const isVisible = Math.abs(offset) <= 1;

          return (
            <li
              key={iconIndex}
              className="absolute top-0 left-0 flex size-0 items-center justify-center"
              style={{ transform: getOrbitTransform(iconIndex * STEP_ANGLE) }}
            >
              <button
                type="button"
                data-active={offset === 0}
                data-visible={isVisible}
                aria-label={wheelLabel.join(' ')}
                aria-current={offset === 0}
                aria-hidden={!isVisible}
                tabIndex={isVisible ? 0 : -1}
                onClick={() => {
                  onRotate(offset);
                }}
                className="pointer-events-none flex size-103 shrink-0 scale-[0.718] cursor-pointer rounded-full bg-taupe text-ash opacity-0 shadow-icon transition-[scale,translate,background-color,color,opacity] duration-700 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white data-[active=false]:hover:text-mist data-[active=true]:translate-x-25 data-[active=true]:scale-100 data-[active=true]:bg-mist data-[active=true]:text-umber data-[visible=true]:pointer-events-auto data-[visible=true]:opacity-100"
              >
                <Glyph className="size-full" />
              </button>
            </li>
          );
        })}
      </ul>
      <div
        aria-hidden="true"
        className="absolute top-0 left-456 flex h-0 items-center"
      >
        <div className="grid">
          {slides.map(({ id, wheelLabel }, index) => {
            return (
              <p
                key={id}
                data-active={index === activeIndex}
                className="col-start-1 row-start-1 -translate-x-16 fs-26 leading-[1.27] font-semibold tracking-display whitespace-nowrap uppercase opacity-0 transition-[opacity,translate] duration-500 text-shadow-label data-[active=true]:translate-x-0 data-[active=true]:opacity-100 data-[active=true]:delay-300 data-[active=true]:duration-700"
              >
                {wheelLabel.map((line) => {
                  return (
                    <span key={line} className="block">
                      {line}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
