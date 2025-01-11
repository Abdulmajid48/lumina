"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import { motion } from "motion/react";

// Custom Hook for Usercontext
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContext.Provider"
    );
  }
  return context;
};

interface WorksListType {
  image: string;
  title: string;
  description: string;
}
const Works: WorksListType[] = [
  {
    image: "/work1.svg",
    title: "Analysis & Research",
    description:
      "The consulting firm conducts detailed analysis and research, employing strategic methodologies to deliver client-focused insights and effective solutions.",
  },
  {
    image: "/work2.svg",
    title: "Initiate",
    description:
      "In the execution phase, the consulting firm adeptly translates strategies into action, ensuring seamless actualization of client objectives and aspirations.",
  },
  {
    image: "/work3.svg",
    title: "Actualization",
    description:
      "The consulting firm kickstarts client initiatives with strategic expertise, ensuring a smooth launch and effective implementation of customized solutions.",
  },
];
const OurWork = () => {
  const { matches } = useUserContext();
  return (
    <section className="bg-white font-inter">
      <div className="m-auto w-[90%] flex flex-col pb-20 relative">
        <div className="flex pt-7">
          <div className="flex flex-col sm:w-1/2 gap-5 mt-10">
            <h2 className="text-[#100F1B] text-2xl sm:text-3xl font-bold">
              Our Work is For Your Success
            </h2>
            <p className="text-[#373642] text-sm">
              Tailored systematic solutions for your goals, ensuring
              comprehensive support and an effective path to success and
              objectives.
            </p>
          </div>

          <div className="">
            <Image
              src="/ourwork.svg"
              alt=""
              width={matches ? 200 : 350}
              height={50}
              className="absolute right-3 sm:right-5"
            />
            <button className="absolute max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:w-[90%] sm:top-24 sm:right-20 max-sm:text-xs sm:text-sm flex items-center justify-center bg-[#EE4312] h-10 p-3 mb-5 sm:mb-0 m-auto rounded-md gap-5">
              <Link href=""> Book an Appointment</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 mt-14">
          {Works.map((item, index) => {
            const { image, title, description } = item;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0.2,
                  scale: matches ? 1 : 1.5,
                  y: matches ? 100 : 0,
                }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center gap-3"
              >
                <Image
                  src={image}
                  alt={`${title} image`}
                  width={80}
                  height={80}
                />
                <h1 className="font-bold text-xl text-[#100F1B] font-montserrat">
                  {title}
                </h1>
                <p className=" text-sm text-[#373642] leading-relaxed font-ubuntu">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OurWork;
