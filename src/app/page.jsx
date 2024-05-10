"use client";

import ButtonMT from "./components/ButtonMT";
import ButtonHeadlessUI from "./components/ButtonHeadlessUI";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const handleDarkMode = () => {
    if (resolvedTheme === "light") {
      setdarkMode(true);
      setTheme("dark");
    } else {
      setdarkMode(false);
      setTheme("light");
    }
  };

  useEffect(() => {
    setdarkMode(false);
    setTheme("light");
  }, []);

  return (
    <div className="flex gap-16 flex-col min-h-screen items-center p-10">
      <div className="flex items-center justify-between w-full">
        <div className="text-xl font-bold italic">Multiple Providers</div>
        <Switch
          checked={darkMode}
          onChange={handleDarkMode}
          className="group inline-flex h-8 w-14 items-center rounded-full bg-black text-white transition data-[checked]:bg-black data-[checked]:dark:bg-white"
        >
          <span className="size-9 -translate-x-1 bg-white text-black flex items-center justify-center rounded-full transition group-data-[checked]:translate-x-6 font-bold dark:text-white dark:bg-black">
            {darkMode ? <LuSunMedium /> : <FaMoon />}
          </span>
        </Switch>
      </div>
      <div className="flex gap-5">
        <ButtonMT
          props="Material Tailwind Button"
          color={darkMode ? "white" : "black"}
        />
        <ButtonHeadlessUI props="Headless UI Button" />
      </div>
    </div>
  );
}
