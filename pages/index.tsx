import type { NextPage } from 'next';
import Head from 'next/head';
import GitHubUserCard from '../components/GitHubUserCard';
import SearchBar from '../components/SearchBar';
import TheHeader from '../components/TheHeader';

const Home: NextPage = () => {
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

      <main>
        <TheHeader />
        <SearchBar />
        <GitHubUserCard />
      </main>
    </div>
  );
};

export default Home;
