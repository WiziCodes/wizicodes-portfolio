import HeadText from "./HeadText";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
function Expertise() {
  const webskills = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Javascript",
    },
    {
      name: "React Js",
    },
    {
      name: "Vite",
    },
    {
      name: "Firebase",
    },
    {
      name: "mySql",
    },
    {
      name: "Mongo DB",
    },
    {
      name: "Tanstack Query",
    },
    {
      name: "Node Js",
    },
    {
      name: "Git",
    },
    {
      name: "Tailwind Css",
    },
  ];
  const graphicsSkills = [
    {
      name: "Adobe Photoshop",
    },
    {
      name: "Canva",
    },
    {
      name: "GIMP",
    },
    {
      name: "Photopea",
    },
    {
      name: "Pixellab",
    },
    {
      name: "Snapseed",
    },
    {
      name: "Krita",
    },
  ];

  return (
    <div>
      <div className="p-[4%] lg:p-[6%]" id="skills">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <HeadText
            span={"THE SKILLS I POSESS"}
            h1={"Skills"}
            p={
              "My skills and expertise are wide-ranging and honed through experience, encompassing both technical and creative abilities, enabling me to excel in any task."
            }
          />
        </motion.div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[100%] w-full py-9">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  justify-center bg-gradient-to-l from-yellow-400 to-red-500  radius-full
dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] 
radius-full w-full p-5 rounded-[1rem] min-h-[20rem] 
drop-shadow-lg dark:drop-shadow-[0_35px_35px_rgba(12,_115,_183,_0.5)]"
          >
            <h1 className="font-bold text-[#800000]  dark:text-[#001F3F] font-poppins text-[1.5rem] lg:text-[1.3rem] pb-5">
              Website Development
            </h1>
            <ul className="grid grid-cols-2 font-bold text-[1.2rem] text-white w-full font-poppins">
              {webskills.map((e) => (
                <li
                  className="flex items-center justify-start py-2 "
                  key={e.name}
                >
                  <FaCheckCircle className="pr-3 size-7  text-[#800020d2] dark:text-[#001F3F]" />
                  <span className="lg:text-[15px]">{e.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  justify-start bg-gradient-to-l from-yellow-400  to-red-500 radius-full
dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] 
radius-full w-full p-5 rounded-[1rem] min-h-[20rem] 
drop-shadow-lg dark:drop-shadow-[0_35px_35px_rgba(12,_115,_183,_0.5)]"
          >
            <h1 className="font-bold text-[1.5rem] lg:text-[1.3rem] text-[#800000] dark:text-[#001F3F] pb-5">
              Graphic Design
            </h1>
            <ul className="grid grid-cols-2 font-bold text-[1.2rem] text-white w-full h-[5rem]">
              {graphicsSkills.map((e) => (
                <li
                  className="flex items-center justify-start py-2 "
                  key={e.name}
                >
                  <FaCheckCircle className="pr-3 size-7 text-[#800020d2] dark:text-[#001F3F]" />
                  <span className="lg:text-[15px]">{e.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Expertise;
