import BenefitOfTeam from "@/components/BenefitOfTeam";
import Clients from "@/components/Clients";
import Collaborate from "@/components/Collaborate";
import Dashboard from "@/components/Dashboard";
import Offers from "@/components/Offers";
import OurStory from "@/components/OurStory";
import OurWork from "@/components/OurWork";

const Main = () => {
  return <main>
    <Dashboard/>
    <Offers/>
    <OurStory/>
    <OurWork/>
    <BenefitOfTeam/>
    <Clients/>
    <Collaborate/>
  </main>;
};
export default Main;
