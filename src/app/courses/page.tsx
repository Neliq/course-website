import { Header } from "@/components/sections/header";
import { CourseCard } from "@/components/sections/course_card";
import { Background } from "@/components/sections/background";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8">
      <Header selected="2" />
      <CourseCard
        src="/ui-course-thumbnail.png"
        title="Taildwind CSS for Designers"
        description="In this course, you will learn how to use Tailwind CSS to design and build modern user interfaces. Tailwind CSS is a utility-first CSS framework that is rapidly gaining popularity among web developers and designers. It has its own Figma Design System based on variables."
        href="/ui-course"
      />
    </div>
  );
}
