import HeadText from "./HeadText";
import { motion } from "framer-motion";
import { FaCode, FaServer } from "react-icons/fa6";
import { GiPalette } from "react-icons/gi";

function About() {
  const skills = [
    {
      name: "Frontend Development",
      icon: FaCode,
    },
    {
      name: "Backend Development",
      icon: FaServer,
    },
    {
      name: "Graphic Design",
      icon: GiPalette,
    },
  ];

  return (
    <>
      <div id="overview" className="p-[4%] lg:p-[6%]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <HeadText
            span={"INTRODUCTION"}
            h1={"Overview"}
            p={
              "I am deeply passionate about creating immersive and user-friendly web experiences, as well as crafting visually captivating designs that resonate with audiences. My expertise spans a wide spectrum, including:"
            }
          />
        </motion.div>
        <div className="py-[3%] grid grid-cols-3 xl:grid-cols-2 md:!grid-cols-[100%] important gap-10 mt-4 w-[100%]">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 radius-full
      dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full
      p-[1px] rounded-[20px] shadow-card"
            >
              <div
                key={skill}
                className="bg-[#f5f5f5] dark:bg-[#080e31] rounded-[20px] py-5 px-12 min-h-[280px]
       flex justify-evenly items-center flex-col dark:text-[#d1d0d0] text-center"
              >
                <skill.icon className="size-14 text-red-500 dark:text-[#029CF5]" />
                <h1 className="font-bold text-[1rem]  text-[#800020] dark:text-[#d1d0d0]">
                  {skill.name}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export default About;
