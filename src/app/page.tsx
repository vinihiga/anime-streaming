'use client';

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SimpleShowcase } from "@/components/showcases/simple-showcase";
import User from "@/datasource/User";
import UserContext from "@/providers/user-context";

export default function Home() {
  const userMock = new User('Vinícius');

  return (
    <UserContext.Provider value={userMock}>
      <Navbar />
      <SimpleShowcase title="For you" className="mt-4" />
      <SimpleShowcase title="Popular right now" className="mt-11" />
      <SimpleShowcase title="Comedy" className="mt-11" />
      <SimpleShowcase title="Action-adventure" className="mt-11" />
      <Footer />
    </UserContext.Provider>
  );
}
