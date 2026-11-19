import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { MobileShowcase } from './mobile/MobileShowcase';

const DESKTOP_QUERY = '(min-width: 1024px)';

export const ProductShowcase = () => {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  if (isDesktop) {
    return <DesktopShowcase />;
  }

  return <MobileShowcase />;
};
