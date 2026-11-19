import motorMobile from '@/assets/images/motor-mobile.webp';
import { MotorGlyph } from '@/components/icons/MotorGlyph';
import { StarBadge } from '@/components/ui/StarBadge';
import { FeatureChip } from '../../mobile/FeatureChip';
import { MobileSlide } from '../../mobile/MobileSlide';

export const MotorMobile = () => {
  return (
    <MobileSlide label="Инновационный японский мотор" className="bg-taupe">
      <div className="relative pb-43">
        <FeatureChip
          icon={<MotorGlyph className="size-full" />}
          iconClassName="inset-ring-cocoa text-ink"
          textClassName="ml-18 fs-19 leading-[1.28]"
        >
          Инновационный
          <br />
          японский мотор
        </FeatureChip>
        <h2 className="mt-33 reveal px-20 font-semibold tracking-display uppercase">
          <span className="block fs-33 leading-[1.22]">Для ценителей</span>
          <span className="mt-5 block fs-44 leading-[1.09]">
            <span className="tracking-[0.06em]">комфорта</span>
            <br />и качества
          </span>
          <span className="mt-9 block fs-23 leading-[1.22]">
            в уходе за волосами
          </span>
        </h2>
        <figure className="relative mt-34 h-407 reveal overflow-hidden radius-28 bg-card [--reveal-delay:400ms]">
          <img
            src={motorMobile}
            alt="Бесщёточный мотор фена в разрезе"
            className="absolute inset-0 size-full object-cover"
          />
          <figcaption className="relative w-204 pt-18 pl-20 fs-22 leading-[1.12] font-semibold tracking-display text-graphite">
            Бесщеточный мотор BLDC
          </figcaption>
        </figure>
        <StarBadge className="relative z-10 mx-auto -mt-57 size-180 reveal fs-22 [--reveal-delay:550ms]">
          Салонная
          <br />
          мощность
        </StarBadge>
      </div>
    </MobileSlide>
  );
};
