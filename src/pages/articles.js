"use client"

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import featuredProject from "../../public/images/articles/pagination-component-in-reactjs.jpg";
import featuredRamProject from "../../public/images/articles/loading_screen.jpg";

import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImg = motion(Image);

const FeaturedArticle = ({ title, img, link, time, summary }) => {
  return (
    <li className="col-span-1 w-full border border-solid border-dark rounded-2xl p-4 bg-light dark:bg-dark dark:border-light">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
        href={link}
        target="_blank"
      >
        <FramerImg
          src={img}
          alt={title}
          className="w-full h-auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="font-bold capitalize dark:text-light my-2 mt-4 text-2xl xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm dark:text-light mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const HoverableImg = ({ title, img, link }) => {
  const imgRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouse(event) {
    imgRef.current.style.display = "block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseout(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseout}
      className="capitalize font-semibold text-xl hover:underline"
      href={link}
      target="_blank"
    >
      {title}
      <FramerImg
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0 }}
        className="z-10 w-64 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
    >
      <HoverableImg title={title} img={img} link={link} />
      <span className="font-semibold text-primary dark:text-primaryDark pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Jitender Pondicherry | Articles</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              time={"9 min read"}
              img={featuredProject}
              link={"/"}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              time={"9 min read"}
              img={featuredRamProject}
              link={"/"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full dark:text-light text-center my-18 mt-32 mb-18">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredRamProject}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
