import { CourseCard } from "@/components/sections/course_card";
import NavBar from "@/components/molecules/navbar";

export default function Home() {
  return (
    <div className="mx-auto mb-32 flex w-full max-w-[1280px] flex-col gap-8 ">
      <NavBar />
      <CourseCard
        src="/ui-course-thumbnail.png"
        title="Taildwind CSS for Designers"
        description="In this course, you will learn how to use Tailwind CSS to design and build modern user interfaces. Tailwind CSS is a utility-first CSS framework that is rapidly gaining popularity among web developers and designers. It has its own Figma Design System based on variables."
        href="/ui-course"
      />
      <CourseCard
        src="/ui-course-thumbnail.png"
        title="Taildwind CSS for Designers"
        description="In this course, you will learn how to use Tailwind CSS to design and build modern user interfaces. Tailwind CSS is a utility-first CSS framework that is rapidly gaining popularity among web developers and designers. It has its own Figma Design System based on variables."
        href="/ui-course"
      />
    </div>
  );
}
