import React from 'react';
import IconSearch from './icons/IconSearch';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white p-2.5 gap-8 rounded-xl max-w-screen-md m-auto w-full">
      <div className="pl-8">
        <IconSearch />
      </div>
      <form className="flex items-center justify-between gap-2 flex-1">
        <input
          placeholder="Search GitHub username..."
          className="flex-1 focus:outline-none"
        />
        <button
          type="submit"
          className="py-3 px-6 rounded-xl bg-app-primary-blue-saturated text-white font-bold shrink-0"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
