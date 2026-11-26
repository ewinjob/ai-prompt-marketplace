


export default function Add() {
  

  return (
    <main className="bg-linear-to-br from-sky-50 via-sky-100 to-blue-200 min-h-screen px-4 py-10 sm:px-10 sm:py-20">
      <section className="bg-white mx-auto w-full max-w-4xl rounded-3xl shadow-2xl px-6 py-8 sm:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-blue-400">Add new prompt</p>
          <p className="text-3xl font-mono py-5">Create prompt</p>
          <p className="text-sm max-w-xl">
            Build a reusable AI prompt and tag it with a category so your teammates can find it easily
          </p>
        </div>

        {/* Title + Category */}
        <div className="grid gap-8 py-8 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Title</label>
            <input id="title" className="w-full px-6 py-3 rounded-full border-2 border-sky-600 bg-sky-300 text-sky-950 font-medium placeholder-sky-800/70 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40" type="text" placeholder="Title" />
            <p className="text-sm">use short, descriptive title so prompts are easy to scan.</p>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" className="w-full px-6 py-3 rounded-full bg-sky-100 text-sky-950 font-medium shadow-md outline-none cursor-pointer transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40">
              <option value="">Select Category</option>
              <option value="chatGPT">chatGPT</option>
              <option value="claude">claude</option>
              <option value="gemini">gemini</option>
            </select>
            <p className="text-sm">Pick the tool or use case that best describes this prompts.</p>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3 pb-8">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="short summary of the prompt"
            className="w-full h-28 rounded-xl ring-2 ring-sky-400 outline-none bg-sky-300/30 p-3"
          ></textarea>
          <p className="text-sm">Describe what this prompt achieves and when to use it.</p>
        </div>

        {/* Prompt text */}
        <div className="flex flex-col gap-3 pb-8">
          <label htmlFor="promptText">Prompt text</label>
          <textarea
            id="promptText"
            name="promptText"
            placeholder="write the prompt text here.."
            className="w-full h-48 rounded-xl ring-2 ring-sky-400 outline-none bg-sky-300/30 p-3"
          ></textarea>
          <p className="text-sm">Paste the full AI prompt here, including any instructions or context.</p>
          <input
            type="text"
            disabled
            className="w-full px-4 py-4 rounded-xl border-2 border-sky-600 bg-sky-200 text-sky-950 font-medium placeholder-sky-800 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40"
            placeholder="Example: Create social media post for a SaaS launch with a friendly tone, three benefits and a call to action."
          />
        </div>

        {/* Tags + Author */}
        <div className="grid gap-8 pb-10 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="tags">Tags</label>
            <input id="tags" className="w-full px-6 py-3 rounded-full border-2 border-sky-600 bg-sky-300 text-sky-950 font-medium placeholder-sky-800/70 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40" type="text" placeholder="eg :- AI, Marketing, productivity" />
            <p className="text-sm">Add related keywords to search and filtering.</p>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="author">Author</label>
            <input id="author" className="w-full px-6 py-3 rounded-full border-2 border-sky-600 bg-sky-300 text-sky-950 font-medium placeholder-sky-800/70 shadow-md outline-none transition hover:bg-sky-200 focus:bg-sky-100 focus:ring-4 focus:ring-sky-400/40" type="text" placeholder="Author" />
            <p className="text-sm">Enter the creator name or team responsible for this prompt.</p>
          </div>
        </div>

        {/* Publish row */}
        <div className="flex flex-col gap-5 border-t border-sky-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-2xl">Publish your AI prompt</h3>
            <p className="text-sm">
              Share the prompt with your collection so it can be searched or edited later.
            </p>
          </div>
          <button
            className="rounded-lg border-2 border-gray-700 bg-transparent px-6 py-2.5 text-base font-semibold text-gray-700
                       transition-all duration-200 ease-out
                       hover:rounded-2xl hover:bg-gray-700 hover:text-white hover:shadow-lg
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                       active:scale-95 sm:shrink-0"
          >
            Add Prompt
          </button>
        </div>
      </section>
    </main>
  );
}
