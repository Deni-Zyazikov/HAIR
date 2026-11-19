import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { wrapIndex } from '@/utils/wrapIndex';
import type { SlideScrollOptions, SlideScrollState } from './types';

const PROGRAMMATIC_SCROLL_TIMEOUT = 1500;
const LEAVING_SLIDE_DURATION = 1100;

const getScrollBehavior = (): ScrollBehavior => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 'auto';
  }

  return 'smooth';
};

export const useSlideScroll = ({
  trackRef,
  anchorRefs,
  count,
}: SlideScrollOptions) => {
  const [state, setState] = useState<SlideScrollState>({
    activeIndex: 0,
    previousIndex: null,
    wheelStep: 0,
  });
  const targetIndexRef = useRef<number | null>(null);
  const releaseTimerRef = useRef(0);
  const activeIndexRef = useRef(0);

  const readScrollIndex = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return 0;
    }

    const offset = -track.getBoundingClientRect().top;
    const index = Math.round(offset / window.innerHeight);

    return Math.min(Math.max(index, 0), count - 1);
  }, [trackRef, count]);

  const syncWithScroll = useCallback(() => {
    const index = readScrollIndex();

    setState((current) => {
      if (current.activeIndex === index) {
        return current;
      }

      return {
        activeIndex: index,
        previousIndex: current.activeIndex,
        wheelStep: current.wheelStep + index - current.activeIndex,
      };
    });
  }, [readScrollIndex]);

  const releaseTarget = useCallback(() => {
    targetIndexRef.current = null;
    window.clearTimeout(releaseTimerRef.current);
  }, []);

  useLayoutEffect(() => {
    const index = readScrollIndex();

    setState({ activeIndex: index, previousIndex: null, wheelStep: index });
  }, [readScrollIndex]);

  useEffect(() => {
    activeIndexRef.current = state.activeIndex;
  }, [state.activeIndex]);

  useEffect(() => {
    if (state.previousIndex === null) {
      return;
    }

    const timer = window.setTimeout(() => {
      setState((current) => {
        return { ...current, previousIndex: null };
      });
    }, LEAVING_SLIDE_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [state.activeIndex, state.previousIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const targetIndex = targetIndexRef.current;

      if (targetIndex === null) {
        syncWithScroll();
        return;
      }

      if (readScrollIndex() === targetIndex) {
        releaseTarget();
      }
    };

    const handleScrollEnd = () => {
      releaseTarget();
      syncWithScroll();
    };

    const handleResize = () => {
      releaseTarget();
      anchorRefs.current[activeIndexRef.current]?.scrollIntoView({
        behavior: 'instant',
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('resize', handleResize);
      releaseTarget();
    };
  }, [anchorRefs, readScrollIndex, syncWithScroll, releaseTarget]);

  const rotateWheel = useCallback(
    (offset: number) => {
      const wheelStep = state.wheelStep + offset;
      const activeIndex = wrapIndex(wheelStep, count);
      const anchor = anchorRefs.current[activeIndex];

      if (activeIndex === state.activeIndex || !anchor) {
        return;
      }

      targetIndexRef.current = activeIndex;
      window.clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = window.setTimeout(() => {
        releaseTarget();
        syncWithScroll();
      }, PROGRAMMATIC_SCROLL_TIMEOUT);

      setState({
        activeIndex,
        previousIndex: state.activeIndex,
        wheelStep,
      });
      anchor.scrollIntoView({ behavior: getScrollBehavior() });
    },
    [state, count, anchorRefs, releaseTarget, syncWithScroll],
  );

  return { ...state, rotateWheel };
};
