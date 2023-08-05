import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';
import SectionWrapper from '../hoc/SectionWrapper';

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies &&
        technologies.map((technology) => (
            <div key={technology.name} className='w-28 h-28'>
                <BallCanvas icon={technology.icon} />
            </div>
        ) )}
    </div>
  );
};

export default SectionWrapper(Tech, '');
