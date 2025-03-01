import React from 'react'
import ScrollFadeIn from '@/app/(components)/scroll-animation'
import { regularTrack } from '@/app/data/call_for_paper_info'

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-4 mt-10 px-4">
      <div className='flex flex-col md:w-1/2 text-left'>
        <div>
          <h3 className='text-xl font-semibold text-[#222121]'>Regular Track</h3>
          <ul className='list-disc list-inside text-gray-500 my-6'>
            {regularTrack.map((item, index) => (
              <li className='my-1' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page