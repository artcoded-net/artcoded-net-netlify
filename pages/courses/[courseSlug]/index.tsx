import { NextPage } from "next";
import { useRouter } from "next/router";
import Hero from "../../../components/Hero";

const CoursePage: NextPage = () => {
  const router = useRouter();
  const { courseSlug } = router.query;

  return <Hero callToAction="" />;
};

export default CoursePage;
