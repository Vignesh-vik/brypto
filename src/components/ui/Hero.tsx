import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        <div className="col-span-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Seamless Crypto Remittance</h1>
          <p className="text-muted-foreground md:text-xl">
            Securely transfer crypto across borders with our cutting-edge platform.
          </p>
          <Link
            href="/tutorials"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Explore
          </Link>
        </div>
        <div className="col-span-1 flex justify-end">
          <img
            src="/placeholder.svg"
            width={400}
            height={500}
            alt="Crypto Remittance"
            className="aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-xl object-cover"
          />
        </div>
        <div className="col-span-1 flex justify-start">
          <img
            src="/placeholder.svg"
            width={400}
            height={500}
            alt="Global Transactions"
            className="aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}