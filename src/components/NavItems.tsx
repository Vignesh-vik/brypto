"use client";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex gap-4 h-full">
      <div className="ml-4 items-center justify-center m-3 flex gap-6">
        <Link
          href="https://coinmarketcap.com/"
          target="_blank"
          className={cn(buttonVariants({ variant: "ghost" }), "px-8")}
        >
          Market
        </Link>
        <Link
          href="/Transaction"
          className={cn(buttonVariants({variant :"ghost"}), "px-8")}
        >
          Transaction
        </Link>
        <Link
          href="/tutorials"
          className={cn(buttonVariants({variant :"ghost"}), "px-8")}
        >
          Tutorials
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
