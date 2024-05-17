import { Button } from "../atoms/button";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 pt-[128px] text-center lg:flex-row lg:pt-[256px]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="mb-4 text-4xl font-bold leading-snug lg:text-7xl lg:leading-tight">
          Upgrade your <br /> knowledge today!
        </h1>
        <div className="text-md mb-4 flex rounded-md border-2 border-indigo-600 bg-transparent px-4 py-2 font-semibold text-indigo-600 opacity-75">
          Free Access
        </div>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-500">
          Welcome to the gateway of knowledge and transformation! Here, embark
          on an extraordinary journey where learning meets empowerment. Our
          course website isn&apos;t just a platform; it&apos;s a sanctuary for
          those hungry for growth, driven by curiosity, and passionate about
          mastering new skills.
        </p>
        <Button href="/courses" variant="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export { Hero };
