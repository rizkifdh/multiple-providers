"use client";

import { Button } from "@headlessui/react";

export default function ButtonHeadlessUI({ props }) {
  return (
    <Button className="text-sm bg-black text-white rounded-lg px-5 py-2 dark:bg-white dark:text-black">
      {props}
    </Button>
  );
}
