import React from "react";

const page = ()=>{
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-20 mx-20">
            <div className="mb-10 text-3xl font-bold">
                Available Accomodations
            </div>
            <div className="flex gap-5">
                <div className="w-1/2 p-4 shadow-inner rounded-lg">
                    <div className="h-full flex flex-col items-center gap-5 bg-gray-300 py-10 px-5 rounded-lg">
                        <div className="font-bold text-xl"> 
                            Hostel
                        </div>
                        <div className="text-center">
                            Boys and Girls Hostels for student participants<br/>
                            <span className="text-sm italic">(INR 200 per day per person)</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-4 shadow-inner rounded-lg">
                    <div className="h-full flex flex-col items-center gap-5 bg-gray-300 py-10 px-5 rounded-lg">
                        <div className="font-bold text-xl">
                            Guest House
                        </div>
                        <div className="text-center">
                            AC attached bathroom<br/>
                            <span className="text-sm italic">(INR 1500 per day)</span>
                        </div>
                        <div className="text-center">
                            AC non attached bathroom<br/>
                            <span className="text-sm italic">(INR 1000 per day)</span>
                        </div>
                        <div className="text-center">
                            Non-AC non attached bathroom<br/>
                            <span className="text-sm italic">(INR 600 per day)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-start mt-10">
                For More Information Visit: 
                <a href="https://iiitdm.ac.in/hostel" target="_blank" className="text-blue-600 hover:underline active:text-blue-400">
                    https://iiitdm.ac.in/hostel
                </a>
            </div>
        </div>
    )
}

export default page