interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    link: 'https://github.com/jaykamuju',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop'
  },
  {
    title: 'Design System',
    description: 'A comprehensive design system for web applications',
    tags: ['UI/UX', 'Figma', 'React', 'Storybook'],
    link: 'https://github.com/jaykamuju',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with bento grid layout',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/jaykamuju',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  }
];
