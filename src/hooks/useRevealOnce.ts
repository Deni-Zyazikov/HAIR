import { useEffect, useRef, useState } from 'react';

export const useRevealOnce = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isRevealed) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isRevealed, threshold]);

  return { ref, isRevealed };
};
