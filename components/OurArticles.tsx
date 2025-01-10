"use client";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import { motion } from "motion/react";

interface OurArticlesType {
  image: string;
  imagebg: string;
  name: string;
  title: string;
  description: string;
  date: string;
}
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

const OurArticlesContent: OurArticlesType[] = [
  {
    image: "/marketing.png",
    imagebg: "",
    name: "Marketing",
    title: "Latest Insights into Modern Marketing",
    description:
      "Discover the dynamic realm of modern marketing through our latest insights. In an era marked by technological evolution, our comprehensive analysis delves into groundbreaking strategies shaping the industry.",
    date: "December 18th, 2023",
  },
  {
    image: "/information.png",
    imagebg: "",
    name: "Information Technology",
    title: "Tech Innovations Redefining the Business Landscape",
    description:
      "In the ever-evolving business landscape, groundbreaking tech innovations are reshaping the way enterprises operate. From artificial intelligence optimizing processes to blockchain securing transactions,",
    date: "December 18th, 2023",
  },
];
const OurArticles = () => {
  const { matches } = useUserContext();
  return (
    <section className="bg-white relative h-auto text-black sm:pb-5 pb-20">
      <div className="font-mulish m-auto w-[90%] flex flex-col gap-8">
        <div className="flex gap-4 absolute right-4 top-3">
          <Image
            src="/ourclientpattern1.svg"
            alt=""
            width={matches ? 100 : 140}
            height={100}
          />
          <Image
            src="/ourclientpattern2.svg"
            alt=""
            width={matches ? 100 : 140}
            height={100}
          />
        </div>
        <div className="text-xs flex items-center justify-between lg:gap-64 shrink pt-16">
          <div className="text-xs flex flex-col gap-4">
            <h2 className="font-bold text-2xl">Read Our Articles Collection</h2>
            <p className="sm:w-2/3 text-sm">
              Explore our diverse articles collection for insightful
              perspectives and expert knowledge on a topic that you can
              consultated with us.
            </p>
          </div>
          <button className=" max-sm:absolute bottom-16 w-5/6 ml-3 sm:ml-0 m-auto p-2 sm:w-40 h-7 flex items-center justify-center text-[#EE4312] border border-[#EE4312] rounded-md">
            Search Other Articles
          </button>
        </div>
        <div className="flex flex-col lg:flex-row  items-center sm:justify-start justify-between gap-5 pb-10 mb-4">
          {OurArticlesContent.map((item, index) => {
            const { image, title, description, date } = item;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.2, y: "100px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  className={`${matches ? "w-[300px] h-auto" : "w-[520px]"}`}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={matches ? 300 : 520}
                    height={matches ? 300 : 200}
                    className="rounded-t-2xl"
                  />
                </div>
                <div
                  className={`${
                    matches ? "w-[300px]" : "w-[520px]"
                  } relative flex flex-col gap-5 sm:h-40 h-auto bg-[#E2DEDC] rounded-b-2xl p-3 sm:text-xs text-sm`}
                >
                  <h1 className="font-bold text-lg">{title}</h1>
                  <p className="">{description}</p>
                  <div className="flex justify-between">
                    <p className="text-[#9CA2A5]">{date}</p>
                    <p className="text-[#EE4312]">Read More</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurArticles;
