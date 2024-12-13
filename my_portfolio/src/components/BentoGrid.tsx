import React from 'react';
import ProfileCard from './cards/ProfileCard';
import ContactCard from './cards/ContactCard';
import LinkedInCard from './cards/LinkedInCard';
import SkillsCard from './cards/SkillsCard';
import ProjectsCard from './cards/ProjectsCard';
import Copyright from './Copyright';

const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <ProfileCard />
          <ContactCard />
          <LinkedInCard />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <SkillsCard />
          <ProjectsCard />
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default BentoGrid;
