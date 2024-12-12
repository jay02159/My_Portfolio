import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaintBucket, Rocket, Zap, Palette } from 'lucide-react';
import { SKILLS } from '../../constants/skills';

const SkillsCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/skills')}
      className="col-span-1 md:col-span-2 bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <Palette className="w-6 h-6" />
        <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">Premium</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">Skills & Designs</h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span key={skill} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
