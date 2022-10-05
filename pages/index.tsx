import type { NextPage } from "next";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useHomePageQuery } from "../data/generated";
import { NextSeo } from "next-seo";
import ServicesPreview from "../components/ServicesPreview";
import { getRemoteMedia } from "../data/utils/remoteMedia";
import FeaturedCourse from "../components/FeaturedCourse";

const Home: NextPage = () => {
  const { data, error, loading } = useHomePageQuery();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { title, hero, featuredCourse, seo } =
    data?.homePage?.data?.attributes!;
  const { seoTitle, seoDescription } = seo || {};

  const { buttons, image, callToAction, subtitle } = hero || {};
  const imageSrc = image?.data[0].attributes?.url;

  const { announcement, heading, course } = featuredCourse || {};
  const { images, slug } = course?.data?.attributes || {};
  const firstCourseImageSrc = images?.data[0]?.attributes?.url;

  return (
    <div>
      <NextSeo
        title={seoTitle || "Home Page"}
        description={seoDescription ?? undefined}
      />
      <main>
        {hero && (
          <Hero
            buttons={buttons ?? undefined}
            callToAction={callToAction!}
            imageSrc={imageSrc}
            subtitle={subtitle ?? undefined}
          />
        )}
        <ServicesPreview />
        {featuredCourse && course && (
          <FeaturedCourse
            heading={heading ?? undefined}
            announcement={announcement ?? undefined}
            courseImageUrl={
              firstCourseImageSrc
                ? getRemoteMedia(firstCourseImageSrc)
                : undefined
            }
            courseSlug={slug!}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
