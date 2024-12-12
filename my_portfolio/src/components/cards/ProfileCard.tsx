import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypewriterEffect from '../TypewriterEffect';

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/about')}
      className="col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1734045040796-fd559a9fd43d?w=180&h=180&fit=crop"
          alt="Jay Kamuju"
          className="w-24 h-24 rounded-full object-cover border-2 border-zinc-700"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">Jay Kamuju</h1>
          <TypewriterEffect text="Creative Developer & Designer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
