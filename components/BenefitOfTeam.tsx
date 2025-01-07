import Image from "next/image";

interface BenefitType {
  image: string;
  title: string;
  description: string;
}

const Benefits: BenefitType[] = [
  {
    image: "/benefit1.svg",
    title: "Progressve Oriented",
    description:
      "Innovating progress with dynamic strategies and forward-thinking solutions.",
  },
  {
    image: "/benefit2.svg",
    title: "Innovative Vision",
    description:
      "Crafting solutions through forward-thinking strategies and innovative vision.",
  },
];
const BenefitOfTeam = () => {
  return (
    <section className="bg-[#0E1947]">
      {/* Top section */}
      <div className="m-auto w-[90%] flex flex-col-reverse sm:flex-row justify-between items-center font-ubuntu pb-12">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 mt-5">
            <h2 className="font-bold text-3xl">
              Benefits of Teaming Up with Us
            </h2>
            <p className="sm:text-xs text-sm text-[#E2DEDC] leading-relaxed">
              Embark on a transformative journey with us, where tailored
              solutions and dedicated support redefine collaborative success.
            </p>
          </div>
          {/* Left Container */}
          <div className="flex flex-col gap-5">
            {Benefits.map((item, index) => {
              const { image, title, description } = item;
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-white rounded-r-xl px-5 py-2"
                >
                  <div>
                    <Image src={image} alt={title} width={70} height={70} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#100F1B] font-bold">{title}</h3>
                    <p className="text-[#373642] text-xs leading-normal">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Right Container */}
        <div className="mb-10 sm:mb-0">
          <Image
            src={"/benefit3.svg"}
            alt="benefit3"
            width={400}
            height={400}
            className="col-span-3"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitOfTeam;
