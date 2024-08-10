import pic from "../../../public/unnamed.jpg"


export default function Component() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Meet Our Team</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are a passionate group of individuals dedicated to building
            innovative solutions and delivering exceptional results for our
            clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={pic.src}
                width={120}
                height={120}
                alt="Vignesh"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Vignesh</h3>
                <p className="text-muted-foreground">Dev</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-4">
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iusto, sed dicta et natus quis eum quia molestiae
                      excepturi sequi hic odio? Culpa dolore cupiditate
                      necessitatibus?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tempora aspernatur omnis optio obcaecati ullam pariatur,
                      minus quasi tempore deleniti nulla excepturi harum eius
                      odit recusandae unde maxime facilis! Expedita, aut.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={pic.src}
                width={120}
                height={120}
                alt="Vicram Sundar"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Vicram</h3>
                <p className="text-muted-foreground">Dev</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-4">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident quis ducimus illo! Similique ipsa adipisci earum
                      dolore nobis commodi dolorem soluta ducimus quidem!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Odio, in minus. Ab blanditiis expedita commodi tempore
                      ratione eos laborum reprehenderit illum repudiandae ut
                      iusto inventore, consequatur amet tenetur iste hic!
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={pic.src}
                width={120}
                height={120}
                alt="Mythili"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Mythili</h3>
                <p className="text-muted-foreground">Lead</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-4">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis at quo dolores quia repudiandae, quae veniam
                      ab nam laudantium fugiat sed ea magnam tempore cupiditate
                      commodi? Magni vitae distinctio odio!
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim suscipit quasi sint quos ullam debitis cum, fugiat excepturi velit est vitae accusamus culpa ex eum? Pariatur ducimus atque accusamus!
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={pic.src}
                width={120}
                height={120}
                alt="Varsha"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Varsha</h3>
                <p className="text-muted-foreground">Design</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-4">
                    <li>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque mollitia nulla tenetur? Dicta quis officiis quos minus ratione sint, neque est iste vero.
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eum. Sunt rem commodi placeat minima itaque inventore recusandae dignissimos voluptatum odit quae, repellat possimus quidem eveniet nisi non ut fuga!.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={pic.src}
                width={120}
                height={120}
                alt="Thaniya"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">Thaniya</h3>
                <p className="text-muted-foreground">Designer</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-4">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit optio placeat assumenda asperiores dicta tempora quo modi non, natus, repudiandae voluptatum inventore fuga. Sunt voluptatibus provident alias a inventore.
                    </li>
                    <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint exercitationem asperiores, alias mollitia laudantium autem explicabo rem aut itaque adipisci corrupti voluptatum quo culpa deleniti incidunt ad optio labore!
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="text-center ">
            <h2 className="text-2xl font-bold">About Our Project</h2>
            <p className="mt-4 text-muted-foreground">
              Introducing RemitSafe: Revolutionizing International Money
              Transfers In a world that’s increasingly interconnected, sending
              money across
              <br /> borders shouldn’t be a hassle. Enter RemitSafe, a
              groundbreaking blockchain-based platform designed <br />
              to transform the way we handle international remittances. <br />
              Let’s dive into how RemitSafe is changing the game with faster,
              cheaper, and more secure money transfers. <br />
              <div className="flex flex-col gap-y-4">
                <div className="font-semibold text-xl underline py-2">
                  1. Instant Transfers: Speed Meets Efficiency
                  <br />
                </div>
                <div className="py-4">
                  Gone are the days of waiting days for your money to reach its
                  destination. <br /> RemitSafe leverages cutting-edge
                  blockchain technology to ensure that money transfers happen in
                  minutes, not days. <br /> Whether you’re sending funds to a
                  family member or making a business payment, RemitSafe
                  guarantees near-instantaneous transactions, <br /> so you and
                  your recipients can enjoy swift access to funds.
                  <br />
                </div>
                <div className="font-semibold text-xl underline py-2">
                  2. Lower Costs: Maximize Your Money
                  <br />
                </div>
                Traditional money transfer methods often come with hefty fees
                due to multiple intermediaries.
                <br /> RemitSafe simplifies this process by cutting out the
                middlemen. <br />
                By operating on a decentralized blockchain network, RemitSafe
                reduces transaction fees significantly.
                <br /> This means more of your money reaches its destination,
                and you save on unnecessary costs.
                <br />
                <div className="font-semibold text-xl underline py-2">
                  3. Enhanced Security: Trust Through Technology
                  <br />
                </div>
                Security is paramount when it comes to financial transactions.
                RemitSafe uses blockchain’s robust
                <br /> cryptographic technology to safeguard your money. Each
                transaction is recorded on an immutable ledger, <br />
                reducing the risk of fraud and unauthorized access. <br />
                With RemitSafe, you can rest easy knowing your funds are secure
                and protected.
                <br />
                <div className="font-semibold text-xl underline py-2">
                  4. Transparent Tracking: Know Where Your Money Is
                  <br />
                </div>
                Transparency is key to trust, and RemitSafe delivers just that.
                Every transaction is recorded
                <br /> on the blockchain, providing a clear, unchangeable record
                of your money’s journey.
                <br /> You can track your funds in real-time and get updates on
                the
                <br /> transaction status, ensuring you’re always in the loop.
                <br />
                <div className="font-semibold text-xl underline py-2">
                  5. Multi-Currency Support: Global Flexibility
                  <br />
                </div>
                RemitSafe doesn’t just handle one currency; it supports multiple
                currencies to cater to a global audience. <br />
                Whether you’re sending USD, EUR, or any other major currency,{" "}
                <br />
                RemitSafe converts your funds seamlessly and ensures they’re
                delivered in the recipient’s local currency. <br />
                This flexibility simplifies international transactions and meets
                diverse financial needs.
                <br />
                <div className="font-semibold text-xl underline py-2">
                  6. User-Friendly Interface: Simplicity at Its Best
                  <br />
                </div>
                Not everyone is a tech expert, and RemitSafe understands that.
                The platform features <br />
                an intuitive and easy-to-navigate interface, designed to be
                user-friendly for
                <br /> people of all tech skill levels. Clear instructions and
                customer support are <br />
                available to guide you through every step of the process, making
                international transfers as simple as possible.
                <br />
              </div>
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower our clients to achieve their goals
              through the use of our powerful and user-friendly platform. We are
              constantly innovating and improving our product to ensure that we
              stay ahead of the curve and deliver the best possible experience
              to our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
