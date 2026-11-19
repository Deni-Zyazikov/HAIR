import type { ReactNode, RefObject } from 'react';
import type { SlideConfig } from '../slides/types';

export type SlideState =
  'active' | 'above' | 'below' | 'leaving-above' | 'leaving-below';

export interface SlideCardProps {
  /** Положение карточки относительно слайда в центре экрана */
  state: SlideState;
  /** Название слайда для скринридеров */
  label: string;
  /** Содержимое карточки в пикселях десктопного макета */
  children: ReactNode;
}

export interface IconWheelProps {
  /** Слайды, иконки которых повторяются по кругу */
  slides: SlideConfig[];
  /** Накопленный шаг поворота колеса */
  step: number;
  /** Поворот к соседней иконке: 1 — к верхней, -1 — к нижней */
  onRotate: (offset: number) => void;
}

export interface SlideScrollOptions {
  /** Высокая секция, внутри которой «прокручиваются» слайды */
  trackRef: RefObject<HTMLElement | null>;
  /** Якоря слайдов — точки, к которым прилипает скролл */
  anchorRefs: RefObject<(HTMLElement | null)[]>;
  /** Количество слайдов */
  count: number;
}

export interface SlideScrollState {
  /** Индекс слайда в центре экрана */
  activeIndex: number;
  /** Индекс слайда, который только что ушёл из центра */
  previousIndex: number | null;
  /** Накопленный шаг колеса: на сколько позиций оно повернулось от старта */
  wheelStep: number;
}
