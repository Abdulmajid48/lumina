import BenefitOfTeam from "@/components/BenefitOfTeam";
import Clients from "@/components/Clients";
import Collaborate from "@/components/Collaborate";
import Dashboard from "@/components/Dashboard";
import Offers from "@/components/Offers";
import OurArticles from "@/components/OurArticles";
import OurStory from "@/components/OurStory";
import OurWork from "@/components/OurWork";

const Main = () => {
  return <main className="overflow-hidden">
    <Dashboard/>
    <Offers/>
    <OurStory/>
    <OurWork/>
    <BenefitOfTeam/>
    <Clients/>
    <Collaborate/>
    <OurArticles/>
  </main>;
};
export default Main;
