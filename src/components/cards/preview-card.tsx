type PreviewCardProps = {
  className?: string
}

const PreviewCard = (props: PreviewCardProps) => {
  return (
    <li className={`w-48 h-80 bg-indigo-500 shrink-0 ${props.className}`} />
  )
}

export { PreviewCard }
export type { PreviewCardProps }