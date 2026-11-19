import woman from '@/assets/images/woman.webp';
import { FeatherGlyph } from '@/components/icons/FeatherGlyph';
import { Pill } from '@/components/ui/Pill';
import { StarBadge } from '@/components/ui/StarBadge';
import { FeatureChip } from '../../mobile/FeatureChip';
import { MobileSlide } from '../../mobile/MobileSlide';

export const LightweightMobile = () => {
  return (
    <MobileSlide label="Суперлёгкий фен-стайлер" className="bg-taupe">
      <div className="relative pb-46">
        <FeatureChip
          icon={<FeatherGlyph className="size-full" />}
          iconClassName="inset-ring-ink text-umber"
          textClassName="ml-15 fs-22 leading-[1.045]"
        >
          Лёгкость
          <br />и комфорт
          <br />в руке
        </FeatureChip>
        <h2 className="relative z-10 mt-26 reveal text-center fs-38 leading-[1.01] font-semibold tracking-display uppercase">
          Суперлёгкий
        </h2>
        <div className="relative z-10 mt-19 flex reveal justify-center [--reveal-delay:400ms]">
          <Pill className="px-21 py-7 fs-20 leading-[1.27]">500 г</Pill>
        </div>
        <figure className="relative -mx-33 -mt-27">
          <img
            src={woman}
            alt="Девушка держит фен-стайлер и чашку кофе"
            className="w-386 max-w-none mask-b-from-75%"
          />
          <StarBadge
            textRotation={-12}
            className="absolute top-7 left-234 size-100 reveal fs-12 [--reveal-delay:550ms]"
          >
            Не тяжелее
            <br />
            чашки кофе
          </StarBadge>
        </figure>
        <p className="relative mt-46 reveal px-20 text-center font-body fs-15 leading-[1.675] font-medium tracking-body">
          Уменьшает усталость рук
          <br />
          при сушке волос, делая процедуру удобной и приятной даже после
          напряжённого рабочего дня.
        </p>
      </div>
    </MobileSlide>
  );
};
