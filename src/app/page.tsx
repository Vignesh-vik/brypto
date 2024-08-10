import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, Earth, Shield } from "lucide-react";
import Link from "next/link";


const perks = [
  {
    name: "Instant Transfer",
    Icon: ArrowDownToLine,
    Description:
      "Get your Money transfered to Desired Destination with Zero down time wait.",
  },
  {
    name: "Security",
    Icon: Shield,
    Description:
      "With Our secured and centralized technology, Never worry about fraudulents and scams.",
  },
  {
    name: "For the Earth",
    Icon: Earth,
    Description:
      "We donate 1% of every transaction fee for the Earth green again.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl text-slate-900 font-bold tracking-tight md:text-6xl ">
            Your MarketPlace to send{" "}
            <span className="font-bold capitalize text-yellow-400">money</span>{" "}
            overseas from India.
          </h1>
          <p className="mt-6 text-center text-lg max-w-prose text-muted-foreground md:tracking-tighter">
            Welcome to an Students Inniate Programme which <br />
            helps in Fast , Secure and Efficient way to Transfer <br />
            Money from India all over the world.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link className={buttonVariants()} href="/">
              Send Money
            </Link>
            <Link
              href="/about"
              className={buttonVariants({ variant: "ghost" })}
            >
              About us &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-50 text-yellow-700">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

    </>
  );
}
