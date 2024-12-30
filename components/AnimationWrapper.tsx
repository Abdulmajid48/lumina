"use client";

import { motion } from "motion/react";
import { ReactNode, useContext } from "react";
import { UserContext } from "./UserContextProvider";

const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  // import toggle from toggleWrapper
  const context = useContext(UserContext);

  //   Error handling
  if (!context) {
    throw new Error(
      "NavbarservicesandEnrol must be used within a UserContext.Provider"
    );
  }
  const { toggle } = context;

  return (
    // Make the entire page blurry when sidebar is open
    <motion.div
      initial={{ filter: "blur(0px)" }}
      animate={{ filter: toggle ? "blur(2.2px)" : "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
