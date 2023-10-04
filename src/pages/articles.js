import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import featuredProject from "../../public/images/articles/pagination-component-in-reactjs.jpg";
import featuredProject1 from "../../public/images/articles/loading_screen.jpg";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const FramerImg = motion(Image);

const FeaturedArticle = ({ title, img, link, time, summary }) => {
  return (
    <li className="col-span-1 w-full border border-solid border-dark rounded-2xl p-4 bg-light">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
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
      <Link href={link} target="_blank">
        <h2 className="font-bold capitalize my-2 mt-4 text-2xl">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
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
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark border border-solid border-dark border-r-4 border-b-4"
    >
      <HoverableImg title={title} img={img} link={link} />
      <span className="font-semibold text-primary pl-4">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Jitender Pondicherry | Articles</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
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
              img={featuredProject1}
              link={"/"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-18 mt-32 mb-18">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"03 October 2023"}
              img={featuredProject1}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
