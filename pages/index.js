import Head from "next/head";
import Animation from "../components/Animation";
import AnimatedText from "../components/elements/AnimatedText";
import HeaderAnimation from "../components/elements/HeaderAnimation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body className="bg-zinc-800 overflow-x-hidden max-w-[100vw]">
        <HeaderAnimation />
        <AnimatedText />
      </body>
    </>
  );
}
