"use client";

import NextThemesProvider from "./NextThemesProvider";
import MTProvider from "./MTProvider";

export default function Providers({ children }) {
  return (
    <NextThemesProvider>
      <MTProvider>{children}</MTProvider>
    </NextThemesProvider>
  );
}
