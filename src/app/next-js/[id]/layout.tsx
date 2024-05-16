import NavBar from "@/components/molecules/navbar";
import NavBarMini from "@/components/molecules/navbarmini";
import { ContentList } from "@/components/sections/content-list";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh gap-8 p-4">
      <div className="hidden min-w-72 flex-col gap-8 rounded-xl bg-white py-4 lg:flex">
        <NavBarMini />
        <ScrollArea className="w-full overflow-auto px-4">
          <ContentList />
        </ScrollArea>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4 lg:gap-8">
        <div className="flex w-full lg:hidden">
          <NavBar />
        </div>
        {children}
      </div>
    </div>
  );
}
