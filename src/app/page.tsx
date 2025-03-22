'use client';

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SimpleShowcase } from "../../modules/anime-showcases/components/showcases/simple-showcase";
import User from "@/datasource/models/User";
import UserContext from "@/providers/user-context";
import { Anime } from "@/datasource/models/Anime";

export default function Home() {
  const userMock = new User('Vinícius');

  const dataMock: Anime[] = [
    new Anime(),
    new Anime(),
    new Anime(),
    new Anime(),
    new Anime(),
    new Anime(),
    new Anime(),
    new Anime()
  ];

  return (
    <UserContext.Provider value={userMock}>
      <Navbar />
      <SimpleShowcase title="For you" className="mt-4" data={dataMock} />
      <SimpleShowcase title="Popular right now" className="mt-11" data={dataMock} />
      <SimpleShowcase title="Comedy" className="mt-11" data={dataMock} />
      <SimpleShowcase title="Action-adventure" className="mt-11" data={dataMock} />
      <Footer />
    </UserContext.Provider>
  );
}
