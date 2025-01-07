import BenefitOfTeam from "@/components/BenefitOfTeam";
import Clients from "@/components/Clients";
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
  </main>;
};
export default Main;
