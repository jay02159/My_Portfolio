import React from 'react';
import { Download } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import BackButton from '../components/navigation/BackButton';
import ProfileImage from '../components/about/ProfileImage';
import ExperienceList from '../components/about/ExperienceList';

const About = () => {
  const handleDownload = () => {
    // Replace with your actual CV link
    window.open('https://docs.google.com/document/d/1RW0YMwWGQAPg8E7oQDw6IhtLWif5Wi-o/edit?usp=sharing&ouid=117454860791970025482&rtpof=true&sd=true', '_blank');
  };
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

      <div className="bg-white rounded-3xl p-6">
        <button 
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 bg-grey-200 hover:bg-grey-50 text-white font-semibold py-3 rounded-xl transition-colors duration-300 ease-in-out"
        >
          <Download size={20} />
          Download CV
        </button>
      </div>
    </PageContainer>
  );
};

export default About;
