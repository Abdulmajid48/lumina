"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// Type for navbar list
interface ListType {
  name: string;
  link: string;
}

const List: ListType[] = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
  {
    name: "Service",
    link: "",
  },
  {
    name: "Blog",
    link: "",
  },
  {
    name: "Contact",
    link: "",
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

// Navbar Component
const Navbar = () => {
  const { matches } = useUserContext();
  return (
    <nav className="bg-[#0E1947] flex items-center h-20 pb-2 font-readex">
      <div className="m-auto w-[90%] flex items-center justify-between">
        <div className="flex gap-2 items-center z-20">
          <Image src="/logo.png" alt="Lumina Logo" width={30} height={30} />
          <p className="font-bold text-2xl">LUMINA</p>
        </div>
        {matches ? <Mobileview /> : <Desktopview />}
      </div>
    </nav>
  );
};

// SideBar Component for Mobileview
const Sidebar = () => {
  return (
    <motion.div
      key="mobile-sidebar"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-[60%] h-full bg-[#0E1947] flex flex-col gap-5 items-center pt-20 z-10 fixed top-0 right-0"
    >
      {List.map((item, index) => {
        return (
          <li key={index} className="list-none hover:text-[#EE4312]">
            <Link href={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </motion.div>
  );
};

// MobileView Component
const Mobileview = () => {
  const { matches, toggle, ToggleSidebar } = useUserContext();
  return (
    <div>
      <div className="z-50 relative" onClick={ToggleSidebar}>
        {toggle ? (
          // Close tooggle sign
          <motion.div
            initial={{}}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <X size={40} strokeWidth={1} color="white" />
          </motion.div>
        ) : (
          // Open toggle sign
          <Menu size={40} strokeWidth={1} color="white" />
        )}
      </div>

      {matches && <AnimatePresence>{toggle && <Sidebar />}</AnimatePresence>}
    </div>
  );
};

// DesktopView Component
const Desktopview = () => {
  return (
    <div className="flex items-center sm:gap-16 md:gap-20 text-sm">
      <div className="flex gap-10">
        {List.map((item, index) => {
          return (
            <li
              key={index}
              className="list-none hover:text-[#EE4312]"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </div>
      <button className="bg-[#EE4312] rounded-lg p-2 text-xs ">
        Book an Appointment
      </button>
    </div>
  );
};

export default Navbar;
