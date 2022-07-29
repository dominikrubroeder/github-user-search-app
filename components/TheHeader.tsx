import React, { useContext } from 'react';
import IconMoon from './icons/IconMoon';
import { ThemeContext } from '../store/ThemeContext';
import { Theme } from '../data/data';
import IconSun from './icons/IconSun';

const TheHeader: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className="flex items-center justify-between max-w-screen-md mx-4 md:m-auto md:w-full">
      <div className="font-bold text-[1.625rem] dark:text-white">devfinder</div>
      <button
        className="flex items-center gap-4"
        onClick={themeCtx.toggleTheme}
      >
        {themeCtx.theme === Theme.LIGHT && (
          <>
            <span className="uppercase tracking-widest">Dark</span> <IconMoon />
          </>
        )}

        {themeCtx.theme === Theme.DARK && (
          <>
            <span className="uppercase tracking-widest dark:text-white">
              Light
            </span>{' '}
            <IconSun />
          </>
        )}
      </button>
    </header>
  );
};

export default TheHeader;
