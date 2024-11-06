import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { selectedSkillState } from '../state/atoms';

const Skills = () => {
  const [skills, setSkills] = useState(['ALL']); // Include 'ALL' from the start.
  const setSelectedSkill = useSetRecoilState(selectedSkillState);

  useEffect(() => {
    const fetchExperiences = async () => {
      const expApi = 'https://raw.githubusercontent.com/samb-park/blogdata/main/experiences.json';
      const projectApi = 'https://raw.githubusercontent.com/samb-park/blogdata/main/projects.json';

      try {
        console.log('Fetching data from the network...');
        const expRes = await fetch(expApi);
        if (!expRes.ok)
          throw new Error('Network response was not ok for experiences');
        const expData = await expRes.json();

        const proRes = await fetch(projectApi);
        if (!proRes.ok)
          throw new Error('Network response was not ok for projects');
        const proData = await proRes.json();

        const combinedSkills = new Set([
          ...expData.experiences.flatMap((e) => e.skills),
          ...proData.projects.flatMap((p) => p.skills),
        ]);

        setSkills(['ALL', ...Array.from(combinedSkills).sort()]);
      } catch (err) {
        console.error('Error fetching or parsing the data:', err);
      }
    };

    fetchExperiences();
  }, []);

  // Ensure 'ALL' is the default selected skill on initial load
  useEffect(() => {
    setSelectedSkill('ALL');
  }, [setSelectedSkill]);

  return (
    <div className='h3'>
      <h3 className='text-success'>SKILLS</h3>
      <div className='h3'>
        {skills.map((skill) => (
          <button
            key={skill}
            className='btn btn-primary mr-2'
            onClick={() => setSelectedSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
