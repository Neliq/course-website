import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Guide } from "@/components/sections/guide";
import { Background } from "@/components/sections/background";

export default function Home() {
  return (
    <Background>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-32">
        <Header selected="Home" />
        <Hero />
        <Guide />
      </div>
    </Background>
  );
}
