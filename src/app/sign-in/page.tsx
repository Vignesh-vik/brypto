import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link href="#" className="font-medium text-primary hover:underline" prefetch={false}>
              sign up for a new account
            </Link>
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-foreground">Facial Authentication</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Securely sign in using your face. Simply upload a photo of your face and we'll verify your identity.
            </p>
            <div className="mt-4 flex justify-center">
              <label
                htmlFor="face-photo"
                className="inline-flex cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                <CameraIcon className="mr-2 h-5 w-5" />
                Upload Photo
              </label>
              <input id="face-photo" type="file" accept="image/*" className="sr-only" />
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-medium text-foreground">Email &amp; Password</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in with your email and password as a backup option.
            </p>
            <form className="mt-4 space-y-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" autoComplete="email" required className="mt-1 w-full" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" autoComplete="current-password" required className="mt-1 w-full" />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">Forgot Password</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Can't remember your password? Click the button below to reset it.
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href="#"
                className="inline-flex cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                prefetch={false}
              >
                Reset Password
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">Additional Information</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Here's some additional information about our sign-in process.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-muted-foreground">
              <li>We use industry-standard encryption to protect your data.</li>
              <li>Your password is never stored in plain text, only a secure hash.</li>
              <li>Two-factor authentication is available for added security.</li>
              <li>We'll never share your information with third parties.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}