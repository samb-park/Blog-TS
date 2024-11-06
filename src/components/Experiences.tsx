import { useState, useEffect } from 'react';
import { selectedSkillState } from '../state/atoms';
import { useRecoilValue } from 'recoil';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const selectedSkill = useRecoilValue(selectedSkillState);

  useEffect(() => {
    const fetchExperiences = async () => {
      const api =
        'https://raw.githubusercontent.com/samb-park/blogdata/main/experiences.json';

      try {
        console.log('Fetching data from the network...');
        const res = await fetch(api);
        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        setExperiences(data.experiences);
      } catch (err) {
        console.error('Error fetching or parsing the data:', err);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className='text-white'>
      <div className='h3'>
        <div className='h3 text-success'>EXPERIENCES</div>
        {experiences
          .filter(
            (exp) =>
              selectedSkill === 'ALL' ||
              exp.skills.some((skill) => skill.includes(selectedSkill))
          )
          .map((exp, index) => (
            <div key={index} className='h3 d-flex flex-column  flex-sm-row '>
              <div className='' style={{ minWidth: '200px' }}>
                <div className='mb-sm-2'>{exp.date}</div>
                <div className='mb-sm-2'>{exp.name}</div>
                <div className='mb-2'>{exp.location}</div>
              </div>
              <div className=''>
                <div className='mb-2 text-warning'>{exp.title}</div>
                {exp.description.map((des) => (
                  <div key={des}>{des}</div>
                ))}
                <div className='mt-2'>
                  {exp.skills.map((skill, index) => (
                    <span key={index} className={`badge badge-info`}>
                      {skill}
                    </span>
                  ))}
                </div>
                <br />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experiences;
