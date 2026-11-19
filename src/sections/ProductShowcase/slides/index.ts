import { DryerGlyph } from '@/components/icons/DryerGlyph';
import { FeatherGlyph } from '@/components/icons/FeatherGlyph';
import { MotorGlyph } from '@/components/icons/MotorGlyph';
import { LightweightDesktop } from './Lightweight/LightweightDesktop';
import { LightweightMobile } from './Lightweight/LightweightMobile';
import { MotorDesktop } from './Motor/MotorDesktop';
import { MotorMobile } from './Motor/MotorMobile';
import { TwoInOneDesktop } from './TwoInOne/TwoInOneDesktop';
import { TwoInOneMobile } from './TwoInOne/TwoInOneMobile';
import type { SlideConfig } from './types';

export const slides: SlideConfig[] = [
  {
    id: 'two-in-one',
    wheelLabel: ['Фен-стайлер', '2 в 1'],
    Glyph: DryerGlyph,
    Desktop: TwoInOneDesktop,
    Mobile: TwoInOneMobile,
  },
  {
    id: 'lightweight',
    wheelLabel: ['Суперлёгкий'],
    Glyph: FeatherGlyph,
    Desktop: LightweightDesktop,
    Mobile: LightweightMobile,
  },
  {
    id: 'motor',
    wheelLabel: ['Инновационный', 'японский мотор'],
    Glyph: MotorGlyph,
    Desktop: MotorDesktop,
    Mobile: MotorMobile,
  },
];
