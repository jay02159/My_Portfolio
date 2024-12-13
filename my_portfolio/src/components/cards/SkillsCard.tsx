import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaintBucket, Rocket, Zap, Palette, Figma, Code, Terminal } from 'lucide-react';
import { SKILLS } from '../../constants/skills';

  // Mapping skills to icons
const skillIcons: Record<string, React.ReactNode> = {
  'UI/UX': <Palette className="w-4 h-4 text-blue-400" />,
  'React': <Zap className="w-4 h-4 text-cyan-400" />,
  'TypeScript': <Code className="w-4 h-4 text-indigo-400" />,
  'Figma': <Figma className="w-4 h-4 text-pink-400" />,
  'Node.js': <Terminal className="w-4 h-4 text-green-400" />,
};

const SkillsCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/skills')}
      className="col-span-1 md:col-span-2 bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <Figma className="w-6 h-6" />
        <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">Premium</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">Skills & Designs</h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span key={skill} className="flex items-center bg-zinc-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
            {skillIcons[skill] || <Palette className="w-4 h-4 text-gray-400" />}
            <span className="ml-[4px]">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
