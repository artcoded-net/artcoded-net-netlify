import type { NextPage } from "next";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { NextSeo } from "next-seo";
import ServicesPreview from "../components/ServicesPreview";
import { getRemoteMedia } from "../data/utils/remoteMedia";
import FeaturedCourse from "../components/FeaturedCourse";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title={"Home Page"} description="" />
      <main>ciao</main>
    </div>
  );
};

export default Home;
