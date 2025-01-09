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

const Collaborate = () => {
      const { matches } = useUserContext();
  return (
    <section className="bg-[#0E1947] sm:h-80 h-auto relative">
      <div className="m-auto w-[90%] flex justify-between">
        <div className="flex flex-col gap-5 mt-60 sm:mt-20 mb-10 sm:mb-0">
          <h1 className="text-3xl font-bold">
            Let&rsquo;s Collaborate for Mutual Success
          </h1>
          <p className="text-xs">
            Your success story begins with a click, explore our consulting
            solutions for transformative results.
          </p>
          <button className="bg-[#EE4312] p-2 sm:w-1/4 text-xs rounded-md">
            <Link href="">Collaborate with Us</Link>
          </button>
        </div>
        <div className="absolute right-0">
          <Image
            src="/collaborate1.png"
            alt=""
            width={matches ? 400 : 600}
            height={matches ? 400 : 500}
          />
        </div>
      </div>
    </section>
  );
};
export default Collaborate;