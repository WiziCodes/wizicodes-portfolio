import { useState } from "react";
import HeadText from "./HeadText";
import image1 from "../assets/graphics/1.jpg";
import image2 from "../assets/graphics/2.jpg";
import image3 from "../assets/graphics/3.jpeg";
import image4 from "../assets/graphics/82.jpg";
import image5 from "../assets/graphics/Black Gold Modern Restaurant Business Flyer.png";
import image6 from "../assets/graphics/CHURCH.jpg";
import image7 from "../assets/graphics/Engraved Logo Mockup on Wood.jpg";
import image8 from "../assets/graphics/Free T-Shirt & Tag Mockup.jpg";
import image9 from "../assets/graphics/Office Window 3D Logo Mockup.jpg";

import webImg1 from "../assets/websites/app.jpg";
import webImg2 from "../assets/websites/Dashboard.png";
import webImg3 from "../assets/websites/LEC WEBSITE.png";
import webImg4 from "../assets/websites/Movie Web.png";
import webImg5 from "../assets/websites/original-45f7f5ab7ec27a0cda4fb29807bbea73.png";
import webImg6 from "../assets/websites/portfolio.png";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaEye, FaX } from "react-icons/fa6";

function Projects() {
  const projectDesc = [
    {
      src: image1,
      style: "w-[21rem]",
      name: "Vacancy Announcement Flier",
      languages: "Adobe Photoshop",
      category: "graphics",
    },
    {
      src: image3,
      style: "w-[25rem]",
      name: "Campaign Flier",
      languages: "Adobe Photoshop, Snapseed",
      category: "graphics",
    },
    {
      src: image2,
      style: "w-[30rem]",

      name: "New Month Flier",
      languages: "Pixellab, Snapseed",
      category: "graphics",
    },
    {
      src: image4,
      style: "w-[40rem]",

      name: "Paper-Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "graphics",
    },
    {
      src: image5,
      style: "w-[25rem]",

      name: "Restaurant Food Menu",
      languages: "Canva, Snapseed",
      category: "graphics",
    },
    {
      src: image6,
      style: "w-[25rem]",

      name: "Church Flier",
      languages: "Adobe Photoshop",
      category: "graphics",
    },
    {
      src: image7,
      style: "w-[40rem]",

      name: "Wood Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "graphics",
    },
    {
      src: image8,
      style: "w-[40rem]",

      name: "T-Shirt & Tag Logo Mockup",
      languages: "Photopea, Adobe Photoshop",
      category: "graphics",
    },
    {
      src: image9,
      style: "w-[40rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "graphics",
    },
    {
      src: webImg1,
      style: "w-[40rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
    {
      src: webImg2,
      style: "w-[0rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
    {
      src: webImg3,
      style: "w-[40rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
    {
      src: webImg4,
      style: " w-[50rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
    {
      src: webImg5,
      style: "w-[40rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
    {
      src: webImg6,
      style: "w-[50rem]",

      name: "Office Window 3D Logo Mockup",
      languages: "Adobe Photoshop, Photopea",
      category: "website",
    },
  ];

  const [selected, setSelected] = useState("website");
  const [style, setStyle] = useState("");
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const filter = projectDesc.filter((item) => {
    return item.category === selected;
  });

  return (
    <>
      {modal === true && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center z-50 bg-[#00000073] backdrop:blur-md p-[1rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              modal ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="backdrop:blur-lg flex flex-col items-center justify-center"
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setModal(false)}
                className="flex items-center justify-center"
              >
                <FaX className="text-[#ffff] text-[1.3rem] font-bold mb-3 mr-2" />
              </button>
              <img
                src={modalImg}
                className={`${style} md:w-full object-cover`}
                alt="sample img"
              />
            </div>
          </motion.div>
        </div>
      )}
      <div
        className="p-[4%] lg:p-[6%] flex flex-col justify-start"
        id="projects"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <HeadText
            span={"MY WORK"}
            h1={"Projects"}
            p={
              "Explore My Portfolio of Innovative Web Development and Striking Graphic Design Projects"
            }
          />
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="flex items-center justify-between w-[50%] lg:w-[100%] lg:pr-2 pt-2"
        >
          <button
            onClick={() => {
              setSelected("website");
            }}
            className="w-full mr-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 radius-full
            dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full
            p-[2px] rounded-md shadow-card font-roboto lg:h-[4rem] sm:h-[3.5rem]"
          >
            <button
              className={`bg-white dark:bg-[#080e31] p-1 rounded-[inherit] w-full
               flex justify-evenly items-center flex-col ${
                 selected === "website"
                   ? "text-red-500 dark:text-[#15EDED]"
                   : "text-gray-700 dark:text-[#d1d0d0]"
               } font-bold text-center h-full sm:text-[0.8rem]`}
            >
              WEBSITE DEVELOPMENT
            </button>{" "}
          </button>
          <button
            onClick={() => {
              setSelected("graphics");
            }}
            className={`w-full mr-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 radius-full
            dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full
            p-[2px] rounded-md shadow-card font-roboto  lg:h-[4rem] sm:h-[3.5rem] font-bold`}
          >
            <button
              className={`bg-white dark:bg-[#080e31] p-1 rounded-[inherit] w-full h-full
               flex justify-evenly items-center flex-col ${
                 selected === "graphics"
                   ? "text-red-500 dark:text-[#15EDED]"
                   : "text-gray-700 dark:text-[#d1d0d0]"
               }  text-center sm:text-[0.8rem]`}
            >
              {" "}
              GRAPHIC DESIGN
            </button>{" "}
          </button>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="py-9"
        >
          <Swiper
            className="myswiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            navigation
            pagination={false}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                // spaceBetween: 40,
              },
              1020: {
                slidesPerView: 3,
                // spaceBetween: 40,
              },
            }}
          >
            {filter.map((info, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-[15rem] relative card swiper"
              >
                <img
                  src={info.src}
                  className="w-full h-full object-cover"
                  alt="sample img"
                />
                <div className=" cursor-pointer card-info absolute transition duration-150 ease-in top-0 bottom-0 left-0 right-0 opacity-1 bg-[#0000004b] text-white flex justify-end items-start p-3 flex-col">
                  {/* <button
                    className="top-[1rem] absolute right-4 flex items-center "
                    onClick={() => {
                      setModal(true),
                        setModalImg(info.src),
                        setStyle(info.style);
                    }}
                  >
                    <FaEye className="text-[1.2rem] text-[#facc15] dark:text-[#15EDED]" />{" "}
                    <span className="ml-2 font-roboto">View</span>
                  </button> */}
                  <h1 className=" font-extrabold font-roboto">{info.name}</h1>
                  <h1 className="text-[#facc15] font-bold  dark:text-[#15EDED]">
                    {info.languages}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
