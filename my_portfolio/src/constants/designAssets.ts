interface DesignAsset {
  name: string;
  description: string;
  type: 'free' | 'premium';
  price?: number;
  downloadUrl?: string;
}

export const DESIGN_ASSETS: DesignAsset[] = [
  {
    name: 'UI Component Library',
    description: 'A comprehensive collection of reusable UI components',
    type: 'premium',
    price: 49.99
  },
  {
    name: 'Icon Pack - Essential',
    description: '100+ carefully crafted icons for web and mobile',
    type: 'free',
    downloadUrl: '#'
  },
  {
    name: 'Design System Template',
    description: 'Complete design system starter for Figma',
    type: 'premium',
    price: 29.99
  }
];