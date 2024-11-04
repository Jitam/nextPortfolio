import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import featuredProject from "../../public/images/projects/xpandrAi/xpandrai.png";
import featuredProject1 from "../../public/images/projects/jackpotvilla/jackpotvilla.png";
import featuredProject2 from "../../public/images/projects/zifipay/img1.jpeg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImg = motion(Image);

const FeaturedProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl rounded-br-xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs-rounded-br-2xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[104%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImg
          src={img}
          alt={title}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6  lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:cursor-pointer hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            className="w-10 dark:bg-light rounded-full md:w-8 sm:w-6"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="bg-dark border-2 border-light ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold hover:cursor-pointer hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:border-dark dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const CustomProject = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative my-12 shadow-2xl dark:border-light dark:bg-dark xs:px-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImg
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:cursor-pointer hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left dark:text-light text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full justify-between mt-2 flex items-center">
          <Link
            href={github}
            className="w-8 hover:underline hover:underline-offset-2 dark:bg-light dark:rounded-full md:w-6"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="text-lg font-semibold dark:text-light md:text-base"
            href={link}
            target="_blank"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Jitender Pondicherry | Projects</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"XpandrAi"}
                type={"Featured"}
                img={featuredProject}
                summary={`A comprehensive solution designed to streamline and simplify your social media marketing endeavors.`}
                link={"https://www.xpandrai.com"}
                github={"/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <CustomProject
                title={"Online gaming Aggregator"}
                type={"Featured"}
                img={featuredProject1}
                link={"https://www.jackpotvilla.com/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <CustomProject
                title={"Crypto Wallet App"}
                type={"Featured"}
                img={featuredProject2}
                link={"/"}
                github={"/"}
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`}
                link={"/"}
                github={"/"}
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;