import React from 'react';
import { Linkedin, ChevronRight } from 'lucide-react';

const LinkedInCard = () => {
  return (
    <a
      href="https://www.linkedin.com/in/jay-kamuju-74051a1a1/"
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between mb-4">
        <Linkedin className="w-6 h-6" />
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
      <h3 className="text-lg font-semibold">Connect</h3>
      <p className="text-zinc-400 text-sm">LinkedIn Profile</p>
    </a>
  );
};

export default LinkedInCard;