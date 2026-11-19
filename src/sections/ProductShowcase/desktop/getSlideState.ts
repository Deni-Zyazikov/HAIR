import type { SlideState } from './types';

export const getSlideState = (
  slideIndex: number,
  activeIndex: number,
  previousIndex: number | null,
): SlideState => {
  if (slideIndex === activeIndex) {
    return 'active';
  }

  const side = slideIndex < activeIndex ? 'above' : 'below';

  if (slideIndex === previousIndex) {
    return `leaving-${side}` as const;
  }

  return side;
};
