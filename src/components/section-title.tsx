type SectionTitleProps = {
  className?: string
  children: string | React.ReactElement | React.ReactElement[]
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h1 className={`w-full text-2xl font-bold text-white ${props.className}`}>{props.children}</h1>
  )
}

export { SectionTitle };
export type { SectionTitleProps }