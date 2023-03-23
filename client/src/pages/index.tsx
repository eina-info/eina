import Head from "next/head";
import { NavBar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>eina</title>
      </Head>
      <main>
        <NavBar />
        <h1 className="text-2xl font-bold md:underline">eina &hearts;</h1>
      </main>
    </>
  );
}
