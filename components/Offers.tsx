"use client";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

interface OffersListType {
  image: string;
  title: string;
  description: string;
}
const OffersList: OffersListType[] = [
  {
    image: "/method.svg",
    title: "Method Development",
    description:
      "Strategic method development for business excellence and progress.",
  },
  {
    image: "/quality.svg",
    title: "Quality Assurance",
    description:
      "Quality excellence for optimal and sustainable business operation.",
  },
  {
    image: "/human.svg",
    title: "Human Resources",
    description: "Optimize human resources for sustainable business growth.",
  },
  {
    image: "/policy.svg",
    title: "Policy Compliance",
    description:
      "Strategic policy compliance for seamless business operations.",
  },
  {
    image: "/business.svg",
    title: "Business Strategies",
    description:
      "Unlocking growth potential using dynamic business strategies.",
  },
  {
    image: "/management.svg",
    title: "Management System",
    description:
      "Maximize productivity with our advanced management structure.",
  },
];

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

const Offers = () => {
  const { matches } = useUserContext();
  return (
    <section className="bg-white h-auto relative font-mulish">
      <div className="m-auto w-[90%] flex flex-col gap-16 pt-32 pb-20">
        <div className="absolute right-2 top-7">
          <Image
            src="\offersdottedline.svg"
            alt="dotted lines"
            width={matches ? 200 : 300}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#100F1B] font-bold text-2xl">
            What We Can Offer You
          </h1>
          <p className="text-[#373642] text-sm sm:w-[40%]">
            Optimize your journey with our consulting services, delivering
            personalized solutions for success.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-14">
          {OffersList.map((item, index) => {
            const { image, title, description } = item;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-start gap-2 sm:w-1/3"
              >
                <Image src={image} alt={title} width={70} height={70} />
                <h1 className="text-[#100F1B] text-2xl sm:text-xl font-bold">
                  {title}
                </h1>
                <p className="text-[#373642] sm:text-sm text-center w-3/4">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
