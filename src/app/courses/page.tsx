import { CourseCard } from "@/components/sections/course_card";
import NavBar from "@/components/molecules/navbar";

export default function Home() {
  return (
    <div className="mx-auto mb-32 flex w-full max-w-[1280px] flex-col gap-8 px-[16px] lg:px-[64px]">
      <NavBar />
      <CourseCard
        src="/next-js-course-thumbnail.webp"
        title="Next.js for beginners"
        description="Learn the fastest and easiest way to build fullstack web applications. Next.js is a React framework that allows you to build server-side rendered applications with ease."
        href="/next-js/1"
      />
    </div>
  );
}
