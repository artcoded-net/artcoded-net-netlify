import Loading from "./Loading";
import Error from "./Error";
import Image from "next/image";

const ServicesPreview: React.FC = () => {
  return (
    <div className="bg-gray-100">
      Ciao
      {/* <div className="container mx-auto md:flex space-x-32 py-16">
        {services.map((service) => {
          const { name, description, cover } = service.attributes!;
          const { url: imgSrc } = cover?.data?.attributes || {};
          return (
            <div className="flex-1 relative" key={`service-${name}`}>
              {imgSrc && (
                <Image
                  src={getRemoteMedia(imgSrc)}
                  width={480}
                  height={200}
                  alt="Service cover"
                />
              )}
              <h4 className="font-medium text-brand text-xl my-2">{name}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ServicesPreview;
