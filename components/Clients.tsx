import { ChevronLeft, ChevronRight } from "lucide-react";

const Clients = () => {
  return (
    <section className="bg-white">
      <div className="m-auto w-[90%] relative">
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
          {/* Image */}
          
          {/* Buttons */}
          <div className="max-sm:absolute max-sm:bottom-5 flex gap-3 ">
            <div className="flex justify-center border border-[#EE4312] p-1 rounded-md max-sm:w-36">
              <ChevronLeft color="#EE4312" />
            </div>
            <div className="flex justify-center border border-[#EE4312] p-1 rounded-md max-sm:w-36">
              <ChevronRight color="#EE4312" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Clients;
