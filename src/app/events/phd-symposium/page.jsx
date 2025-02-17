import React from 'react'
import ScrollFadeIn from '@/app/(components)/scroll-animation'

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-8 mt-10 px-4">
      <ScrollFadeIn>
        <div className="flex flex-col items-center gap-6 text-center font-sans">
          <div className="text-5xl text-blue-800 font-semibold">
            <span>Exciting Opportunity!</span>
          </div>
          <div className="text-xl text-gray-700 max-w-4xl">
            <p className="mb-4">
              Ph.D. Thesis presentations for those who successfully defended their thesis between <strong>1st October 2024 and 30th September 2025</strong> are eligible to be considered for this conference.
            </p>
            <p className="mb-6">
              Shortlisted synopses will be invited to present their research during the conference. The top presentations will receive a token prize and a certificate of merit.
            </p>
            <div className="text-2xl text-blue-600 font-bold">
              <span>Don't miss this opportunity to showcase your work!</span>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  )
}

export default page
