import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <section className="w-full bg-muted py-12 md:py-16 lg:py-20 rounded-xl px-4">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground">
            <DollarSignIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Subsidies</h3>
          <p className="text-muted-foreground">
            Explore a wide range of government and private subsidies to fund your projects, from tax credits and grants
            to low-interest loans and incentives. Our team can help you navigate the complex landscape of funding
            opportunities and secure the resources you need to bring your ideas to life.
          </p>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-secondary p-4 text-secondary-foreground">
            <CoinsIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Crowd Fund</h3>
          <p className="text-muted-foreground">
            Leverage the power of the crowd to raise funds for your ventures. Our platform connects you with a global
            network of investors and backers who are eager to support innovative projects. Whether you're looking to
            crowdfund a new product, a creative endeavor, or a social impact initiative, we can help you craft a
            compelling campaign and reach your funding goals.
          </p>
          <Button variant="outline" size="sm">
            Start a Campaign
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-center rounded-full bg-muted p-4 text-muted-foreground">
            <FileTextIcon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Will Management</h3>
          <p className="text-muted-foreground">
            Ensure your assets are distributed according to your wishes with our comprehensive will management services.
            Our team of legal experts can help you create a detailed estate plan that safeguards your legacy and
            provides for your loved ones. From drafting wills and trusts to managing complex asset distributions, we'll
            work closely with you to ensure your wishes are carried out.
          </p>
          <Button variant="outline" size="sm">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
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


function FileTextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}