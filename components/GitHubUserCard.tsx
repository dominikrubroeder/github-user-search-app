import React from 'react';
import IconCompany from './icons/IconCompany';
import IconLink from './icons/IconLink';
import IconLocation from './icons/IconLocation';
import IconTwitter from './icons/IconTwitter';

const GitHubUserCard = () => {
  return (
    <div className="flex items-center bg-white p-12 gap-8 rounded-xl max-w-screen-md m-auto">
      <div className="rounded-full w-28 h-28">Image</div>

      <div className="flex-1">
        <div className="grid gap-2 mb-5">
          <header className="flex items-center justify-between gap-2">
            <h1>The Ocotocat</h1>
            <span className="text-app-lm-primary-blue-desaturated">
              Joined 25 Jan 2011
            </span>
          </header>

          <h2 className="text-app-primary-blue-saturated">@ocotocat</h2>
        </div>

        <p className="text-app-primary-lm-blue-desaturated">
          This profile has no bio.
        </p>

        <div className="flex items-start justify-between gap-1 rounded-xl bg-app-neutral-gray-lightest p-4 w-full">
          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Repos
            </h3>
            <div className="font-bold text-[1.375rem]">8</div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Followers
            </h3>
            <div className="font-bold text-[1.375rem]">3938</div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Followers
            </h3>
            <div className="font-bold text-[1.375rem]">9</div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex items-center gap-5">
            <IconLocation />
            <span>San Francisco</span>
          </div>

          <div className="flex items-center gap-5">
            <IconTwitter />
            <span>Not available</span>
          </div>

          <div className="flex items-center gap-5">
            <IconLink />
            <a href="https://github.blog" target="_blank" rel="noreferrer">
              https://github.blog
            </a>
          </div>

          <div className="flex items-center gap-5">
            <IconCompany />
            <span>@github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubUserCard;
