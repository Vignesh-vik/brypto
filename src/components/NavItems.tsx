"use client";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex gap-4 h-full">
      <div className="ml-4 items-center justify-center m-3 flex gap-6">
        <Link
          href="https://coinmarketcap.com/"
          target="_blank"
          className={buttonVariants({ variant: "secondary" })}
        >
          Market &rarr;
        </Link>
        <Link href="/TableTrans" className={buttonVariants()}>
          Wallet &rarr;
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
