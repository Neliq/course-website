const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16 px-[10px] lg:px-[64px]">
    {children}
  </div>
);

export { Background };
