import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
      {skill}
    </span>
  );
};

export default SkillTag;