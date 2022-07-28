import Image from 'next/image';
import React from 'react';
import { IGitHubUser } from '../data/data';
import IconCompany from './icons/IconCompany';
import IconLink from './icons/IconLink';
import IconLocation from './icons/IconLocation';
import IconTwitter from './icons/IconTwitter';
import LoadingSpinner from './LoadingSpinner';

interface GitHubUserCardProps {
  gitHubUser: IGitHubUser;
  gitHubUserWasFound: boolean;
  isLoading: boolean;
  searchValue: string;
}

const GitHubUserCard: React.FC<GitHubUserCardProps> = ({
  gitHubUser,
  gitHubUserWasFound,
  isLoading,
  searchValue,
}) => {
  const notAvailable = 'Not available';

  if (isLoading)
    return (
      <div className="p-2 rounded-full bg-app-primary-blue-saturated m-auto">
        <LoadingSpinner />
      </div>
    );

  if (!isLoading && !gitHubUserWasFound)
    return (
      <div className="m-auto">
        <span className="font-bold">{searchValue}</span> was not found.
      </div>
    );

  return (
    <div className="flex items-start bg-white p-12 gap-8 rounded-xl max-w-screen-md m-auto w-full animate-scale">
      <div className="relative rounded-full w-28 h-28">
        <Image
          src={gitHubUser.avatar_url}
          alt={`${gitHubUser.login} avatar image`}
          layout="fill"
          className="rounded-full"
        />
      </div>

      <div className="grid gap-5 flex-1">
        <div>
          <header className="flex items-center justify-between gap-2">
            <h1 className="font-bold text-[1.625rem]">
              {gitHubUser.name ? gitHubUser.name : gitHubUser.login}
            </h1>
            <span className="text-app-primary-lm-blue-desaturated">
              Joined&nbsp;
              {new Date(gitHubUser.created_at).toLocaleDateString('de-de')}
            </span>
          </header>

          <h2 className="text-app-primary-blue-saturated cursor-pointer">
            <a href={gitHubUser.url} target="_blank" rel="noreferrer">
              <span>@{gitHubUser.login}</span>
            </a>
          </h2>
        </div>

        <p className="text-app-primary-lm-blue-desaturated">
          {gitHubUser.bio === '' || gitHubUser.bio === null
            ? 'This user has no bio.'
            : gitHubUser.bio}
        </p>

        <div className="flex items-start justify-between gap-1 rounded-xl bg-app-neutral-gray-lightest p-4 w-full">
          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Repos
            </h3>
            <div className="font-bold text-[1.375rem]">
              {gitHubUser.public_repos}
            </div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Followers
            </h3>
            <div className="font-bold text-[1.375rem]">
              {gitHubUser.followers}
            </div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated text-xs">
              Following
            </h3>
            <div className="font-bold text-[1.375rem]">
              {gitHubUser.following}
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.location ? 'opacity-50' : ''
            }`}
          >
            <IconLocation />
            <span>
              {gitHubUser.location ? gitHubUser.location : notAvailable}
            </span>
          </div>

          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.twitter_username ? 'opacity-50' : ''
            }`}
          >
            <IconTwitter />
            <span>
              {gitHubUser.twitter_username
                ? gitHubUser.twitter_username
                : notAvailable}
            </span>
          </div>

          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.blog || gitHubUser.blog === '' ? 'opacity-50' : ''
            }`}
          >
            <IconLink />
            {gitHubUser.blog && (
              <a
                href={`https://${gitHubUser.blog}`}
                target="_blank"
                rel="noreferrer"
              >
                {gitHubUser.blog}
              </a>
            )}

            {!gitHubUser.blog && <span>{notAvailable}</span>}
          </div>

          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.company || gitHubUser.company === ''
                ? 'opacity-50'
                : ''
            }`}
          >
            <IconCompany />
            <span>@{gitHubUser.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubUserCard;
