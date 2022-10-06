import Image from "next/image";
import { Link } from "../types";
import Button from "./Button";

interface HeroProps {
  buttons?: Link[];
  callToAction: string;
  imageSrc?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({
  buttons,
  callToAction,
  imageSrc,
  subtitle,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {callToAction}
          </h1>
          {subtitle && (
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {subtitle}
            </p>
          )}
          {buttons && (
            <>
              {buttons!.length >= 1 && (
                <Button
                  type="primary"
                  withArrow
                  href={buttons[0]!.href}
                  label={buttons[0]!.label}
                />
              )}
              {buttons!.length >= 2 && (
                <Button
                  type="secondary"
                  href={buttons[1]!.href}
                  label={buttons[1]!.label}
                />
              )}
            </>
          )}
        </div>
        {imageSrc && (
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <Image src={imageSrc} alt="mockup" layout="fill" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
