import UserContext from "@/providers/user-context";
import Link from "next/link";
import { useContext } from "react";

type NavbarProps = {
  className?: string
};

const Navbar = (props: NavbarProps) => {
  const user = useContext(UserContext);

  return (
    <nav className={`flex flex-row w-screen h-15 bg-neutral-900 items-center px-4 ${props.className}`}>
      <Link href="/" className="font-bold text-lg text-nowrap text-indigo-500">Anime Streaming</Link>
      <ul className="flex flex-row-reverse w-full h-full items-center">
        <Link href="/" className="flex flex-col items-center text-indigo-400 hover:text-indigo-300">
          <p className="text-xs">Hello,</p>
          <p>{user?.name}</p>
        </Link>
      </ul>
    </nav>
  )
}

export { Navbar };
export type { NavbarProps };