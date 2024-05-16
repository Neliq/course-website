import NavBar from "@/components/molecules/navbar";
import { ContentList } from "@/components/sections/content-list";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-[1280px] flex-col gap-8 pb-4">
      <NavBar />
      <div className="h-full flex-grow overflow-hidden bg-white py-8">
        <ScrollArea className="h-full w-full overflow-hidden px-4">
          <ContentList />
        </ScrollArea>
      </div>
    </div>
  );
}
