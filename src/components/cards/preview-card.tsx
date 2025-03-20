type PreviewCardProps = {
  className?: string
  key: string
}

const PreviewCard = (props: PreviewCardProps) => {
  return (
    <li key={props.key} className={`w-48 h-80 bg-indigo-500 shrink-0 ${props.className}`}></li>
  )
}

export { PreviewCard }
export type { PreviewCardProps }