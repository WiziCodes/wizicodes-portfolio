import  { useEffect, useState } from "react";
import {

  FaBriefcase,
  FaSun,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaMoon} from "react-icons/fa";
import { IoMdConstruct } from "react-icons/io";
import { AiOutlineProject } from "react-icons/ai";
import { BsChatQuote } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdInfoOutline } from "react-icons/md";

function Animated() {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const currMode = JSON.parse(localStorage.getItem("currMode"));
  const [darkMode, setdarkMode] = useState(currMode === "dark" ? true : false);

  useEffect(() => {
    // let mode = darkMode ? "light" : "dark";
    // document.documentElement.classList.add(mode);
    darkMode
      ? document.documentElement.classList.add("dark") ||
        localStorage.setItem("currMode", JSON.stringify("dark"))
      : document.documentElement.classList.remove("dark") ||
        localStorage.removeItem("currMode");
  }, [darkMode]);

  const handleKeyboardActivation = () => {
    setIsKeyboardActive(true);
  };
  const handleKeyboardDeactivation = () => {
    setIsKeyboardActive(false);
  };

  useEffect(() => {
    const updatePosition = () => {
      setscrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA"
        ? handleKeyboardActivation()
        : handleKeyboardDeactivation();
    });

    return () => {
      window.removeEventListener("resize", () => {
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
          ? handleKeyboardActivation()
          : handleKeyboardDeactivation();
      });
    };
  });

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div>
      {/* <AnimatePresence>
        {scrollPosition > 100 && (
          <motion.button
            onClick={scrollToTop}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ x: 100, opacity: 0, transition: { duration: 0.6 } }}
            type="button"
            className="fixed bottom-[10%] right-[3%] bg-white rounded-full w-[3rem] h-[3rem] shadow-md p-[1rem] z-50"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>*/}

      <AnimatePresence>
        {scrollPosition > 100 && !isKeyboardActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="transform -translate-x-1/2  -translate-y-[40%] flex items-center justify-between p-[1.7rem] sm:p-[1.4rem] rounded-full 
            bg-[#0000003f] border-[1px] border-solid border-white backdrop-blur-[30px]  
              max-w-[100%] h-[1.5rem] lg:h-[1rem] z-40 fixed left-[50%] bottom-[0%]"
          >
            <a href="#home">
              <FaHome className="bg-gradient-to-r from-yellow-400  to-pink-500 radius-full dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5] radius-full text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#overview">
              <MdInfoOutline className="hover:bg-gradient-to-r from-yellow-400 to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]  text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#experience">
              <FaBriefcase className="hover:bg-gradient-to-r from-yellow-400 to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]   text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#skills">
              <IoMdConstruct className="hover:bg-gradient-to-r from-yellow-400  to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]  text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#projects">
              <AiOutlineProject className="hover:bg-gradient-to-r from-yellow-400  to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]  text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#testimonials">
              <BsChatQuote className="hover:bg-gradient-to-r from-yellow-400  to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]  text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <a href="#contact">
              <FiMail className="hover:bg-gradient-to-r from-yellow-400  to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5]  text-white p-2 lg:p-1 rounded-full text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] cursor-pointer" />
            </a>
            <button
              className="bg-gradient-to-r overflow-hidden from-yellow-400  to-pink-500 radius-full  dark:hover:bg-gradient-to-r dark:from-[#15EDED] dark:to-[#029CF5] cursor-pointer rounded-full"
              onClick={() => {
                setdarkMode(!darkMode);
              }}
            >
              <AnimatePresence>
                {darkMode ? (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ x: 100, opacity: 0, transition: { duration: 1 } }}
                  >
                    <FaSun className=" text-white p-2 lg:p-1 text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] " />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 1 } }}
                  >
                    <FaMoon className=" text-white p-2 lg:p-1 text-[2.5rem] lg:text-[2.1rem] sm:text-[2rem] " />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Animated;
