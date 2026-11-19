import { slides } from '../slides';

export const MobileShowcase = () => {
  return (
    <main>
      {slides.map(({ id, Mobile }) => {
        return <Mobile key={id} />;
      })}
    </main>
  );
};
