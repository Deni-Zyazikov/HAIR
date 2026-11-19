import type { ReactNode } from 'react';

export interface PillProps {
  /** Текст плашки */
  children: ReactNode;
  /** Светлая плашка с тёмным текстом или наоборот */
  tone?: 'light' | 'dark';
  /** Классы размера, отступов и шрифта */
  className?: string;
}

export interface StarBadgeProps {
  /** Надпись внутри звезды */
  children: ReactNode;
  /** Классы размера, позиционирования (absolute или relative) и шрифта */
  className: string;
  /** Наклон надписи в градусах */
  textRotation?: number;
}

export interface GlowProps {
  /** Центр свечения по горизонтали, в пикселях макета */
  x: number;
  /** Центр свечения по вертикали, в пикселях макета */
  y: number;
  /** Диаметр размытого эллипса в макете */
  diameter: number;
  /** Цвет в центре свечения, обычно с прозрачностью */
  color: string;
}
