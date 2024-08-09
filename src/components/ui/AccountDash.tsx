"use client";
import { SquareUser } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button, buttonVariants } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const AccountDash = () => {
  const user = null;
  return (
    <Sheet key={"top"}>
      <SheetTrigger className=" group -m-2 flex items-center p-2">
        <SquareUser
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle className="">Your Account</SheetTitle>
          <SheetDescription className="border-b-2 py-3">
            {user ? null : "Sign in or Sign up to see your credentials."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right font-semibold">
              Name
            </label>
            <input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3 py-2 "
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Ledger
            </label>
            <input
              id="username"
              placeholder="0xaweWs6977dSwadwef206sSwd"
              className="col-span-3 py-2"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Link href="/Account" className={cn( buttonVariants(),"w-full ")}>Make Changes</Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AccountDash;
