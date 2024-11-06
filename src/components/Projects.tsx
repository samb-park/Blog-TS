import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { selectedSkillState } from '../state/atoms';
import { useRecoilValue } from 'recoil';

interface Project {
  date: string;
  name: string;
  description: string[];
  skills: string[];
  gitUrl?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const selectedSkill = useRecoilValue(selectedSkillState);

  useEffect(() => {
    const fetchProjects = async () => {
      const api = 'https://raw.githubusercontent.com/samb-park/blogdata/main/projects.json';
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setProjects(data.projects);
      } catch (err) {
        console.error('Error fetching or parsing the data:', err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <div className='h3 text-success mb-2'>PROJECTS</div>
      {projects
        .filter((project) => selectedSkill === 'ALL' || project.skills.some((skill) => skill.includes(selectedSkill)))
        .map((project, index) => (
          <div key={index} className='h3 d-flex flex-column flex-sm-row mb-2'>
            <div style={{ minWidth: '200px' }}>
              <div>{project.date}</div>
            </div>
            <div>
              <div className='text-warning'>{project.name}</div>
              {project.description.map((des, idx) => (
                <div key={idx}>{des}</div>
              ))}
              <div>
                {project.skills.map((skill, idx) => (
                  <span key={idx} className='badge badge-info'>
                    {skill}
                  </span>
                ))}
              </div>
              {project.gitUrl && (
                <Link to={project.gitUrl} target="_blank" className='btn btn-info font-italic'>
                  <span className='text-danger'>L</span>ink
                </Link>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
