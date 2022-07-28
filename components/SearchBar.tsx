import React, { useRef } from 'react';
import IconSearch from './icons/IconSearch';

interface SearchBarProps {
  onSubmit: (gitHubUserData: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const searchValue = inputRef.current.value
      .trim()
      .toLowerCase()
      .replaceAll(' ', '');

    if (searchValue === '') return;

    let data;

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchValue}`
      );

      data = await response.json();

      inputRef.current.value = '';
    } catch (error) {
      console.log(error);
    }

    onSubmit(data);
  };

  return (
    <div className="flex items-center bg-white p-2.5 gap-8 rounded-xl max-w-screen-md m-auto w-full">
      <div className="pl-8">
        <IconSearch />
      </div>
      <form
        className="flex items-center justify-between gap-2 flex-1"
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
