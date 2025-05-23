import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile6.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jitender Pondicherry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-center w-full xs:flex-col lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Jitender Pondicherry"
                className="w-[50%] h-auto lg:hidden md:inline-block sm:inline-block xs:inline-block md:w-full"
                priority={false}
                sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 25vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled frontend developer, I am dedicated to turning ideas
                into innovative web/mobile applications. Explore my latest
                projects and articles, showcasing my expertise in React.js,
                Next.js, React-Native and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-light hover:border-dark mx-4 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:jitender.sridhar@gmail.com"
                  className="text-dark dark:text-light underline font-medium text-lg capitalize md:text-base"
                  target="_blank">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Jitender"
            className="w-full h-auto"
            priority={false}
          />
        </div>
        <Hireme />
      </main>
    </>
  );
}
