import hairDevices from '@/assets/images/hair-devices.webp';
import photoDryer from '@/assets/images/photo-dryer.webp';
import photoStyler from '@/assets/images/photo-styler.webp';
import { Glow } from '@/components/ui/Glow';
import { Pill } from '@/components/ui/Pill';

export const TwoInOneDesktop = () => {
  return (
    <>
      <Glow x={638} y={91} diameter={460} color="rgb(255 255 255 / 0.55)" />
      <Glow x={408} y={282} diameter={460} color="rgb(245 212 172 / 0.32)" />
      <Glow x={883} y={498} diameter={424} color="rgb(255 151 106 / 0.3)" />
      <img
        src={hairDevices}
        alt="Длинные волосы после укладки, фен и стайлер"
        className="absolute top-254 left-283 h-549 w-674 max-w-none object-cover"
      />
      <h1 className="absolute inset-x-0 top-52 reveal text-center fs-48 leading-[1.01] font-semibold tracking-display text-ink [--reveal-delay:250ms]">
        ФЕН и СТАЙЛЕР
        <br />в уникальном дизайне
      </h1>
      <div className="absolute inset-x-0 top-180 flex reveal justify-center [--reveal-delay:400ms]">
        <Pill className="px-30 py-10 fs-53 leading-[1.01]">2 в 1</Pill>
      </div>
      <figure className="absolute top-244 left-52 w-243 reveal [--reveal-delay:500ms]">
        <figcaption className="flex">
          <Pill tone="dark" className="px-28 py-10 fs-28 leading-[1.27]">
            Фен
          </Pill>
        </figcaption>
        <img
          src={photoDryer}
          alt="Девушка сушит волосы феном"
          className="mt-20 h-431 w-full radius-33 object-cover shadow-soft"
        />
      </figure>
      <figure className="absolute top-244 left-945 w-243 reveal [--reveal-delay:600ms]">
        <figcaption className="flex justify-end">
          <Pill className="px-28 py-10 fs-28 leading-[1.27]">Стайлер</Pill>
        </figcaption>
        <img
          src={photoStyler}
          alt="Девушка завивает локоны стайлером"
          className="mt-20 h-431 w-full radius-33 object-cover shadow-soft"
        />
      </figure>
    </>
  );
};
