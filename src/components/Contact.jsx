import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import HeadText from "./HeadText";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const contacts = [
    {
      icon: FaEnvelope,
      subject: "Email",
      contacts: "wisdomajibade06@gmail.com",
      link: "mailto:wisdomajibade06@gmail.com?body=Hi Wisdom, I'm interested in your services.",
    },
    {
      icon: FaFacebookMessenger,
      contacts: "John Altair",
      link: "https://m.me/JohnAltair?text=Hi+John,+I'm+interested+in+your+services",
    },
    {
      icon: FaWhatsapp,
      contacts: "+234 705 746 9574",
      link: "https://wa.me/+2347057469574",
    },
  ];

  // id
  // template_kdidlq1;

  // service
  // service_bhhbb6i;

  // qzZ6lZSIi9bSU9o - z;
  const [loading, setLoading] = useState(false);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bhhbb6i",
        "template_kdidlq1",
        {
          from_name: form.name,
          to_name: "WiziCodes",
          form_email: form.email,
          to_email: "wisdomajibade06@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_APIK_KEY
      )
      .then(() => {
        toast.success("Message deliverd successfully");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error delivering message");
        setLoading(false);
      });
  };

  return (
    <div className="px-[4%] pb-[4%] lg:pb-[20%] lg:px-[6%]" id="contact">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <HeadText span={"GET IN TOUCH"} h1={"Contact"} />
      </motion.div>
      <div className="grid grid-cols-3 md:grid-cols-[100%]  grid-rows-1 lg:w-full w-[80%] gap-[1rem] rounded-md">
        <div className="flex flex-col lg:gap-3 justify-between items-start col-span-1 h-auto w-[full]">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="h-[9.5rem] md:h-[13rem]  w-full flex flex-col justify-center items-center 
              bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 radius-full 
               dark:bg-gradient-to-r dark:from-[#15EDED] dark:via-[#59C2FF] dark:to-[#029CF5] radius-full 
               rounded-lg shadow-sm shadow-[#0000005d]"
            >
              <contact.icon className="size-14 text-red-400 dark:text-[#029CF5]" />
              <h1 className="text-white font-medium text-[15px] p-3">
                {contact.contacts}
              </h1>
              <a
                href={contact.link}
                className="font-bold text-red-300 dark:text-[#029CF5] cursor-pointer hover:scale-105"
              >
                Send a message
              </a>
            </motion.div>
          ))}
        </div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="contact-box h-[30rem] col-span-2 md:col-auto w-full bg-white 
        dark:bg-[#080e31] rounded-lg p-6 shadow-[#facc15] shadow-md dark:shadow-[#59C2FF] dark:text-[#d1d0d0]"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className="w-full bg-white dark:bg-[#080e31] p-4  border-solid border-[2px] border-yellow-400 dark:border-[#15EDED]  rounded-md mb-7
             focus:outline-red-500 dark:focus:outline-[#029CF5] dark:text-[#d1d0d0]"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white dark:bg-[#080e31] p-4 border-solid border-[2px] border-yellow-400 dark:border-[#15EDED] rounded-md mb-7
             focus:outline-red-500 dark:focus:outline-[#029CF5] dark:text-[#d1d0d0]"
          />
          <textarea
            value={form.message}
            onChange={handleChange}
            name="message"
            cols="30"
            rows="10"
            placeholder="Kindly enter your message"
            className="w-full bg-white dark:bg-[#080e31] p-4 border-solid border-[2px] border-yellow-400 dark:border-[#15EDED] rounded-md max-h-[45%]
             focus:outline-red-500 dark:focus:outline-[#029CF5] dark:text-[#d1d0d0]"
          ></textarea>
          <button
            type="submit"
            className="text-white p-4 w-[8rem] h-[2.5rem] font-bold bg-yellow-400 dark:bg-[#15EDED] hover:shadow-md hover:shadow-[#facc15] dark:hover:shadow-[#15EDED] transition duration-150 ease-in rounded-md flex justify-center shad items-center mt-4
             focus:outline-red-500 dark:focus:outline-[#029CF5] dark:text-[#d1d0d0]"
          >
            <FaPaperPlane />
            &nbsp;{loading ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
