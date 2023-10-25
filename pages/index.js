import Head from "next/head";
import Hero from "../components/hero";

import Features from "../components/features";
import LogoClouds from "../components/logo-clouds";
import Testimonials from "../components/testimonialscard";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <LogoClouds />
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;
