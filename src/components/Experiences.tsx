import { useState, useEffect } from 'react';
import { selectedSkillState } from '../state/atoms';
import { useRecoilValue } from 'recoil';

interface Experience {
  date: string;
  name: string;
  location: string;
  title: string;
  description: string[];
  skills: string[];
}

const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const selectedSkill = useRecoilValue(selectedSkillState);

  useEffect(() => {
    const fetchExperiences = async () => {
      const api = 'https://raw.githubusercontent.com/samb-park/blogdata/main/experiences.json';
      try {
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
      <div className='h3 text-success'>EXPERIENCES</div>
      {experiences
        .filter((exp) => selectedSkill === 'ALL' || exp.skills.some((skill) => skill.includes(selectedSkill)))
        .map((exp, index) => (
          <div key={index} className='h3 d-flex flex-column flex-sm-row'>
            <div style={{ minWidth: '200px' }}>
              <div>{exp.date}</div>
              <div>{exp.name}</div>
              <div>{exp.location}</div>
            </div>
            <div>
              <div className='mb-2 text-warning'>{exp.title}</div>
              {exp.description.map((des, idx) => (
                <div key={idx}>{des}</div>
              ))}
              <div className='mt-2'>
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className='badge badge-info'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Experiences;
