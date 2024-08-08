import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { requestFormReset } from "react-dom";

export default function Component() {
  return (
    <>
      <MaxWidthWrapper className="mt-12">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>
              View your transaction details and token balance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-04-15</TableCell>
                  <TableCell>Deposit</TableCell>
                  <TableCell>+100 USDC</TableCell>
                  <TableCell>100 USDC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-20</TableCell>
                  <TableCell>Withdrawal</TableCell>
                  <TableCell>-50 USDC</TableCell>
                  <TableCell>50 USDC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-25</TableCell>
                  <TableCell>Exchange</TableCell>
                  <TableCell>-20 USDC, +0.5 BTC</TableCell>
                  <TableCell>30 USDC, 0.5 BTC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-01</TableCell>
                  <TableCell>Deposit</TableCell>
                  <TableCell>+200 USDC</TableCell>
                  <TableCell>230 USDC, 0.5 BTC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-05</TableCell>
                  <TableCell>Withdrawal</TableCell>
                  <TableCell>-100 USDC</TableCell>
                  <TableCell>130 USDC, 0.5 BTC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-10</TableCell>
                  <TableCell>Exchange</TableCell>
                  <TableCell>-50 USDC, +0.1 ETH</TableCell>
                  <TableCell>80 USDC, 0.5 BTC, 0.1 ETH</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="w-full mt-2 flex justify-end ">

            <Button className="mx-10 w-40">Print</Button>
            </div>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </>
  );
}
