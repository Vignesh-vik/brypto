"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { JSX, SVGProps, useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"


export default function Component() {
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const handleScanFace = () => {
    setIsCameraOpen(true)
  }
  return (
    <div className="mx-auto max-w-md py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground">Get started with our platform by creating a new account.</p>
      </div>
      <form className="mt-8 space-y-6">
      <div className="flex items-center justify-center h-screen">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground">Welcome to our platform!</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required />
          </div>
          <div>
            <Label htmlFor="pan-card">PAN Card</Label>
            <Input id="pan-card" type="text" placeholder="Enter your PAN card number" required />
          </div>
          <div>
            <Label htmlFor="account-type">Account Type</Label>
            <Select  required>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="government">Government</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="facial-scan">Facial Scan</Label>
            <div className="flex items-center justify-center bg-muted rounded-md p-4">
              <Button variant="outline" className="flex items-center justify-center" onClick={handleScanFace}>
                <CameraIcon className="w-6 h-6 mr-2" />
                Scan Face
              </Button>
            </div>
            {isCameraOpen && (
              <div className="mt-4 bg-muted rounded-md p-4">
                <video
                  ref={(video) => {
                    if (video) {
                      navigator.mediaDevices
                        .getUserMedia({ video: true })
                        .then((stream) => {
                          video.srcObject = stream
                          video.play()
                        })
                        .catch((error) => {
                          console.error("Error accessing camera:", error)
                        })
                    }
                  }}
                  className="w-full"
                />
              </div>
            )}
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
      </form>
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