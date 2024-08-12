import reactjs from "../assets/logos/reactjs.png";
import html from "../assets/logos/html.png";
import mongodb from "../assets/logos/mongodb.png";
import nodejs from "../assets/logos/nodejs.png";
import tailwind from "../assets/logos/tailwind.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png"
import git from "../assets/logos/git.png"

function LangLogos() {
  const logo = [
    {
      id: 1,
      name: "React",
      src: reactjs,
    },
    {
      id: 2,
      name: "React",
      src: html,
    },
    {
      id: 3,
      name: "React",
      src: mongodb,
    },
    {
      id: 4,
      name: "React",
      src: tailwind,
    },
    {
      id: 5,
      name: "React",
      src: css,
    },
    {
      id: 6,
      name: "React",
      src: nodejs,
    },
    {
      id: 7,
      name: "React",
      src: git,
    },
    {
      id: 8,
      name: "React",
      src: javascript,
    },
  ];

  return (
    <div
      className="flex justify-center items-center bg-white dark:bg-[#050818] py-2"
      id="skills"
    >
      <div className="tag-list lg:w-[90%]">
        <div className="inner">
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
          {logo.map((logo) => (
            <img key={logo} src={logo.src} alt={logo.name} />
          ))}
        </div>
        <div
          className="fade dark:bg-gradient-to-l dark:from-[#050818] dark:via-transparent dark:to-[#050818]"
        ></div>
      </div>
    </div>
  );
}

export default LangLogos;
