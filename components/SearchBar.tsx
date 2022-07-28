import React, { useRef, useState } from 'react';
import IconSearch from './icons/IconSearch';
import { IGitHubUser, defaultGitHubUser } from '../data/data';

interface SearchBarProps {
  onSubmit: (
    gitHubUserData: IGitHubUser,
    wasFound: boolean,
    searchValue?: string
  ) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, setIsLoading }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const searchValue = inputRef.current.value
      .trim()
      .toLowerCase()
      .replaceAll(' ', '')
      .replaceAll('ä', 'ae')
      .replaceAll('ö', 'oe')
      .replaceAll('ü', 'ue');

    if (searchValue === '') return;

    let data;

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchValue}`
      );

      data = await response.json();

      setIsLoading(false);

      inputRef.current.value = '';
    } catch (error) {
      console.log(error);
    }

    if (data.message) onSubmit(defaultGitHubUser, false, searchValue);

    if (!data.message) onSubmit(data, true);
  };

  return (
    <div className="flex items-center gap-4 bg-white p-2.5 rounded-xl max-w-screen-md mx-4 shadow-2xl shadow-app-primary-lm-blue-desaturated/20 md:gap-8 md:m-auto md:w-full">
      <div className="pl-4 md:pl-8">
        <IconSearch />
      </div>
      <form
        className="flex items-center justify-between gap-4 flex-1"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <input
          placeholder="Search GitHub username..."
          className="flex-1 focus:outline-none"
          ref={inputRef}
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
