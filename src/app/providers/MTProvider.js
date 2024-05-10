"use client";

import { ThemeProvider } from "@material-tailwind/react";

export default function MTProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
