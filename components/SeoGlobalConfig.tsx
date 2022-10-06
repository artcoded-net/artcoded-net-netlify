import { DefaultSeo } from "next-seo";

const SeoGlobalConfig: React.FC = () => {
  return (
    <DefaultSeo
      title={"Artcoded"}
      description={"Full Stack Javascript training"}
      // openGraph={{
      //   images: [
      //     {
      //       url,
      //       height: height ?? undefined,
      //       width: width ?? undefined,
      //       alt: alternativeText ?? undefined,
      //     },
      //   ],
      // }}
    />
  );
};

export default SeoGlobalConfig;
