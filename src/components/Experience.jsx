import { useEffect, useState } from "react";
import HeadText from "./HeadText";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import reactIcon from "../assets/expLogos/reactLogo.png";
import LinkedIn from "../assets/expLogos/LinkedIn.png";
import Amazon from "../assets/expLogos/Amazon.png";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Senior React.js Front-End Developer",
      company_name: "BIA Coding School",
      icon: reactIcon,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Spearheaded development and maintenance of cutting-edge web applications leveraging React.js and associated technologies.",
        "Collaborated closely with designers, product managers, and fellow developers to produce top-tier digital products.",
        "Ensured seamless user experiences with responsive design and cross-browser compatibility.",
        "Played a pivotal role in code reviews, offering valuable feedback to enhance team performance and product quality.",
      ],
    },
    {
      title: "Remote Designer at Amazon KDP",
      company_name: "Amazon",
      icon: Amazon,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Nov 2023",
      points: [
        "Designed coloring books, notebooks, and other engaging products for Amazon's Kindle Direct Publishing (KDP) platform, ensuring visual appeal and usability.",
        "Collaborated remotely with authors, editors, and stakeholders to conceptualize and execute designs that enhance readability and user engagement.",
        "Ensured consistency and aesthetic coherence across digital publications, optimizing user experience and brand representation within the publishing process.",
      ],
    },
    {
      title: "Freelance Front-End Developer",
      company_name: "LinkedIn",
      icon: LinkedIn,
      iconBg: "#383E56",
      date: "Jun 2024 - Present",
      points: [
        "Developed and maintained responsive web applications using HTML5, CSS3, JavaScript, and frameworks like React.js.",
        "Collaborated with clients and stakeholders to deliver high-quality digital solutions that meet business objectives.",
        "Implemented cross-browser compatibility and optimized user interfaces for seamless user experiences.",
        "Participated in code reviews, offering constructive feedback to enhance code quality and team performance.",
      ],
    },
    {
      title: "Freelance Graphic Designer",
      company_name: "LinkedIn",
      icon: LinkedIn,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Present",
      points: [
        "Created compelling visual designs including logos, infographics, and marketing materials for diverse clients.",
        "Collaborated closely with clients to understand their vision and deliver impactful designs that meet their branding goals.",
        "Ensured design consistency and brand integrity across all platforms and materials.",
        "Incorporated feedback and revisions to refine designs and exceed client expectations.",
      ],
    },
  ];
  const currMode = JSON.parse(localStorage.getItem("currMode"));

  const [color, setColor] = useState(
    currMode === "dark" ? "#dbdbdb" : "#03031d"
  );

  const [backgroundColor, setBackgroundColor] = useState(
    currMode === "dark"
      ? "linear-gradient( to right,  #59C2FF, #029CF5)"
      : "linear-gradient( to right, #facc15, #ef4444, #e91e63)"
  );

  useEffect(() => {
    const handleColor = () => {
      if (document.documentElement.className === "dark") {
        setBackgroundColor(
          "linear-gradient( to right,  #59C2FF, #029CF5)"
        );
        setColor("#dbdbdb");
      } else {
        setBackgroundColor(
          "linear-gradient( to right, #facc15, #ef4444, #e91e63)"
        );
        setColor("#03031d");
      }
    };

    window.addEventListener("click", handleColor);

    return () => {
      window.removeEventListener("click", handleColor);
    };
  });

  return (
    <div>
      <div
        className="p-[4%] lg:p-[6%]"
        id="experience"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <HeadText span={"WHAT I HAVE DONE SO FAR"} h1={"Work Experience"} />
        </motion.div>
        <div style={{ backgroundColor: backgroundColor }}>
          <VerticalTimeline lineColor={`${color}`}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience}
                contentStyle={{
                  background: backgroundColor,
                  color: color,
                }}
                contentArrowStyle={{ borderRight: `7px solid ${color}` }}
                date={experience.date}
                iconStyle={{ backgroundColor: color }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt="icon"
                      className="w-[60%] h-[60%] object-cover"
                    />
                  </div>
                }
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold lg:text-[1.5rem] md:text-[1.2rem]">
                    {experience.title}
                  </h3>
                  <p
                    className="text-[#090227a9] text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experienxe-point-${index}`}
                      className="text-white text-[14px] pl-1 tracking-wider sm:tracking-normal"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
