import { PreviewCard } from "../cards/preview-card"
import { SectionTitle } from "../section-title"

type SimpleShowcaseProps = {
  className?: string
  title: string
}

const SimpleShowcase = (props: SimpleShowcaseProps) => {
  const mock = Array(10).fill(null);

  return (
    <section className={`flex flex-col w-screen h-80 ${props.className}`}>
      <SectionTitle className="px-4">{props.title}</SectionTitle>
      <ul className="simple-showcase flex flex-row w-full mt-4 overflow-x-scroll gap-4">
        {
          mock.map((_, index) => (
            <PreviewCard key={index.toString()} />
          ))
        }
      </ul>
    </section>
  )
}

export { SimpleShowcase }
export type { SimpleShowcaseProps }