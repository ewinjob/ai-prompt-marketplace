"use client"

import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import PromptCard from "../components/PromptCard";



export default function Prompts() {
    const [active, setActive] = useState("All");
    const filters = ["All", "Popular", "Newest", "Free", "Saved"];

    const [prompt,setPrompt]=useState([])


    const getAllPrompts=async()=>{
      try{

        const res = await axios.get('/API/prompt')
        console.log(res.data.allPrompts);
        setPrompt(res.data.allPrompts)
        

      }catch(err){
        console.log(err);
        
      }
    }

    useEffect(()=>{
      getAllPrompts()
    },[])

  return (
    <>
    <main className="bg-linear-to-br from-sky-50 via-sky-100 to-blue-200 min-h-screen">
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

       
        <section className="mx-auto my-20 flex w-full max-w-3xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/60 sm:flex-row sm:items-center">
      {/* Search + buttons */}
      <div className="flex w-full flex-1 flex-col gap-3">
        <div className="group relative w-full">
          <FiSearch
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-sky-600"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full rounded-full border border-slate-300 bg-transparent py-3 pl-12 pr-5 font-medium text-slate-800 placeholder-slate-400 outline-none transition hover:border-slate-400 hover:bg-slate-50 focus:border-sky-500 focus:bg-sky-50/40 focus:ring-4 focus:ring-sky-500/15"
          />
        </div>

        <div className="flex flex-wrap gap-2 px-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActive(item)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-500/15 ${
                active === item
                  ? "border-sky-500 bg-sky-50 text-sky-700"
                  : "border-slate-300 bg-transparent text-slate-600 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

     
      <div className="hidden h-16 w-px bg-slate-200 sm:block" />

      
      <div className="group relative w-full sm:w-52">
        <select className="w-full cursor-pointer appearance-none rounded-full border border-slate-300 bg-transparent py-3 pl-6 pr-12 font-medium text-slate-700 outline-none transition hover:border-slate-400 hover:bg-slate-50 focus:border-sky-500 focus:bg-sky-50/40 focus:ring-4 focus:ring-sky-500/15">
          <option value="all">All Category</option>
          <option value="chatgpt">ChatGPT</option>
          <option value="claude">Claude</option>
          <option value="gemini">Gemini</option>
        </select>
        <FiChevronDown
          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-sky-600"
          size={18}
        />
      </div>
    </section>
         

          <section>
            <div>
                  <PromptCard allPrompts={prompt}/>
            </div>
          </section>

    </main>
    </>
  )
}
