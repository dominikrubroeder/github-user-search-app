import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-app-neutral-gray-lightest dark:bg-app-primary-dm-blue-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
