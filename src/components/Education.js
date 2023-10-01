import Link from "next/link";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize text-2xl font-bold">{type}</h3>
        <span className="text-dark/75 capitalize font-medium">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <h3 className="font-bold text-6xl mt-64 w-full text-center">Education</h3>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] bg-dark h-full origin-top"
        />
        <ul className="w-full flex flex-col ml-4 items-start justify-between">
          <Details
            type={"Bachelor Of Science In Computer Science"}
            time={"2016-2020"}
            place={"Massachusetts Institute Of Technology (MIT)"}
            info={`Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.`}
          />
          <Details
            type={"Master Of Computer Science"}
            time={"2020-2022"}
            place={"Stanford University"}
            info={`Completed a master's project on deep learning, developing a new neural network architecture for natural 
            language understanding.`}
          />
          <Details
            type={"Online Coursework"}
            time={"2016-2020"}
            place={"Coursera And EdX"}
            info={`Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
