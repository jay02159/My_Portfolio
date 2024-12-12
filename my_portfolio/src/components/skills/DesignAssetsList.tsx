import React from 'react';
import { Coffee } from 'lucide-react';
import { DESIGN_ASSETS } from '../../constants/designAssets';

const DesignAssetsList = () => {
  const handleDownload = (asset: typeof DESIGN_ASSETS[0]) => {
    if (asset.type === 'free' && asset.downloadUrl) {
      window.open(asset.downloadUrl, '_blank');
    } else {
      // Implement payment flow here
      console.log(`Processing payment for ${asset.name}: $${asset.price}`);
    }
  };

  return (
    <div className="space-y-4">
      {DESIGN_ASSETS.map((asset) => (
        <div key={asset.name} className="bg-zinc-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{asset.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              asset.type === 'premium' ? 'bg-amber-500/20 text-amber-500' : 'bg-green-500/20 text-green-500'
            }`}>
              {asset.type === 'premium' ? 'Premium' : 'Free'}
            </span>
          </div>
          <p className="text-sm text-zinc-400 mb-3">{asset.description}</p>
          <button
            onClick={() => handleDownload(asset)}
            className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
              asset.type === 'premium' 
                ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500' 
                : 'bg-green-500/20 hover:bg-green-500/30 text-green-500'
            }`}
          >
            {asset.type === 'premium' && <Coffee className="w-4 h-4" />}
            {asset.type === 'premium' ? `Buy for $${asset.price}` : 'Download Free'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DesignAssetsList;