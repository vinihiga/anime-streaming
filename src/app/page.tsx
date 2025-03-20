import { Navbar } from "@/components/navbar";
import { SimpleShowcase } from "@/components/showcases/simple-showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <SimpleShowcase title="For you" className="mt-4" />
      <SimpleShowcase title="Popular right now" className="mt-11" />
      <SimpleShowcase title="Comedy" className="mt-11" />
      <SimpleShowcase title="Action-adventure" className="mt-11" />
    </>
  );
}
