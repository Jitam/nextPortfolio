import Link from "next/link";
import { CircularText } from "./Icons";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href={"mailto:jitender.sridhar@gmail.com"}
          className="bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full flex items-center justify-center absolute font-bold hover:bg-light hover:text-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
