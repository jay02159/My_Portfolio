import React from 'react';

interface ProfileImageProps {
  size?: 'sm' | 'lg';
}

const ProfileImage: React.FC<ProfileImageProps> = ({ size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <img
      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      alt="Jay Kamuju"
      className={`${sizeClasses[size]} rounded-full object-cover border-2 border-zinc-700`}
    />
  );
};

export default ProfileImage;