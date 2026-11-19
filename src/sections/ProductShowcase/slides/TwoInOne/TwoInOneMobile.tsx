import hairDevices from '@/assets/images/hair-devices.webp';
import photoDryer from '@/assets/images/photo-dryer.webp';
import photoStyler from '@/assets/images/photo-styler.webp';
import { Glow } from '@/components/ui/Glow';
import { Pill } from '@/components/ui/Pill';
import { MobileSlide } from '../../mobile/MobileSlide';

export const TwoInOneMobile = () => {
  return (
    <MobileSlide
      label="Фен и стайлер в уникальном дизайне"
      className="bg-linear-to-b from-fog to-taupe to-91%"
    >
      <div className="relative pt-21 pb-26">
        <Glow x={268} y={250} diameter={180} color="rgb(255 151 106 / 0.35)" />
        <h1 className="relative reveal text-center fs-25 leading-[1.01] font-semibold tracking-display text-ink">
          ФЕН и СТАЙЛЕР
          <br />в уникальном дизайне
        </h1>
        <div className="relative mt-16 flex reveal justify-center [--reveal-delay:400ms]">
          <Pill className="px-19 py-6 fs-34 leading-[1.01]">2 в 1</Pill>
        </div>
        <img
          src={hairDevices}
          alt="Длинные волосы после укладки, фен и стайлер"
          className="relative -mx-27 mt-17 h-305 w-374 max-w-none mask-b-from-70% object-cover"
        />
        <div className="relative -mt-73 grid grid-cols-2 gap-10">
          <figure className="relative h-307 reveal overflow-hidden radius-25 shadow-soft [--reveal-delay:500ms]">
            <img
              src={photoDryer}
              alt="Девушка сушит волосы феном"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="relative flex justify-center pt-19">
              <Pill tone="dark" className="px-17 py-6 fs-17 leading-[1.27]">
                Фен
              </Pill>
            </figcaption>
          </figure>
          <figure className="relative h-307 reveal overflow-hidden radius-25 shadow-soft [--reveal-delay:600ms]">
            <img
              src={photoStyler}
              alt="Девушка завивает локоны стайлером"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="relative flex justify-center pt-19">
              <Pill className="px-17 py-6 fs-17 leading-[1.27]">Стайлер</Pill>
            </figcaption>
          </figure>
        </div>
      </div>
    </MobileSlide>
  );
};
