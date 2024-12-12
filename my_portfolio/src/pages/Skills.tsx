import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import BackButton from '../components/navigation/BackButton';
import SkillsList from '../components/skills/SkillsList';
import DesignAssetsList from '../components/skills/DesignAssetsList';

const Skills = () => {
  return (
    <PageContainer>
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">Skills & Designs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Skills Section */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <SkillsList />
        </div>

        {/* Design Assets */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Design Assets</h2>
          <DesignAssetsList />
        </div>
      </div>

      {/* Design References */}
      <div className="bg-zinc-900 rounded-3xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Design References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Web Design System</h3>
            <p className="text-sm text-zinc-400">Complete design system for web applications</p>
          </div>
          <div className="aspect-video bg-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Mobile UI Components</h3>
            <p className="text-sm text-zinc-400">Mobile-first component library</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Skills;