import { useSeoConfigQuery } from "../data/generated";
import Loading from "./Loading";
import Error from "./Error";
import { DefaultSeo } from "next-seo";

const SeoGlobalConfig: React.FC = () => {
  const { data, error, loading } = useSeoConfigQuery();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { defaultSeo, seoImage } = data?.seoConfig?.data?.attributes!;
  const { url, height, width, alternativeText } = seoImage?.data?.attributes!;
  const { seoTitle, seoDescription } = defaultSeo || {};
  return (
    <DefaultSeo
      title={seoTitle ?? undefined}
      description={seoDescription ?? undefined}
      openGraph={{
        images: [
          {
            url,
            height: height ?? undefined,
            width: width ?? undefined,
            alt: alternativeText ?? undefined,
          },
        ],
      }}
    />
  );
};

export default SeoGlobalConfig;
