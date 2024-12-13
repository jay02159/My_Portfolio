import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';

const ContactCard = () => {
  return (
    <a
      href="mailto:jay.kamuju021@gmail.com"
      className="group bg-zinc-900 rounded-3xl p-6 transition-transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between mb-4">
        <Mail className="w-6 h-6" />
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
      <h3 className="text-lg font-semibold">Get in Touch</h3>
      <p className="text-zinc-400 text-sm">jay.kamuju021@gmail.com</p>
    </a>
  );
};

export default ContactCard;
