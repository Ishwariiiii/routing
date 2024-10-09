"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push("/form")
  }
  return (
    <div className="bg-slate-300">
      <div className="flex flex-row justify-center items-center min-h-screen">
        <button className="bg-orange-400 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded" onClick={handleClick}>
          Go to Form
        </button>
      </div>
    </div>

  )
}

export default page