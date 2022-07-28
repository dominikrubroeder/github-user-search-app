import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import GitHubUserCard from '../components/GitHubUserCard';
import SearchBar from '../components/SearchBar';
import TheHeader from '../components/TheHeader';
import { IGitHubUser } from '../data/data';

const Home: NextPage = () => {
  const [gitHubUserData, setGitHubUserData] = useState<IGitHubUser | undefined>(
    undefined
  );

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
          <SearchBar onSubmit={setGitHubUserData} />
          <GitHubUserCard gitHubUser={gitHubUserData} />
        </section>
      </main>
    </div>
  );
};

export default Home;
