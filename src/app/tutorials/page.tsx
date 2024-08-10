import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Initial from "../../../public/Images/initial.png";
import p2 from "../../../public/Images/sss.png";
import p3 from "../../../public/Images/process.png";
import p4 from "../../../public/Images/transaction.png";
import p5 from "../../../public/Images/pwp.png";

export default function Component() {
  return (
    <div className="w-full">
      <header className="bg-primary py-12 px-4 md:px-6 rounded-md text-left">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Money Transaction Tutorial
          </h1>
          <p className="mt-4 text-primary-foreground font-semibold ">
            Learn the different stages of a money transaction process and how to
            navigate them with ease.
          </p>
        </div>
      </header>
      <MaxWidthWrapper>
        <main className="container mx-auto my-12 grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <section>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Initiate Transfer</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Start the money transfer process by providing the necessary
              details, such as the recipient's information and the amount to be
              transferred.
            </p>
            <img src={Initial.src} alt="" />
          </section>
          <section>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Authorize Payment</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Verify and authorize the payment details to ensure the transfer is
              secure and accurate.
            </p>
            <img src={p2.src} alt="" />
          </section>
          <section>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Process Transaction</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              The payment is processed, and the funds are transferred to the
              recipient's account.
            </p>
            <img
              src={p5.src}
              alt="Process"
              width={900}
           
              className="mt-4"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
          </section>
          <section>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Confirm Receipt</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Verify that the recipient has received the funds and confirm the
              successful completion of the transaction.
            </p>
            <img
              src={p3.src}
              alt="Confirm"
              width={800}
              height={200}
              className="mt-4"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
          </section>
          <section>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Record Transaction</h2>
            </div>
            <p className="mt-2 text-muted-foreground">
              Document the transaction details for record-keeping and future
              reference.
            </p>
            <img
              src={p4.src}
              alt="Record"
              width={800}
              height={100}
              className="mt-4"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
          </section>
        </main>
        <div className="container mx-auto my-12 px-4 md:px-6">
          <p className="text-muted-foreground">
            Remember, the money transaction process is crucial for secure and
            reliable financial operations. By understanding each step, you can
            ensure a smooth and efficient transaction experience.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
