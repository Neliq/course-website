import { CourseCard } from "@/components/sections/course_card";
import { NavBar } from "@/components/molecules/navbar";

export default function Home() {
  return (
    <div className="mx-auto mb-32 flex w-full max-w-[1280px] flex-col items-center gap-8 px-[16px] pt-[128px] lg:px-[64px]">
      <NavBar />
      <CourseCard
        src="/next-js-course-thumbnail.svg"
        title="Next.js for beginners"
        description="Learn the fastest and easiest way to build fullstack web applications. Next.js is a React framework that allows you to build server-side rendered applications with ease."
        href="/next-js/1"
      />
      <CourseCard
        src="/tailwind-course-thumbnail.png"
        title="TailwindCSS for designers [COMING SOON]"
        description="Learn how to design beautiful and responsive websites using TailwindCSS. This course is perfect for designers who want to learn how to code their designs."
        href=""
        disabled={true}
      />
      <CourseCard
        src="/protopie-course-thumbnail.jpg"
        title="Prototype in ProtoPie [COMING SOON]"
        description="Learn how to design and prototype mobile applications using ProtoPie. This course is perfect for designers who want to learn how to create interactive prototypes."
        href=""
        disabled={true}
      />
    </div>
  );
}
