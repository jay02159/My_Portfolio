import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderGit2, Github } from 'lucide-react';
import { PROJECTS } from '../../constants/projects';

const ProjectsCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/projects')}
      className="col-span-1 md:col-span-2 bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <FolderGit2 className="w-6 h-6" />
        <Github className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Latest Projects</h3>
      <div className="space-y-2">
        {PROJECTS.slice(0, 3).map((project) => (
          <div key={project.title} className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">{project.title}</span>
            <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
              {project.tags[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;