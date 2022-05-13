import AboutCard from '../cards/AboutCard';
import CheckList from '../ui/CheckList';
import Section from '../ui/Section';
import Image from 'next/image';

const About = () => {
  return (
    <Section id="oPrograme" className="bg-white">
      <div className="grid grid-cols-2 items-center gap-12">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="mb-6 text-xl font-semibold text-black">
            O programe
          </h2>
          <div className="mb-6 space-y-4">
            <p className="leading-relaxed text-black">
              Študentské Trénerské Centrum (ŠTC) je program najmä pre
              stredoškolských študentov, ktorí sa chcú zdokonaľovať v
              oblasti informačných technológií a majú záujem poskytovať
              svoje nadobudnuté znalosti ďalším.
            </p>
            <p className="leading-relaxed text-black">
              Študentské Trénerské Centrum (ŠTC) je program najmä pre
              stredoškolských študentov, ktorí sa chcú zdokonaľovať v
              oblasti informačných technológií a majú záujem poskytovať
              svoje nadobudnuté znalosti ďalším.
            </p>
            <p className="leading-relaxed text-black">
              Organizátorom aktivity je spoločnosť Microsoft, ktorá
              pripravuje študentov na zaujímavú pracovnú kariéru a na trh
              práce. Cieľom celého programu je pripraviť študentov v
              oblasti lektorskej činnosti, technológií Microsoft 365,
              programovania, IoT a správy zariadení tak, aby ich ďalšia
              cesta napomohla k postupu medzi elitných študentov Microsoft
              Learn Student Ambassadors.
            </p>
          </div>
          <CheckList
            items={[
              'Základy technologických riešení spoločnosti Microsoft',
              'Soft skills, komunikácia a podanie spätnej väzby',
              'Rôzne školenia, workshopy, eventy a špecialisti',
            ]}
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Image
            src="/images/o-programe.png"
            alt="O programe Microsoft ŠTC"
            objectFit="contain"
            height={600}
            width={700}
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 items-center gap-5">
        <div className="col-span-2 xl:col-span-1">
          <AboutCard
            title="Letná škola"
            image={{
              src: '/images/letna-skola.png',
              alt: 'Letná škola',
            }}
          >
            Každý rok cez leto organizujeme niekoľkodňové stretnutie
            študentov v podode Letnej školy, kde majú zabezpečený program
            od špeciálnych hostí či zamestnancov spoločnosti Microsoft.
            Zároveň študenti tvoria svoj unikátny projekt, ktorý na záver
            Letnej školy odprezentujú porote.
          </AboutCard>
        </div>
        <div className="col-span-2 xl:col-span-1">
          <AboutCard
            title="Microsoft Learn Student Ambassadors"
            image={{
              src: '/images/mlsa-logo.png',
              alt: 'Microsoft Learn Student Ambassadors logo',
            }}
          >
            V spolupráci so spoločnosťou Microsoft môžu študenti zostať i
            naďalej a môžu postúpiť do programu určeného predovšetkým pre
            vysokoškolákov - Microsoft Learn Student Ambassadors. Tento
            program im pomôže pri zviditeľnení mena a získaní ďalšej praxe.
          </AboutCard>
        </div>
      </div>
    </Section>
  );
};

export default About;
