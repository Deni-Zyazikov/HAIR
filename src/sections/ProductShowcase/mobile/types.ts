import type { ReactNode } from 'react';

export interface MobileSlideProps {
  /** Название секции для скринридеров */
  label: string;
  /** Содержимое слайда в пикселях мобильного макета 320 */
  children: ReactNode;
  /** Фон секции на всю ширину экрана */
  className?: string;
}

export interface FeatureChipProps {
  /** Иконка в круге слева */
  icon: ReactNode;
  /** Текст плашки */
  children: ReactNode;
  /** Цвет обводки круга и иконки */
  iconClassName: string;
  /** Размер шрифта и отступ текста — у каждой плашки свои по макету */
  textClassName: string;
}
