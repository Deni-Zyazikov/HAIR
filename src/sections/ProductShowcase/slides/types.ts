import type { ComponentType } from 'react';
import type { GlyphProps } from '@/components/icons/types';

export interface SlideConfig {
  /** Уникальный ключ слайда */
  id: string;
  /** Подпись активной иконки на колесе, по строкам */
  wheelLabel: string[];
  /** Иконка слайда на колесе */
  Glyph: ComponentType<GlyphProps>;
  /** Карточка слайда для десктопа */
  Desktop: ComponentType;
  /** Секция слайда для мобильной версии */
  Mobile: ComponentType;
}
