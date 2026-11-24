export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-blue-200">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:justify-between md:px-10">
        {/* Left: hero content */}
        <aside className="max-w-xl">
          <button
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-blue-600
                       transition-all duration-200 ease-out
                       hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300
                       active:scale-95"
          >
            AI Prompt Marketplace
          </button>

          <div className="mt-6 space-y-4">
            <h1 className="font-mono text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
              Discover, create, and share powerful AI prompts.
            </h1>
            <p className="text-lg text-gray-700">
              Save prompt templates for ChatGPT, Midjourney, Claude, and more.
            </p>
            <p className="text-base text-gray-600">
              Search by title, category, tags, and curate your favorite AI workflows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary */}
            <button
              className="rounded-lg border-2 border-gray-700 bg-gray-700 px-6 py-2.5 text-base font-semibold text-white
                         transition-all duration-200 ease-out
                         hover:rounded-2xl hover:border-gray-500 hover:bg-gray-500 hover:shadow-lg
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                         active:scale-95"
            >
              Browse Prompts
            </button>

            {/* Ghost */}
            <button
              className="rounded-lg border-2 border-gray-700 bg-transparent px-6 py-2.5 text-base font-semibold text-gray-700
                         transition-all duration-200 ease-out
                         hover:rounded-2xl hover:bg-gray-700 hover:text-white hover:shadow-lg
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                         active:scale-95"
            >
              Add Prompt
            </button>
          </div>
        </aside>

        {/* Right: status card */}
        <aside className="w-full max-w-sm h-30 shrink-0 rounded-2xl bg-sky-300 p-6 shadow-xl shadow-sky-900/15 ring-1 ring-white/50">
          <div className="flex flex-col gap-5">
            <button
              className="self-start rounded-lg border-2 border-gray-700 bg-transparent px-4 py-2 text-sm font-semibold text-gray-700
                         transition-all duration-200 ease-out
                         hover:rounded-2xl hover:bg-gray-700 hover:text-white
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                         active:scale-95"
            >
              Prompt status
            </button>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-sky-500 p-4 text-white shadow-md transition-transform duration-200 hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-wide text-sky-100">
                  Prompts saved
                </p>
                <h4 className="mt-2 text-lg font-semibold leading-snug">
                  Create your first prompt
                </h4>
              </div>

              <div className="rounded-xl bg-sky-500 p-4 text-white shadow-md transition-transform duration-200 hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-wide text-sky-100">
                  Categories ready
                </p>
                <h4 className="mt-2 text-lg font-semibold leading-snug">
                  AI Copy, Art, Workflow
                </h4>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}