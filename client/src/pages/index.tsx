import Head from "next/head";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Welcome } from "@/components/Home/Welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>eina</title>
      </Head>
      <main>
        <NavBar />
        <Welcome />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
