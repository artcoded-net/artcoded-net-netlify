import { useServicesQuery } from "../data/generated";
import Loading from "./Loading";
import Error from "./Error";
import Image from "next/image";
import { getRemoteMedia } from "../data/utils/remoteMedia";

const ServicesPreview: React.FC = () => {
  const { data, error, loading } = useServicesQuery();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const services = data?.services?.data;

  if (!services || services.length == 0) return null;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto md:flex space-x-32 py-16">
        {services.map((service) => {
          const { name, description, cover } = service.attributes!;
          const { url: imgSrc } = cover?.data?.attributes || {};
          return (
            <div className="flex-1 relative">
              {imgSrc && (
                <Image src={getRemoteMedia(imgSrc)} width={480} height={200} />
              )}
              <h4 className="font-medium text-brand text-xl my-2">{name}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPreview;
