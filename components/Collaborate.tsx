import Link from "next/link";

const Collaborate = () => {
  return (
    <section className="bg-[#0E1947]">
      <div className="m-auto w-[90%]">
        <div className="flex flex-col gap-4">
          <h1>Let&rsquo;s Collaborate for Mutual Success</h1>
          <p>
            Your success story begins with a click, explore our consulting
            solutions for transformative results.
          </p>
          <button className="bg-[#EE4312] p-2">
            <Link href="">Collaborate with Us</Link>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Collaborate;
