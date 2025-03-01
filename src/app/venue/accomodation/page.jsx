import React from 'react';

const page = () => {
  const hotels = [
    {
      name: "The Leela Palace, Chennai",
      address: "MRC Nagar, R.A Puram, Chennai City Center, Chennai – 600028",
      distance: "39 Km"
    },
    {
      name: "Hotel ITC Grand Chola, Chennai",
      address: "No. 63, Mount Road, Guindy, Chennai, Tamil Nadu 600032",
      distance: "45 Km"
    },
    {
      name: "Hotel Hyatt Regency, Chennai",
      address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018",
      distance: "50 Km"
    },
    {
      name: "Hotel SRR Grand",
      address: "133 GST Road, Otteri, Vandalur, Chennai",
      distance: "15 Km"
    },
    {
      name: "Hotel Ginger",
      address: "No 10, OMR Toll Plaza, Navalur, Chennai, Tamil Nadu – 600130",
      distance: "18 Km"
    },
    {
      name: "Hotel Kalyan Grand",
      address: "#247, GST Road, Vandalur, Chennai – 600048",
      distance: "9.6 Km"
    },
    {
      name: "Hotel Southern Residency",
      address: "130, Kelambakam-Kovalam Road, Kittu Nagar, Kelambakkam, Chennai – 603 103",
      distance: "N/A"
    },
    {
      name: "Novotel Chennai OMR",
      address: "IT Expressway, Opp. Elcot SEZ, Sholinganallur, Chennai, Tamil Nadu 600119",
      distance: "17 Km"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center gap-8 px-6 py-10">
      <h1 className="text-4xl font-semibold text-[#222121] mb-8 text-center">Nearby Hotels for Your Stay</h1>
      <div className="flex flex-col gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-[#222121]">{hotel.name}</h2>
            <p className="text-lg text-gray-600 mt-3">{hotel.address}</p>
            <p className="text-lg text-gray-500 mt-2">Distance from venue: <strong>{hotel.distance}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
