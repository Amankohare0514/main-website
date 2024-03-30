"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
function Hero() {
  const words = [
    {
      text: "👋 Hey",
    },
    {
      text: "there",
    },
    {
      text: "this",
    },
    {
      text: "is",
    },
    {
      text: "Aman Kohare.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col text-4xl items-center justify-center h-[25rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-3xl  ">
        Mern stack developer in India.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Resume
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Hero