import Link from "next/link"

type FooterProps = {
  className?: string
}

const Footer = (props: FooterProps) => {
  const githubLink = "https://github.com/vinihiga/anime-streaming"
  const disclaimerText = "This is a demonstration project being developed at "

  return (
    <footer className={`flex flex-col mt-12 mb-4 justify-center items-center ${props.className}`}>
      <p className={`text-sm text-white`}>{disclaimerText}<Link href={githubLink} className="text-indigo-400 hover:text-indigo-300">{githubLink}</Link></p>
    </footer>
  )
}

export { Footer }
export type { FooterProps }