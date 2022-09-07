import BaseCard from '../../cards/BaseCard';

const ClosedRegistration = () => {
  return (
    <>
      <div className="my-6">
        <BaseCard>
          <p className="mb-4 leading-relaxed text-black">
            Ďakujeme za tvoj prejavený záujem registrovať sa do programu
            ŠTC. Bohužiaľ, momentálne je registrácia zatvorená. Ale
            nezúfaj, v septembri otvárame registráciu pre ďalší
            ročník. Ak chceš zostať v obraze, sleduj naše sociálne siete,
            ktoré nájdeš nižšie.
          </p>
          <p className="leading-relaxed text-black">
            Ak by si mal akékoľvek otázky, neváhaj nás kontaktovať
            nižšie.
          </p>
        </BaseCard>
      </div>
    </>
  );
};

export default ClosedRegistration;
