import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

export default function Component() {
  return (
    <MaxWidthWrapper className="flex items-start justify-center mt-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Send Remit</CardTitle>
          <CardDescription>
            Enter the recipient's Bitcoin address, the amount to send, and an
            optional message.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="recipient">Recipient's Bitcoin Address</Label>
            <Input
              id="recipient"
              placeholder="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount (BTC)</Label>
            <Input id="amount" type="number" placeholder="0.5" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message for Recipient</Label>
            <Textarea
              id="message"
              placeholder="Sending you some Bitcoin to help with your project!"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="invoice">Invoice</Label>
            <Input id="invoice" type="file" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Send
          </Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
}
