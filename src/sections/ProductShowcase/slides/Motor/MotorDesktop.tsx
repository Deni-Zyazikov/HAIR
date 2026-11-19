import motorDesktop from '@/assets/images/motor-desktop.webp';
import { StarBadge } from '@/components/ui/StarBadge';

export const MotorDesktop = () => {
  return (
    <>
      <img
        src={motorDesktop}
        alt="Бесщёточный мотор фена в разрезе"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute top-53 right-67 text-right font-semibold tracking-display">
        <h2 className="reveal fs-45 leading-[1.22] text-ink uppercase [--reveal-delay:250ms]">
          Для ценителей комфорта
          <br />и качества в уходе за волосами
        </h2>
        <p className="mt-14 reveal fs-35 leading-[1.12] text-steel [--reveal-delay:350ms]">
          Бесщеточный мотор BLDC
        </p>
      </div>
      <StarBadge className="absolute top-582 left-1014 size-180 reveal fs-22 [--reveal-delay:500ms]">
        Салонная
        <br />
        мощность
      </StarBadge>
    </>
  );
};
