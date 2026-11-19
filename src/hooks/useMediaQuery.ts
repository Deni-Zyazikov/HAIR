import { useCallback, useSyncExternalStore } from 'react';

export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaList = window.matchMedia(query);

      mediaList.addEventListener('change', onChange);

      return () => {
        mediaList.removeEventListener('change', onChange);
      };
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    return window.matchMedia(query).matches;
  }, [query]);

  return useSyncExternalStore(subscribe, getSnapshot);
};
