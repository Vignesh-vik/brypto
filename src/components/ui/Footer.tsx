import { JSX, SVGProps } from "react"

export default function Component() {
    return (
      <footer className="bg-background text-muted-foreground py-12 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MountainIcon className="w-6 h-6" />
              <span className="text-lg font-medium">Remit Inc.</span>
            </div>
            <div className="space-y-1 text-sm">
              <p>123 Main Street</p>
              <p>Chennai, India</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: remit@business.com</p>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <blockquote className="text-lg font-medium italic">
              "Simplicity is the ultimate sophistication." - Leonardo da Vinci
            </blockquote>
            <p className="text-sm">
              At Remit, our team of passionate developers is committed to creating clean, elegant solutions that empower
              our clients to achieve their goals. We believe in the power of simplicity and strive to deliver exceptional
              results with every project.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }