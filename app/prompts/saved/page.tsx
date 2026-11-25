"use Client"

import Link from "next/link"




export default function Saved() {


  const card=[
    {'no':1,"name":"ringo","address":"JKLM"},
    {'no':2,"name":"roy","address":"EFGI"},
    {'no':3,"name":"rio","address":"ABCD"},
  ]

  



  return (
    <>
        <main className="bg-linear-to-br from-sky-50 via-sky-100 to-blue-200 min-h-screen">
      <section className=" flex justify-center items-center pt-20 px-10 min-screen">
        <div className="border-2 border-sky-800 shadow-2xl bg-sky-100 rounded-3xl w-full  h-50">
         <div className="flex justify-between items-center">
           <div className="p-5">
              <p className="font-mono text-xl text-black">
               Your Collection
              </p>
              <p className="text-4xl py-5 font-sans">
                Saved Prompts
              </p>
              <p>
               Keep useful prompts close and come back to them whenever you need.
              </p>
          </div>
          <div className="mx-8">
                      <Link href={'/prompts/edit/id'}>
            <button
              className="rounded-lg border-2 border-gray-700 bg-transparent px-6 py-2.5 text-base font-semibold text-gray-700
                         transition-all duration-200 ease-out
                         hover:rounded-2xl hover:bg-gray-700 hover:text-white hover:shadow-lg
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30
                         active:scale-95"
            >
             Edit Prompt
            </button>
           </Link>
          </div>
         </div>
        </div>
      </section>


        <section>
          <div>
            { 
              card.map((item)=>(
                <div>
                  <div>{item.no}</div>
                <div>{item.name}</div>
                <div>{item.address}</div>
                </div>
              ))
            }
          </div>
        </section>


    </main>
    </>
  )
}
