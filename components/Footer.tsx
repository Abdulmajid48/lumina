import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-[#0E1947] h-auto max-sm:pb-44 relative">
      <div className="m-auto w-[90%] pt-10">
        {/* Get Intocuh row */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            Get in Touch on Us for Your Path to Success
          </h1>
          <div className="max-sm:w-5/6 max-sm:absolute max-sm:bottom-24 flex justify-between gap-5">
            <button className="max-sm:hidden bg-[#EE4312] h-8 text-xs p-2 rounded-lg">
              Book an Appointment
            </button>
            <div className="flex max-sm:w-full max-sm:justify-between gap-5">
              <Facebook color="#EE4312" />
              <LinkedInIcon sx={{ color: "#EE4312" }} />
              <InstagramIcon sx={{ color: "#EE4312" }} />
              <XIcon sx={{ color: "#EE4312" }} />
              <WhatsAppIcon sx={{ color: "#EE4312" }} />
              <PinterestIcon sx={{ color: "#EE4312" }} />
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="mt-5 flex sm:flex-col max-sm:justify-between sm:gap-5">
          <div className="flex flex-col sm:flex-row sm:justify-start gap-10 font-readex font-semibold">
            <p> Home</p>
            <p>About</p>
            <p> Service</p>
            <p>Blog </p>
            <p> Contact</p>
          </div>
          <div className=" flex flex-col sm:flex-row sm:justify-between max-sm:gap-10 text-sm font-poppins">
            <p className="py-[0.13rem]"> Method Development</p>
            <p className="py-[0.13rem]">Quality Assurance </p>
            <p className="py-[0.13rem]">Human Resources</p>
            <p className="py-[0.13rem]">Policy Compliance</p>
            <p className="py-[0.13rem]"> Business Strategies</p>
            <p className="py-[0.13rem]"> Management System</p>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="sm:mt-10 max-sm:absolute bottom-3 left-0 right-0 w-full flex flex-col items-center text-sm">
          <div className="max-sm:w-[90%] w-full mx-auto">
            <div className="border-t border-[#EE4312] w-full mb-3"></div>
            <div className="flex justify-center sm:justify-between">
              <div className="hidden sm:flex gap-2">
                <Image
                  src="/logo.png"
                  alt="Lumina Logo"
                  width={30}
                  height={30}
                />
                <p className="font-bold text-xl">LUMINA</p>
              </div>
              <div className="flex sm:flex-row sm:gap-5 flex-col sm:text-xs text-center font-publicsans text-[#E2DEDC]">
                <p>©{date} Lumina by Thanks For Today Studio</p>
                <p>• All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
