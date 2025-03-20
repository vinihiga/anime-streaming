import Link from "next/link";

type NavbarProps = {
  className?: string
};

const Navbar = (props: NavbarProps) => {
  return (
    <nav className={`flex flex-row w-screen h-15 bg-neutral-900 items-center px-4 ${props.className}`}>
      <Link href="/" className="font-bold text-lg text-nowrap text-orange-400">Anime Streaming</Link>
      <ul className="flex flex-row-reverse w-full h-full items-center">
        <Link href="/" className="text-orange-500">Log-in</Link>
      </ul>
    </nav>
  )
}

export { Navbar };
export type { NavbarProps };