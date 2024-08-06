import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl text-slate-900 font-bold tracking-tight md:text-6xl ">
            Your MarketPlace to send{" "}
            <span className="font-bold capitalize text-blue-500">money</span>{" "}
            overseas from India.
          </h1>
          <p className="mt-6 text-center text-lg max-w-prose text-muted-foreground md:tracking-tighter">
            Welcome to an Student Inniate Programme which <br />
            helps in Fast , Secure and Efficient way to Transfer <br />
            Money from India all over the world.
          </p>
          <div className="mt-6">
            <Link href='/MoneyTransfer'>Send Money</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
