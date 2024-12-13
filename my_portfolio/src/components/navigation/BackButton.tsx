import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  return (
    <Link to="/" className="inline-flex items-center text-zinc-400 mb-8">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Home
    </Link>
  );
};

export default BackButton;
