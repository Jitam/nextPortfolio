import Link from "next/link";
import { CircularText } from "./Icons";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href={"mailto:jitender.sridhar@gmail.com"}
          className="bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full flex items-center justify-center absolute font-bold border border-transparent hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
