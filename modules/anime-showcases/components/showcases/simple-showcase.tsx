import { ShowcaseInterface } from "../../utils/showcase-interface"
import { PreviewCard } from "../cards/preview-card"
import { SectionTitle } from "../section-title"

type SimpleShowcaseProps<T extends ShowcaseInterface> = {
  className?: string
  title: string
  data: T[]
}

const SimpleShowcase = <T extends ShowcaseInterface,>(props: SimpleShowcaseProps<T>) => {
  return (
    <section className={`flex flex-col w-screen h-96 ${props.className}`}>
      <SectionTitle className="px-4">{props.title}</SectionTitle>
      <ul className="simple-showcase flex flex-row w-full mt-4 overflow-x-scroll gap-4">
        {
          props.data.map((element) => (
            <PreviewCard key={element.id} />
          ))
        }
      </ul>
    </section>
  );
}

export { SimpleShowcase }
export type { SimpleShowcaseProps }