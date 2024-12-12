import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import BackButton from '../components/navigation/BackButton';
import ProfileImage from '../components/about/ProfileImage';
import ExperienceList from '../components/about/ExperienceList';

const About = () => {
  return (
    <PageContainer>
      <BackButton />
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      <div className="bg-zinc-900 rounded-3xl p-8 mb-8">
        <ProfileImage size="lg" />
        
        <h2 className="text-2xl font-semibold mb-4">Jay Kamuju</h2>
        <p className="text-zinc-400 mb-6">
          Creative Developer & Designer passionate about building beautiful, functional, and user-friendly applications. 
          With expertise in modern web technologies and design principles, I create seamless experiences that bridge the 
          gap between design and development.
        </p>
        
        <ExperienceList />
      </div>
    </PageContainer>
  );
};

export default About;