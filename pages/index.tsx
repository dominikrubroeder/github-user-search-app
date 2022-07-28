import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import GitHubUserCard from '../components/GitHubUserCard';
import SearchBar from '../components/SearchBar';
import TheHeader from '../components/TheHeader';
import { IGitHubUser, defaultGitHubUser } from '../data/data';

const Home: NextPage = () => {
  const [gitHubUser, setGitHubUser] = useState<IGitHubUser>(defaultGitHubUser);

  return (
    <div>
      <Head>
        <title>Github user search | frontendmentor.io</title>
        <meta
          name="description"
          content="Github user search | frontendmentor.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid gap-9">
        <TheHeader />

        <section className="grid gap-6">
          <SearchBar onSubmit={setGitHubUser} />
          <GitHubUserCard gitHubUser={gitHubUser} />
        </section>
      </main>
    </div>
  );
};

export default Home;
