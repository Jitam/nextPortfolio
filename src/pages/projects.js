import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import featuredProject from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImg = motion(Image);

const FeaturedProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[104%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:cursor-pointer hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            className="w-10 dark:bg-light rounded-full"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="bg-dark border-2 border-light ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold hover:cursor-pointer hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:border-dark dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative my-12 shadow-2xl dark:border-light dark:bg-dark">
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
          <h2 className="my-2 w-full text-left dark:text-light text-3xl font-bold">
            {title}
          </h2>
        </Link>
        <div className="w-full justify-between mt-2 flex items-center">
          <Link
            href={github}
            className="w-8 hover:underline hover:underline-offset-2 dark:bg-light dark:rounded-full"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="text-lg font-semibold dark:text-light"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-16">
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.`}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div>
            <div className="col-span-6">
              <CustomProject
                title={"Crypto Screener Application"}
                type={"Featured"}
                img={featuredProject}
                link={"/"}
                github={"/"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
