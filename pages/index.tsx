import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import GitHubUserCard from '../components/GitHubUserCard';
import SearchBar from '../components/SearchBar';
import TheHeader from '../components/TheHeader';
import { IGitHubUser, defaultGitHubUser } from '../data/data';

const Home: NextPage = () => {
  const [gitHubUser, setGitHubUser] = useState<IGitHubUser>(defaultGitHubUser);
  const [gitHubUserWasFound, setGitHubUserWasFound] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onSubmitHandler = (
    gitHubUser: IGitHubUser,
    wasFound: boolean,
    searchValue?: string
  ) => {
    if (!wasFound) {
      setGitHubUserWasFound(false);

      if (searchValue) setSearchValue(searchValue);
    }

    if (wasFound) {
      setGitHubUserWasFound(true);
      setGitHubUser(gitHubUser);
    }
  };

  return (
    <div className="min-h-screen bg-app-neutral-gray-lightest dark:bg-app-primary-dm-gray-dark">
      <Head>
        <title>Github user search | frontendmentor.io</title>
        <meta
          name="description"
          content="Github user search | frontend challenge by frontendmentor.io, solution by Dominik Rubröder"
        />
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>

      <main className="grid gap-9 pt-8 sm:pt-36">
        <TheHeader />

        <section className="grid gap-6">
          <SearchBar onSubmit={onSubmitHandler} setIsLoading={setIsLoading} />
          <GitHubUserCard
            gitHubUser={gitHubUser}
            gitHubUserWasFound={gitHubUserWasFound}
            isLoading={isLoading}
            searchValue={searchValue}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
