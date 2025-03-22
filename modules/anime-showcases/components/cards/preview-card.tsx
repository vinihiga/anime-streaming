type PreviewCardProps = {
  className?: string
}

const PreviewCard = (props: PreviewCardProps) => {
  return (
    <li className={`w-48 h-72 hover:w-56 hover:h-80 shrink-0 ${props.className}`}>
      <div className="flex w-full h-full bg-indigo-500" />
    </li>
  )
}

export { PreviewCard }
export type { PreviewCardProps }