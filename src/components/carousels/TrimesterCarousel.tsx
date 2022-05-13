import type SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import TrimesterCard from '../cards/TrimesterCard';
import classNames from 'classnames';
import Button from '../ui/Button';

const navigation = [
  '1. Trimester',
  '2. Trimester',
  '3. Trimester',
  'Spoločné stretnutia',
];

const TrimesterCarousel = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="mb-5 grid grid-cols-3 gap-5 lg:grid-cols-4">
        {navigation.map((item, index) => (
          <Button
            key={item}
            fullWidth={true}
            onClick={() => swiper?.slideTo(index)}
            className={classNames(
              'col-span-3 rounded-t-md border-b-2 border-primary py-1.5 text-md transition md:col-span-1 md:last-of-type:col-span-3 lg:last-of-type:col-span-1',
              active === index
                ? 'rounded-md bg-primary text-white'
                : 'bg-white text-primary'
            )}
          >
            {item}
          </Button>
        ))}
      </div>
      <Swiper
        spaceBetween={20}
        onSwiper={setSwiper}
        style={{ overflow: 'unset' }}
        onSlideChange={({ activeIndex }) => {
          setActive(activeIndex);
        }}
      >
        <SwiperSlide style={{ height: 'auto' }}>
          <TrimesterCard
            imageSrc="/images/trimester/trimester-1.png"
            imageAlt={navigation[0]}
          >
            <p className="mb-5 leading-relaxed text-black">
              Prvý trimester programu je zameraný na vzdelávanie študentov
              v technológiách spoločnosti Microsoft, ako sú Windows,
              Aplikácie Microsoft 365, Microsoft 365, Minecraft: Education
              Edition, Azure, Azure AI a pod. Počas 6 mesiacov študenti
              pracujú na jednotlivých zadaniach vyplývajúcich z webinárov,
              kde vytvárajú rôzne edukačné materiály (príručky,
              infografiky, prezentácie, videá, atď.) a zároveň aj na túto
              svoju prácu dostanú od daného lektora spätnú väzbu.
            </p>
            <p className="leading-relaxed text-black">
              Po absolvovaní prvého trimestra by mal byť študent ŠTC
              dostatočne znalí v technológiách spoločnosti Microsoft a
              mohol absolvovať medzinárodne uznávanú certifikáciu Microsoft
              Office Specialist, ktorá dokazuje znalosť jednotlivých
              Microsoft 365 aplikácií alebo Microsoft Fundamentals
              certifikáciu.
            </p>
          </TrimesterCard>
        </SwiperSlide>
        <SwiperSlide style={{ height: 'auto' }}>
          <TrimesterCard
            imageSrc="/images/trimester/trimester-2.png"
            imageAlt={navigation[1]}
          >
            <p className="mb-5 leading-relaxed text-black">
              V druhom trimestri si študenti vyberajú tému, v ktorej by sa
              chceli zdokonaliť alebo sa ju naučiť, keďže rovnako ako v
              prvom trimestri aj tu sa začína od základov. Pred začiatkom
              druhého trimestra majú študenti možnosť si vybrať, či sa chcú
              venovať programovaniu v jazyku TypeScript pomocou Visual
              Studio Code, správe zariadení za pomoci Microsoft technológií
              ako Intune či Microsoft Endpoint Manager alebo IoT a Azure
              pre tých, ktorí si svoju prácu chcú chytiť do rúk.
            </p>
            <p className="leading-relaxed text-black">
              Ako externý lektor pre IoT a Azure v druhom trimestri pôsobí
              Peter Hanzlík z partnerskej spoločnosti DXC Technology.
            </p>
          </TrimesterCard>
        </SwiperSlide>
        <SwiperSlide style={{ height: 'auto' }}>
          <TrimesterCard
            imageSrc="/images/trimester/trimester-3.png"
            imageAlt={navigation[2]}
          >
            <p className="mb-5 leading-relaxed text-black">
              Počas tretieho trimestra sa študenti venujú najmä lektorskej
              činnosti a svojej absolventskej práci. Na začiatku trimestra
              si zvolia tému svojej absolventskej práce, na ktorej následne
              niekoľko mesiacov pracujú v teoretickej aj praktickej rovine.
              Po odovzdaní svojej práce ju však ešte musia obhájiť pred
              porotou, zloženou zo zamestnancov spoločnosti Microsoft,
              členov Microsoft Learn Student Ambassadors či externých
              hostí. Celý ročník je potom slávnostne ukončený promóciami,
              kde všetci úspešní študenti dostanú certifikát o absolvovaní
              programu a ich osobné referencie.
            </p>
            <p className="leading-relaxed text-black">
              Počas písania svojej práce majú ešte študenti možnosť zhostiť
              sa úlohy lektora aj v rámci jedného z webinárov pre nový
              ročník programu ŠTC Microsoft, a tak preukázať svoje
              lektorské schopnosti či kvality, aby boli vybraný do programu
              Microsoft Learn Student Ambassadors.
            </p>
          </TrimesterCard>
        </SwiperSlide>
        <SwiperSlide style={{ height: 'auto' }}>
          <TrimesterCard
            imageSrc="/images/trimester/trimester-4.png"
            imageAlt={navigation[3]}
          >
            <p className="mb-5 leading-relaxed text-black">
              V rámci celého štúdia v programe sa študenti pravidelne
              stretávajú v spoločnosti Microsoft. Práve počas týchto
              stretnutí študenti absolvujú kurzy prezentačných a
              komunikačných zručností, project managementu, social media
              marketingu a iných soft skills. Lektormi sú zamestnanci
              spoločnosti Microsoft a iných spoločností, teda zaujímavé
              osobnosti, s ktorými majú jedinečnú možnosť stretnúť sa
              osobne.
            </p>
            <p className="leading-relaxed text-black">
              Kombinácia znalostí Microsoft technológií a ďalších získaných
              znalostí v oblasti prezentovania vedie študentov k možnosti
              komunikovať s ukážkovými školami spoločnosti Microsoft
              (Microsoft Showcase Schools) a prezentovať sa v roli lektora.
              Takto si môžu vyskúšať výučbu nielen svojich vrstovníkov, ale
              zároveň aj pedagógov.
            </p>
          </TrimesterCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TrimesterCarousel;
