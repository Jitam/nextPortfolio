import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, link, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-primary dark:text-primaryDark capitalize"
            href={link}
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="text-dark/75 dark:text-light/75 capitalize font-medium xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
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
    <div className="my-64">
      <h3 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h3>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-dark dark:bg-light h-full origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Blockmatrix Interactive Solutions"}
            link={"http://www.blocmatrix.com"}
            time={"Feb 2019-Present"}
            address={"Hyderabad, India"}
            work={`Working on a team responsible for developing online games, where game providers can host their games and the client will be responsible for providing access to user to play their games and make payments based on his platform.`}
          />
          <Details
            position={"Freelancing"}
            company={""}
            // link={""}
            time={"Jan 2018 - Jan 2019"}
            address={"Hyderabad, India"}
            work={`Worked on 2-3 projects based on HTML, JS and CSS. Mostly included as personal porfolios of people who are working in design studios.`}
          />
          <Details
            position={"Production Engineer"}
            company={"VS Enterprises"}
            // link={"http://www.amazon.com"}
            time={"Feb 2012- Nov 2017"}
            address={"Hyderabad, India"}
            work={`Was involved in production and service of Transformers. Had to be update with demand and supply`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
