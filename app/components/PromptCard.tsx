import { IPrompt } from "@/models/prompt"
import axios from "axios";

interface PromptCardProps{
  allPrompts:IPrompt[]
}

export default function PromptCard({allPrompts}:PromptCardProps) {

  const handleFav=async(id:any)=>{
    console.log(id);

    const currentPrompt = allPrompts.find((item:any)=>item._id==id)
      console.log(currentPrompt);
      
    try{
      const res = await fetch(`/API/prompt/${id}`,{
        method:'PATCH',
        body:JSON.stringify({
          favorite: !currentPrompt?.favorite 
        })
      })

      const data = await res.json()
      console.log(data);

    }catch(err){
      console.log("showing error"+err);
    }
  }

  return (
    <>
    <section className="mx-auto my-5 grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
  {allPrompts.map((item: any) => (
    <article
      key={item.id ?? item.title}
      className="group flex flex-col rounded-xl border shadow-2xl border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-400"
    >
      <header className="mb-3">
        {item.category && (
         <div className="flex justify-between items-center">
           <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            {item.category}
          </span>
          {
            item.favorite? <button
              onClick={()=>handleFav(item._id)}
                  type="button"
                  aria-label="Add to favorites"
                  className="rounded-full  p-2  transition  text-red-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="red"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
                    />
                  </svg>
                </button> 
                :
                <button
              onClick={()=>handleFav(item._id)}
                  type="button"
                  aria-label="remove to favorites"
                  className="rounded-full bg-gray-50 p-2 text-gray-400 transition hover:bg-pink-50 hover:text-red-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
                    />
                  </svg>
                </button>
          }
         </div>
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
