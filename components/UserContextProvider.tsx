"use client";
import { createContext, type ReactNode, useEffect, useState } from "react";

interface UserContextType {
  matches: boolean;
  toggle: boolean;
  ToggleSidebar: () => void;
}

// Create the context: initial undefined value
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [matches, setMatches] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  //
  const ToggleSidebar = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    // Check if the user is in the browser
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(max-width: 640px)");
      setMatches(mediaQueryList.matches);

      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaQueryList.addEventListener("change", listener);

      // Cleanup listener
      return () => {
        mediaQueryList.removeEventListener("change", listener);
      };
    }
  }, []);
  return (
    <UserContext.Provider value={{ matches, toggle, ToggleSidebar }}>
      <div className="">{children}</div>
    </UserContext.Provider>
  );
};
export default UserContextProvider;
