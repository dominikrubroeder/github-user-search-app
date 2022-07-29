import Image from 'next/image';
import React, { useContext } from 'react';
import { IGitHubUser, Theme } from '../data/data';
import { ThemeContext } from '../store/ThemeContext';
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
  const themeCtx = useContext(ThemeContext);
  const notAvailable = 'Not available';
  const iconFill = themeCtx.theme === Theme.DARK ? '#fff' : '#4b6a9b';

  if (isLoading)
    return (
      <div className="p-2 rounded-full bg-app-primary-blue-saturated m-auto">
        <LoadingSpinner />
      </div>
    );

  if (!isLoading && !gitHubUserWasFound)
    return (
      <div className="m-auto dark:text-white">
        <span className="font-bold">{searchValue}</span> was not found.
      </div>
    );

  return (
    <div className="relative bg-white dark:bg-app-primary-dm-blue-dark p-6 gap-8 rounded-xl max-w-screen-md mx-4 shadow-2xl shadow-app-primary-lm-blue-desaturated/20 animate-scale dark:shadow-none md:m-auto md:w-full md:flex md:items-start md:p-12">
      <div className="absolute right-4 top-4 md:relative">
        <div className="relative rounded-full w-[4.375rem] h-[4.375rem] md:w-28 md:h-28">
          <Image
            src={gitHubUser.avatar_url}
            alt={`${gitHubUser.login} avatar image`}
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="grid gap-5 flex-1">
        <div>
          <header className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-2">
            <h1 className="font-bold text-[1.625rem] order-2 md:order-1 dark:text-white">
              {gitHubUser.name ? gitHubUser.name : gitHubUser.login}
            </h1>
            <span className="text-app-primary-lm-blue-desaturated order-1 dark:text-white md:order-2">
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

        <p className="text-app-primary-lm-blue-desaturated dark:text-white">
          {gitHubUser.bio === '' || gitHubUser.bio === null
            ? 'This user has no bio.'
            : gitHubUser.bio}
        </p>

        <div className="flex items-start justify-between gap-1 rounded-xl bg-app-neutral-gray-lightest p-4 w-full dark:bg-app-primary-dm-gray-dark">
          <div>
            <h3 className="text-app-primary-lm-blue-desaturated dark:text-white text-xs">
              Repos
            </h3>
            <div className="font-bold text-[1.375rem] dark:text-white">
              {gitHubUser.public_repos}
            </div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated dark:text-white text-xs">
              Followers
            </h3>
            <div className="font-bold text-[1.375rem] dark:text-white">
              {gitHubUser.followers}
            </div>
          </div>

          <div>
            <h3 className="text-app-primary-lm-blue-desaturated dark:text-white text-xs">
              Following
            </h3>
            <div className="font-bold text-[1.375rem] dark:text-white">
              {gitHubUser.following}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.location ? 'opacity-50' : ''
            }`}
          >
            <IconLocation fill={iconFill} />

            <span className="dark:text-white">
              {gitHubUser.location ? gitHubUser.location : notAvailable}
            </span>
          </div>

          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.twitter_username ? 'opacity-50' : ''
            }`}
          >
            <IconTwitter fill={iconFill} />

            <span className="dark:text-white">
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
            <IconLink fill={iconFill} />

            {gitHubUser.blog && (
              <a
                href={`https://${gitHubUser.blog}`}
                target="_blank"
                rel="noreferrer"
                className="dark:text-white"
              >
                {gitHubUser.blog}
              </a>
            )}

            {!gitHubUser.blog && (
              <span className="dark:text-white">{notAvailable}</span>
            )}
          </div>

          <div
            className={`flex items-start gap-5 ${
              !gitHubUser.company || gitHubUser.company === ''
                ? 'opacity-50'
                : ''
            }`}
          >
            <IconCompany fill={iconFill} />
            <span className="dark:text-white">@{gitHubUser.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubUserCard;
