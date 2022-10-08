import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title={"Home Page"} description="" />
      <main>
        <Hero callToAction="Learn full-stack Javascript" imageSrc="" />
      </main>
    </div>
  );
};

export default Home;
