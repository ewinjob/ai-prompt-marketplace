import Link from "next/link"



export default function Prompts() {
  return (
    <>
    <main className="bg-linear-to-br from-sky-50 via-sky-100 to-blue-200 min-h-screen">
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl" />
      <section className=" flex justify-center items-center pt-20 px-10 min-screen">
        <div className="border-2 border-sky-800 shadow-2xl bg-sky-100 rounded-3xl w-full  h-50">
         <div className="flex justify-between items-center">
           <div className="p-5">
              <p>
                Prompt Library
              </p>
              <p className="text-4xl py-5 font-sans">
                Search, filter and manage AI prompts.
              </p>
              <p>
                Explore categorized prompts, save favorites, and quickly copy prompt text for chatGPT, Midjourney, Claude, and more.
              </p>
          </div>
          <div className="mx-8">
                      <Link href={'/prompts/add'}>
            <button
              className="rounded-lg border-2 border-gray-700 bg-transparent px-6 py-2.5 text-base font-semibold text-gray-700
                         transition-all duration-200 ease-out
                         hover:rounded-2xl hover:bg-gray-700 hover:text-white hover:shadow-lg
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                         active:scale-95"
            >
              Add Prompt
            </button>
           </Link>
          </div>
         </div>
        </div>
      </section>

      <section className="flex justify-center items-center gap-10 my-20">
  <div>
    <input
      className="w-60 px-6 py-3 rounded-full bg-sky-300 text-sky-950 font-medium placeholder-sky-800/70 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40"
      type="text"
      placeholder="Search by title"
    />
  </div>
  <div>
    <input
      className="w-60 px-6 py-3 rounded-full bg-sky-300 text-sky-950 font-medium placeholder-sky-800/70 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40"
      type="text"
      placeholder="All category"
    />
  </div>
  <div>
<select
  name=""
  id=""
  className="w-44 appearance-none px-6 py-3 rounded-full bg-sky-100 text-sky-950 font-medium shadow-md outline-none cursor-pointer transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40"
>
  <option value="chatGPT">chatGPT</option>
  <option value="claude">claude</option>
  <option value="gemini">gemini</option>
</select>
  </div>
</section>

    </main>
    </>
  )
}
