import NavBar from "@/components/molecules/navbar";
import { ContentList } from "@/components/sections/content-list";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const currentId = params.id;

  return (
    <div className="flex h-svh gap-8 p-4">
      <div className="hidden min-w-72 bg-white p-4 lg:flex">
        <ContentList page={currentId || undefined} />
      </div>
      <div className="flex h-full w-full flex-col items-center gap-8">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
