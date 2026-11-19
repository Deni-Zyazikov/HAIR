import woman from '@/assets/images/woman.webp';
import { Glow } from '@/components/ui/Glow';
import { Pill } from '@/components/ui/Pill';
import { StarBadge } from '@/components/ui/StarBadge';

export const LightweightDesktop = () => {
  return (
    <>
      <Glow x={319} y={269} diameter={507} color="rgb(245 212 172 / 0.38)" />
      <img
        src={woman}
        alt="Девушка держит фен-стайлер и чашку кофе"
        className="absolute -top-38 left-128 h-904 w-669 max-w-none object-cover"
      />
      <StarBadge
        textRotation={-12}
        className="absolute top-35 left-43 size-180 reveal fs-22 [--reveal-delay:550ms]"
      >
        Не тяжелее
        <br />
        чашки кофе
      </StarBadge>
      <div className="absolute top-272 left-797 w-344 text-center text-white">
        <h2 className="reveal fs-60 leading-[1.01] font-semibold tracking-display uppercase [--reveal-delay:250ms]">
          Супер-
          <br />
          лёгкий
        </h2>
        <p className="mt-35 reveal font-body text-[max(12px,calc(var(--spacing)*15))] leading-[1.675] font-medium tracking-body [--reveal-delay:350ms]">
          Уменьшает усталость рук
          <br />
          при сушке волос, делая процедуру удобной и приятной даже после
          <br />
          напряжённого рабочего дня.
        </p>
        <div className="mt-39 reveal [--reveal-delay:450ms]">
          <Pill className="px-29 py-10 fs-28 leading-[1.27]">500 г</Pill>
        </div>
      </div>
    </>
  );
};
