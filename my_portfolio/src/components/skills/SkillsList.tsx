import React from 'react';
import SkillTag from './SkillTag';
import { SKILLS } from '../../constants/skills';

const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <SkillTag key={skill} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;