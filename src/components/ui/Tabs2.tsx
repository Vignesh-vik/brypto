
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <section className="w-full bg-muted py-12 md:py-16 lg:py-20 rounded-lg px-4">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 md:px-6 ">
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground">
            <SendIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Crypto Remittance</h3>
          <p className="text-muted-foreground">
            Securely send money across borders using blockchain technology. Our platform offers fast, low-cost, and
            transparent cryptocurrency-based remittance services, empowering individuals and businesses to make global
            payments with ease.
          </p>
          <Button variant="outline" size="sm">
            Send Money Now
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-secondary p-4 text-secondary-foreground">
            <WalletIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Crypto Wallet</h3>
          <p className="text-muted-foreground">
            Manage your digital assets securely with our user-friendly crypto wallet. Store, send, and receive a variety
            of cryptocurrencies, including Bitcoin, Ethereum, and stablecoins. Our wallet prioritizes privacy and
            security, ensuring your funds are protected at all times.
          </p>
          <Button variant="outline" size="sm">
            Create Wallet
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-muted p-4 text-muted-foreground">
            <DollarSignIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Crypto Exchange</h3>
          <p className="text-muted-foreground">
            Trade cryptocurrencies with ease on our secure and user-friendly exchange platform. Access real-time market
            data, execute trades with low fees, and manage your portfolio all in one place. Our exchange caters to both
            novice and experienced traders, providing the tools and resources you need to navigate the crypto markets.
          </p>
          <Button variant="outline" size="sm">
            Start Trading
          </Button>
        </div>
      </div>
    </section>
  )
}

function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function WalletIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}