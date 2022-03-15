import Image from 'next/image';
import { useRouter } from 'next/router'
import { useState } from 'react'

function Pagination(props):JSX.Element {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-x-4  font-SourceSansPro">
        <p className="text-white">Page</p>
        <p className="border-[1px] border-gray-500 rounded-lg bg-gray-800 w-12 text-white flex justify-center items-center">{props.page}</p>
        <p className="text-white">of 389</p>
        <button disabled={props.page <= 1 ? true : false} onClick={()=> props.setPage(props.page-1)} className="font-semibold text-black border-[1px] border-black rounded-lg bg-gold-500 w-20 text-white flex justify-center items-center"><span className="mr-2 flex justify-center items-center">&lt;</span>Prev</button>
        <button disabled={props.page >= 389 ? true : false} onClick={()=> props.setPage(props.page+1)} className="font-semibold text-black border-[1px] border-black rounded-lg bg-gold-500 w-20 text-white flex justify-center items-center">Next <span className="ml-2 flex justify-center items-center">&gt;</span></button>
      </div>
    </>
  )
}

export default Pagination;