"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface CarouselType {
  description: string;
  name: string;
  title: string;
  image: string;
  star: string;
}
interface CarouselProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const carouselContent: CarouselType[] = [
  {
    description:
      "Working with this consulting firm was a game-changer for our business. Their strategic insights transformed our approach and boosted our success.",
    name: "Heimlin Marka",
    title: "Informatics Engineering",
    image: "/makka.svg",
    star: "/star.png",
  },
  {
    description:
      "Exceptional service! The consulting firm navigated us through challenges with precision, delivering impactful strategies that led to tangible and sustainable results.",
    name: "Karmel Otto",
    title: "Accountant & Finance Manager",
    image: "/otto.svg",
    star: "/star.png",
  },
  {
    description:
      "The consulting team's proactive approach and in-depth analysis provided invaluable insights, guiding us towards effective decision-making and successful outcomes.",
    name: "Karmen Posto",
    title: "Project Manager",
    image: "/posto.svg",
    star: "/star.png",
  },
];

const Carousel = ({ currentIndex, setCurrentIndex }: CarouselProps) => {
  return (
    <div className="mt-8 font-inter">
      <div className="relative sm:w-2/3 w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselContent.map((item, index) => {
              const { description, name, title, image, star } = item;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex-shrink-0"
                >
                  <div className="mx-4 flex flex-col">
                    <div className="bg-[#E2DEDC] p-9 rounded-t-lg">
                      <p className="text-[#373642] sm:text-lg font-readex">
                        {description}
                      </p>
                    </div>
                    <div className="bg-[#EE4312] flex items-center gap-5 relative p-4 rounded-b-lg">
                      <div className="relative w-20 h-20">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover rounded-full"
                          sizes="80px"
                        />
                      </div>
                      <div className="text-white">
                        <p className="text-xl font-bold">{name}</p>
                        <p className="text-sm text-[#E2DEDC]">{title}</p>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Image
                          src={star}
                          alt="rating"
                          className="object-contain"
                          width={80}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-[#EE4312]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Clients

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white relative">
      <div className="m-auto w-[90%] pt-20 pb-40 sm:pb-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#100F1B] font-bold text-2xl">
              See What Clients Are Saying
            </h2>
            <p className="text-[#373642] text-sm">
              Explore the authentic sentiments and experiences of our clients as
              they share their thoughts and satisfaction.
            </p>
          </div>
          {/* Images */}
          <Image
            src="/ourclientpattern1.svg"
            alt="pattern image"
            width={180}
            height={200}
            className="absolute top-4 right-3"
          />
          <Image
            src="/ourclientpattern2.svg"
            alt="pattern image"
            width={180}
            height={200}
            className="absolute bottom-4 left-3"
          />
          {/* Navigation Buttons */}
          <div className="max-sm:absolute max-sm:bottom-20 flex gap-3">
            <button
              onClick={prevSlide}
              className="flex justify-center border border-[#EE4312] p-1 rounded-md max-sm:w-36"
              aria-label="Previous slide"
            >
              <ChevronLeft color="#EE4312" />
            </button>
            <button
              onClick={nextSlide}
              className="flex justify-center border border-[#EE4312] p-1 rounded-md max-sm:w-36"
              aria-label="Next slide"
            >
              <ChevronRight color="#EE4312" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
};

export default Clients;
