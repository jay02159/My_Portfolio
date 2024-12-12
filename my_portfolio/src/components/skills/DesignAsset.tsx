import React from 'react';
import { Download } from 'lucide-react';

interface DesignAssetProps {
  name: string;
  onDownload: (name: string) => void;
}

const DesignAsset: React.FC<DesignAssetProps> = ({ name, onDownload }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
      <span>{name}</span>
      <button
        onClick={() => onDownload(name)}
        className="p-2 hover:bg-zinc-700 rounded-full"
      >
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
};

export default DesignAsset;