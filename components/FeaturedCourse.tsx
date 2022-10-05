import Image from "next/image";
import Button from "./Button";

interface FeaturedCourse {
  courseImageUrl?: string;
  courseSlug: string;
  heading?: string;
  announcement?: string;
}

const FeaturedCourse: React.FC<FeaturedCourse> = ({
  courseSlug,
  courseImageUrl,
  heading,
  announcement,
}) => (
  <div className="py-16 max-w-screen-lg flex justify-between space-x-32 mx-auto">
    {courseImageUrl && (
      <div className="w-1/2 relative h-64">
        <Image src={courseImageUrl} layout="fill" alt="Course cover" />
      </div>
    )}
    <div className="w-1/2">
      <h1 className="text-5xl font-bold text-accent mb-4">{heading}</h1>
      <p className="text-xl mb-4 font-light">{announcement}</p>
      <Button
        type="primary"
        withArrow
        href={`/courses/${courseSlug}`}
        label="Learn more"
      />
    </div>
  </div>
);

export default FeaturedCourse;
