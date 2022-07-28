import React from 'react';
import IconMoon from './icons/IconMoon';

const TheHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-md m-auto">
      <div className="font-bold text-[1.625rem]">devfinder</div>
      <button className="flex items-center gap-4">
        <span className="uppercase tracking-widest">Dark</span> <IconMoon />
      </button>
    </header>
  );
};

export default TheHeader;
