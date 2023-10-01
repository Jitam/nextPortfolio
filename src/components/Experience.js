import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, link, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold">
          {position}&nbsp;
          <a className="text-primary capitalize" href={link} target="_blank">
            @{company}
          </a>
        </h3>
        <span className="text-dark/75 capitalize font-medium">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <h3 className="font-bold text-6xl mt-64 w-full text-center">
        Experience
      </h3>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-dark h-full origin-top"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between">
          <Details
            position={"Software Engineer"}
            company={"Google"}
            link={"http://www.google.com"}
            time={"2022-Present"}
            address={"Mountain View, CA"}
            work={`Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.`}
          />
          <Details
            position={"Intern"}
            company={"Facebook"}
            link={"http://www.facebook.com"}
            time={"Summer 2021"}
            address={"Mountain View, CA"}
            work={`Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.`}
          />
          <Details
            position={"Software Developer"}
            company={"Amazon"}
            link={"http://www.amazon.com"}
            time={"2020-2021"}
            address={"Seattle, WA"}
            work={`Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
            as product recommendations and user reviews, and optimizing the app's performance and reliability.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
