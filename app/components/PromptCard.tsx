import { IPrompt } from "@/models/prompt"

interface PromptCardProps{
  allPrompts:IPrompt[]
}

export default function PromptCard({allPrompts}:PromptCardProps) {

  return (
    <>
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
  {allPrompts.map((item: any) => (
    <article
      key={item.id ?? item.title}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
    >
      <header className="mb-3">
        {item.category && (
          <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            {item.category}
          </span>
        )}
        <h3 className="text-base font-semibold text-neutral-900">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
        )}
      </header>

      <p className="line-clamp-6 flex-1 rounded-lg bg-neutral-50 p-3 font-mono text-[13px] leading-relaxed text-neutral-700">
        {item.promptText}
      </p>

      {item.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag: string) => (
            <li
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-4 border-t border-neutral-100 pt-3 text-xs text-neutral-400">
        by <span className="text-neutral-600">{item.author}</span>
      </footer>
    </article>
  ))}
</section>
    </>
  )
}
