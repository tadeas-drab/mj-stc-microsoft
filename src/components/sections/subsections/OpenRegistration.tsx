import BaseCard from '../../cards/BaseCard';

interface RegistrationProps {
  link: string;
}

const OpenRegistration = ({ link }: RegistrationProps) => {
  return (
    <>
      <div className="my-6">
        <BaseCard>
          <p className="mb-4 leading-relaxed text-black">
            Registráciu do programu Študentské Trénerské Centrum Microsoft organizuje komunita Microsoft Learn Student
            Ambassadors Slovensko. Údaje sú spracovávané pomocou formulára Microsoft Forms patriacemu kontu v komunite
            Student Ambassadors Slovensko. Plné znenie spracovania osobných údajov nájdete na konci formulára.
          </p>
          <p className="leading-relaxed text-black">
            V prípade nefunkčnosti formulára, <strong><a href={link} target="_blank">klikni sem</a></strong> pre jeho vyplnenie v novom okne.
          </p>
        </BaseCard>
      </div>
      <div className="my-6">
        <iframe className='w-full' height="1024px" src={link} frameBorder={0} marginWidth={0} marginHeight={0}
          style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} allowFullScreen> </iframe>
      </div>
    </>
  );
};

export default OpenRegistration;
