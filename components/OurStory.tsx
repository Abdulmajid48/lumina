"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

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

//  Our Story Component
const OurStory = () => {
  const { matches } = useUserContext();
  return (
    <section className="bg-[#0E1947]">
      <div className="m-auto w-[90%] flex flex-col-reverse sm:flex-row justify-between gap-20 font-publicsans pb-20">
        <div className="flex flex-col gap-5 sm:items-start justify-start sm:w-1/2 sm:mt-[5%]">
          <h2 className="font-bold text-2xl">Know Our Story</h2>
          <p className="text-sm leading-loose">
            Founded in 2019, Lumina is a leading web consulting firm based in
            Malang, Indonesia. Our expert team specializes in web development,
            design, digital marketing, and strategic consulting. We craft
            tailored solutions to exceed client expectations, staying ahead of
            industry trends to provide cutting-edge solutions. Beyond projects,
            we prioritize lasting relationships, offering ongoing support for
            sustained success. Whether you&apos;re a startup or an established
            enterprise, Lumina is your dedicated partner in achieving digital
            excellence.
          </p>
          <button className="text-sm p-2 text-center bg-[#EE4312] rounded-md">
            <Link href="">Learn More</Link>
          </button>
        </div>
        <div className="relative">
          <Image
            src="ourstorydesign2.svg"
            alt="image design"
            width={40}
            height={40}
            className="absolute top-3 sm:-left-5 -left-3"
          />
          <Image
            src="ourstorydesign1.svg"
            alt="image design"
            width={40}
            height={40}
            className="absolute -bottom-5 right-0 sm:-right-5"
          />
          <div className="absolute left-4 top-6 border-2 border-[#EE4312] rounded-xl h-[300px] w-[320px] sm:h-[300px] sm:w-[300px] md:h-[370px] md:w-[350px] lg:h-[370px] lg:w-[400px]"></div>
          <Image
            src="/ourstory.svg"
            alt="our story"
            width={matches ? 380 : 400}
            height={matches ? 380 : 400}
          />
        </div>
      </div>
    </section>
  );
};
export default OurStory;
