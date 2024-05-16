import { Hero } from "@/components/sections/hero";
import NavBar from "@/components/molecules/navbar";
import FeatureSection from "@/components/atoms/feature_section";

export default function Home() {
  return (
    <div className="mx-auto mb-32 flex w-full max-w-[1280px] flex-col gap-32 ">
      <NavBar />
      <Hero />
      <FeatureSection />
    </div>
  );
}
