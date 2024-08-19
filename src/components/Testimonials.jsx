import { useEffect, useState } from "react";
import HeadText from "./HeadText";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { BiSolidQuoteLeft } from "react-icons/bi";

const testimonials = [
  {
    src: "https://images.pexels.com/photos/27544586/pexels-photo-27544586/free-photo-of-smiling-woman-in-coat-against-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sarah Jones",
    occupation: "Marketing Manager",
    message:
      "Working with you was an absolute pleasure. You understood my vision perfectly and brought my website to life. I'm thrilled with the results and highly recommend you to anyone looking for a professional and talented web developer and designer.",
  },
  {
    src: "https://images.pexels.com/photos/25902261/pexels-photo-25902261/free-photo-of-smiling-woman-in-jacket-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "David Lee",
    occupation: "CEO, Tech Startup",
    message:
      "I was impressed with your ability to translate my complex ideas into a user-friendly and visually stunning website. Your attention to detail and commitment to delivering high-quality work is commendable.",
  },
  {
    src: "https://images.pexels.com/photos/25946881/pexels-photo-25946881/free-photo-of-young-woman-in-sweatshirt-holding-garlic-and-radishes-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Emily Chen",
    occupation: "Freelance Designer",
    message:
      "You helped me take my brand to the next level. Your website design was not only beautiful but also optimized for conversions. I'm receiving more leads than ever before!",
  },
  {
    src: "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Rachel Brown",
    occupation: "Entrepreneur",
    message:
      "I was blown away by your creativity and expertise. You took the time to understand my business goals and created a website that exceeded my expectations. I couldn't be happier with the results!",
  },
  {
    src: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Michael Davis",
    occupation: "Software Engineer",
    message:
      "You are a true partner in every sense of the word. You worked closely with me to understand my technical requirements and delivered a website that met all my needs. I highly recommend you to anyone looking for a reliable and skilled web developer.",
  },
  {
    src: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sophia Patel",
    occupation: "E-commerce Store Owner",
    message:
      "I was struggling to find a web developer who could understand my e-commerce needs. You not only understood my requirements but also provided valuable insights to improve my online store. I'm thrilled with the results and would highly recommend you to anyone in the e-commerce space.",
  },
  {
    src: "https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Alexander White",
    occupation: "Digital Marketing Specialist",
    message:
      "You are a game-changer for any business looking to establish a strong online presence. Your expertise and dedication to delivering high-quality work are impressive. I'm grateful to have worked with you and would highly recommend you to anyone looking for a reliable web development partner.",
  },
];function Testimonials() {
  const currMode = JSON.parse(localStorage.getItem("currMode"));

  const [name, setName] = useState(
    currMode === "dark" ? "myswiper2-dark" : "myswiper2"
  );

  useEffect(() => {
    const handleClass = () => {
      if (document.documentElement.className === "dark") {
        setName("myswiper2-dark");
      } else {
        setName("myswiper2");
      }
    };

    window.addEventListener("click", handleClass);

    return () => {
      window.removeEventListener("click", handleClass);
    };
  });

  return (
    <div className="p-[4%] lg:p-[6%]" id="testimonials">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <HeadText
          span={"WHAT OTHERS SAY"}
          h1={"Testimonials"}
          p={
            "Discover client testimonials highlighting my expertise, impactful results, and client satisfaction."
          }
        />
      </motion.div>
      <motion.div
        className="w-full py-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          className={`${name} pb-[3rem] px-1 pt-4`}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          navigation={false}
          pagination={false}
          scrollbar={false}
          grabCursor={true}
          centeredSlides={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1020: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          {testimonials.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[20rem] bg-red-100 dark:bg-[#080e31] flex flex-col rounded-md justify-between items-start shadow-sm drop-shadow-md p-8 ">
                <div className="text-start font-poppins w-full">
                  <span>
                    <BiSolidQuoteLeft className="text-[1.5rem] mb-4 text-red-500 dark:text-[#59C2FF]" />
                  </span>
                  <p className="text-[13px] text-start dark:text-white font-semibold">
                    {testimony.message}
                  </p>
                </div>
                <div className="flex w-full bottom-0 items-center">
                  <img
                    src={testimony.src}
                    alt="hannah smith img"
                    className=" shadow-sm shadow-[#000000a4] w-[3rem] h-[3rem] rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h1 className="text-red-500 dark:text-[#59C2FF] font-semibold">
                      {" "}
                      {testimony.name}{" "}
                    </h1>

                    <span className="text-gray-400">
                      {" "}
                      {testimony.occupation}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Testimonials;
