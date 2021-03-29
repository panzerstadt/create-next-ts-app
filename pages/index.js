import Head from "next/head";

const CardLink = ({ href, title, content }) => {
  return (
    <a
      href={href}
      className="m-4 p-6 text-left no-underline border border-gray-100 rounded-md hover:text-blue-500 hover:border-blue-500 transition-colors ease-in-out"
    >
      <h3 className="mb-4 text-2xl">{title}</h3>
      <p className="m-0 text-xl">{content}</p>
    </a>
  );
};

export default function Home() {
  return (
    <div className="sm:h-screen py-10 sm:py-0 px-1 flex flex-col justify-center items-center ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex flex-col justify-center items-center">
        <h1 className="sm:text-6xl text-4xl m-0 sm:leading-relaxed leading-loose text-center">
          Welcome to{" "}
          <a
            className="text-blue-600 no-underline hover:underline focus:underline active:underline text-center"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="sm:text-2xl text-center">
          Get started by editing{" "}
          <code className="bg-gray-100 rounded-sm p-2 text-md font-mono">
            pages/index.js
          </code>
        </p>

        <div className="grid mt-10 sm:grid-cols-2 max-w-3xl">
          <CardLink
            href="https://nextjs.org/docs"
            title="Documentation &rarr;"
            content="Find in-depth information about Next.js features and API."
          />

          <CardLink
            href="https://nextjs.org/learn"
            title="Learn &rarr;"
            content="Learn about Next.js in an interactive course with quizzes!"
          />

          <CardLink
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples &rarr;"
            content="Discover and deploy boilerplate example Next.js projects."
          />

          <CardLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy &rarr;"
            content="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="w-full h-full border-t-2 border-gray-100 flex flex-col justify-center items-center flex-1 pt-6">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-center items-center"
        >
          <p>Powered by</p>
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 mt-1" />
        </a>
      </footer>
    </div>
  );
}
