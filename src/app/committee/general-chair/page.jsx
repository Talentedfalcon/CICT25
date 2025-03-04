import React from 'react';
import ScrollFadeIn from '@/app/(components)/scroll-animation';
import SocialMediaCard from '@/app/(components)/SocialMediaCard';
import { OrganizingChairs } from '@/app/data/general-chair';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-4 px-4">
      <div className="flex h-16 items-center font-sans text-5xl text-[#222121] font-bold mt-10">
        General Chairs
      </div>
      
      {OrganizingChairs.OrganizingChairs.map((chairs, index) => (
        <div key={index} className="w-full mb-12">


          <ScrollFadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-40 justify-center gap-8">
              {chairs.members.map((member, memberIndex) => (
                <SocialMediaCard key={memberIndex} person={member} />
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      ))}
    </div>
  );
}

export default page;
