import { useState } from "react";
import myImage from "../assets/img2.png";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

function LandingPage() {
  const width = window.innerWidth;

  useState(() => {
    console.log(width);
  }, [width]);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "./assets/wisdom-ajibade-CV.pdf"; // path to your PDF file
    link.download = "wisdom-ajibade-CV.pdf.pdf"; // filename to save as
    link.click();
  };

  return (
    <div>
      <div
        className="lp flex lg:flex-col-reverse lg:items-center lg:justify-center sm:mt-4 lg:pb-10 md:mt-4 md:pb-1 w-full h-screen md:h-screen lg:h-screen lg:mt-0 overflow-hidden"
        id="home"
      >
        <div className="flex flex-col justify-center w-[50%] xl:w-[55%] items-start lg:items-center z-10 pl-10 lg:pl-0 lg:w-full">
          <div className="absolute right-0 lg:font-medium top-0 bottom-0 flex flex-col items-center justify-center font-bold text-[0.9rem]">
            <div className="rotate-90 dark:text-[#029CF5] flex items-end justify-end text-orange-400">
              <h1>Scroll Down</h1>
            </div>
          </div>
          <h3 className="font-bold font-poppins text-[2rem] text-[#800020d2] dark:text-[#029CF5] sm:text-[1.1rem] lg:text-[1.5rem] md:text-[1.2rem] lg:pt-6">
            Hi! I&apos;m Wisdom
          </h3>
          <div className="lg:flex lg:justify-start lg:w-full lg:items-center w-[50rem]">
            <div className=" text-[#800000] font-extrabold text-[4rem] sm:text-[1.5rem] xl:text-[4rem] lg:text-[2.5rem] md:text-[2rem] lg:text-center lg:w-full m-0 dark:text-white">
              <h1 className="-mb-[0.8rem] sm:py-1">I&apos;m a </h1>
              <span className="text-red-500 dark:text-[#029CF5] ">
                <ReactTypingEffect
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={500}
                  text={["Website Developer", "Graphic Designer"]}
                />
              </span>
            </div>
          </div>
          <p className="font-poppins text-[#800020] dark:text-[#d1d0d0] lg:text-center sm:text-[1rem]  md:text-[1.2rem] lg:text-[1.3rem] lg:pb-2 lg:px-1 lg:font-bold sm:mt-1 font-bold text-[1.05rem]">
            Bringing your vision to life, one pixel at a time.
          </p>
          <div className="flex flex-wrap w-full items-center justify-start lg:justify-center lg:-mt-4  sm:mt-[0.20rem]">
            <button
              onClick={handleClick}
              className="bg-red-500 dark:bg-[#029CF5] shadow-md w-40 sm:w-30 sm:h-[1.5rem] md:h-[2rem] h-10 rounded-lg text-white mr-3 my-4 sm:my-1 sm:rounded-[5px]"
            >
              {" "}
              Download CV
            </button>
            <a href="#contact">
              {" "}
              <button
                className="bg-red-500 dark:bg-[#029CF5]  shadow-md w-20 sm:h-[1.5rem] md:h-[2rem]  h-10 rounded-lg sm:rounded-[5px]
             text-white"
              >
                Hire me
              </button>
            </a>
          </div>
        </div>
        <motion.div
          // animate={{
          //   y: ["1%", "-2%", "1%"],
          //   transition: {
          //     duration: 3,
          //     repeat: Infinity,
          //     ease: "easeInOut",
          //   },
          // }}
          className="overflow-visible flex flex-col justify-center w-[50%] xl:w-[45%] lg:w-[100%] items-center pl-10 pr-4 lg:pr-0 lg:pl-0 lg:pt-[3rem]"
        >
          <img
            src={myImage}
            alt=""
            className="z-[999]  lg:mt-[5rem] sm:-mt-[1.3rem] min-w-[30rem] max-w-[30rem] min-h-[30rem] max-h-[30rem]   xl:min-w-[25rem] xl:max-w-[25rem] xl:min-h-[25rem] xl:max-h-[25rem] shadow-2xl
             lg:shadow-2xl lg:shadow-[#facc15] shadow-[#facc15] dark:shadow-[#59C2FF] rounded-full object-cover border-solid border-4 lg:border-0 
              border-yellow-300 dark:border-[#59C2FF] lg:pl-0 lg:pr-0 lg:pb-0 lg:pt-0 bg-gradient-to-r from-yellow-400 to-red-500 
               dark:bg-gradient-to-r dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full lg:min-w-[18rem] 
              lg:min-h-[18rem] lg:max-w-[18rem] lg:max-h-[18rem] md:min-w-[13rem] md:min-h-[13rem] md:max-w-[13rem] 
              md:max-h-[13rem] sm:min-w-[9.5rem] sm:min-h-[9.5rem] sm:max-w-[9.5rem] sm:max-h-[9.5rem] md:mt-4"
          />
        </motion.div>
        <motion.div
          className="w-72 h-72 sm:w-36 sm:h-36 md:w-48 md:h-48 z-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 radius-full absolute -bottom-0 rounded-full -left-20 md:-left-[8rem] dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full"
          animate={{
            y: ["3%", "-5%", "3%"],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="w-36 h-36 sm:w-36 sm:h-36 z-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 radius-full absolute 
        dark:bg-gradient-to-r dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full  rounded-full top-20 lg:left-[85%] left-80"
          animate={{
            y: ["2%", "-5%", "2%"],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </div>
  );
}

export default LandingPage;
