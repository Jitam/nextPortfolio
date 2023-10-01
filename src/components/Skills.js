import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark absolute text-light py-3 px-6 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <h3 className="font-bold text-6xl mt-64 w-full text-center">Skills</h3>
        <div className="w-full h-screen relative flex items-center justify-center bg-circularLight">
          <Skill name={"PHP"} x="20vw" y="12vw" />
          <Skill name={"PS"} x="-20vw" y="-15.5vw" />
          <Skill name={"React"} x="20vw" y="-15.5vw" />
          <Skill name={"React-Native"} x="-20vw" y="5vw" />
          <Skill name={"JS"} x="7.5vw" y="0.0vw" />
          <Skill name={"CSS"} x="-7.5vw" y="0vw" />
          <Skill name={"HTML"} x="0vw" y="-7.5vw" />
          <Skill name={"AI"} x="-15.5vw" y="-10.6vw" />
          <Skill name={"Figma"} x="-7.2vw" y="8.5vw" />
          <Skill name={"Tailwind"} x="10.2vw" y="-12.5vw" />
          <Skill name={"jQuery"} x="15.2vw" y="6.5vw" />
          <Skill name={"Web"} x="0" y="0" />
        </div>
      </div>
    </>
  );
};

export default Skills;
