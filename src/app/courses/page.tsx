import { Header } from "@/components/sections/header";
import { CourseCard } from "@/components/sections/course_card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <div className="z-10 w-full container m-8 items-center justify-between text-sm flex flex-col gap-8">
        <Header selected="2" />
        <CourseCard
          src="/ui-course-thumbnail.jpg"
          title="Advanced Figma UI Course"
          description="In this course, you will learn how to design a modern UI in Figma. You will learn how to create a design system, design components, and create a prototype. You will also learn how to create a design system in Figma. Start the course now!"
          href="/ui-course"
        />
        <CourseCard
          src="/ui-course-thumbnail2.jpg"
          title="Beginner UX Course"
          description="In this course, you will learn the basics of UX design. You will learn how to conduct user research, create user personas, and create wireframes. You will also learn how to create a prototype in Figma. Start the course now!"
          href="/ui-course"
        />
        <CourseCard
          src="/ui-course-thumbnail.jpg"
          title="Advanced Figma UI Course"
          description="In this course, you will learn how to design a modern UI in Figma. You will learn how to create a design system, design components, and create a prototype. You will also learn how to create a design system in Figma. Start the course now!"
          href="/ui-course"
        />
      </div>
    </main>
  );
}
