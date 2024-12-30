"use client";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "./UserContextProvider";
import { motion, useInView, useSpring, useTransform } from "motion/react";

// Types
interface OurResultType {
  number: number;
  symbol?: string;
  description: string;
}

// Import ScreenSize from UserContextProvider
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContext.Provider"
    );
  }
  return context;
};

// Contents on the left Side of the Container
const Article = () => {
  return (
    <article className="lg:pr-16 flex flex-col gap-7 sm:gap-10 sm:mt-20 font-ubuntu">
      <h1 className="text-4xl font-bold leading-normal sm:leading-none">
        Masterminds to Your Positive Goal
      </h1>
      <p className=" text-sm leading-loose">
        Experience a rise in your pursuits with our expert consulting. We excel
        in tailoring success strategies to your unique goals, covering diverse
        fields for maximum impact, professionally and delightfully.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-4">
        <button className="flex items-center justify-center rounded-md text-sm h-6 w-auto bg-[#EE4312] p-4 ">
          Collaborate with us
        </button>
        <button className="flex items-center justify-center h-6 w-auto rounded-md text-[#FF5F31] border border-[#FF5F31] text-sm p-4 ">
          Learn More
        </button>
      </div>
      <div className="border-b border-b-[#FF5F31] sm:w-2/3"></div>
    </article>
  );
};
// Contents on the Right Side of the Container
const Figure = () => {
  const { matches } = useUserContext();
  return (
    <figure className="relative">
      {/* Two people reading */}
      <Image
        src="/dashboardpic.svg"
        alt="dashboard picture"
        height={matches ? 400 : 750}
        width={matches ? 400 : 750}
        className=""
      />
      {/* overlaying orange border box */}
      <div className="absolute top-5 left-5 border-[1.8px] border-[#FF5F31] w-[20rem] h-[20rem] sm:w-[12rem] sm:h-[12rem] md:w-[17rem] md:h-[17rem] lg:w-[20rem] lg:h-[20rem] min-[1102px]:w-[23rem] min-[1102px]:h-[23rem] rounded-xl"></div>
      {/* Dotted patter Image */}
      <Image
        src="/dottedlines.svg"
        alt="dotted lines"
        width={matches ? 100 : 170}
        height={matches ? 100 : 170}
        className="absolute top-3 -left-10 sm:-left-20"
      />
    </figure>
  );
};

const OurResultList: OurResultType[] = [
  {
    number: 160,
    description: "Client Project",
  },
  {
    number: 340,
    description: "Successful Project",
  },
  {
    number: 300,
    symbol: "+",
    description: "Team Members",
  },
  {
    number: 82,
    symbol: "M",
    description: "Total Revenue",
  },
];

// Counter function for OurResults, using Framer Motion
const AnimatedCounter = ({ value = 0, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 30,
    duration: duration * 1000,
  });

  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
    </div>
  );
};

// OurResult Component. containing number figures and description
const OurResult = () => {
  return (
    <div className="mt-5 flex flex-col sm:flex-row gap-7 justify-between items-start">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">This is Our Result</h1>
        <p className="text-sm leading-loose">
          How capable we are at work shines through in every endeavor.
        </p>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-10">
        {OurResultList.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex text-4xl font-bold w-28 sm:w-auto">
              <AnimatedCounter value={item.number} duration={1} />
              {item.symbol && <span>{item.symbol}</span>}
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard component
const Dashboard = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-16">
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-10 sm:gap-24">
        <Article />
        <Figure />
      </div>
      <OurResult />
    </section>
  );
};

export default Dashboard;
