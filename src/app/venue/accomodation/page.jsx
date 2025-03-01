import React from 'react';

const page = () => {
  const hotels = [
    {
      name: "The Leela Palace, Chennai",
      address: "MRC Nagar, R.A Puram, Chennai City Center, Chennai – 600028",
      distance: "39 Km",
      map: "https://www.google.com/maps/place/Leela+Palace,+MRC+Nagar+1st+Lane,+MRC+Nagar,+Raja+Annamalai+Puram,+Chennai,+Tamil+Nadu+600028/@13.0170095,80.2712988,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267defe1f9bdb:0x5c9b0723542c4f06!8m2!3d13.0170095!4d80.2738791!16s%2Fg%2F12hzj04dw?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipNyZug1UuetXkJ4DGB3J5ErmkPlcJVpbqavkaJa=w408-h306-k-no"
    },
    {
      name: "Hotel ITC Grand Chola, Chennai",
      address: "No. 63, Mount Road, Guindy, Chennai, Tamil Nadu 600032",
      distance: "45 Km",
      map:"https://www.google.com/maps/place/ITC+Grand+Chola,+a+Luxury+Collection+Hotel,+Chennai/@13.010559,80.2178527,17z/data=!4m10!3m9!1s0x3a52676d5bb54be1:0xf2c9c9c91db16643!5m3!1s2025-03-02!4m1!1i2!8m2!3d13.010559!4d80.220433!16s%2Fg%2F11_snf43_?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh3.googleusercontent.com/gps-proxy/ALd4DhG65rwgxiDW9Wi5iMRi1dRT2RMXI9vSVbxhcX2REimE2rYKz8s05tagV-7QRzTBrxYMH1jRImdM3EV-lYvDVq_dwlj_AMKZ1ily4trVfSlQ81WgokblMBteGBhUbY9-UEb8n8CA_nQxSkKW5Xk2OqE-KEraCV7ROD0AoZFTodyuCj8EiY9f77wA=w408-h292-k-no"
    },
    {
      name: "Hotel Hyatt Regency, Chennai",
      address: "365, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018",
      distance: "50 Km",
      map:"https://www.google.com/maps/place/Hyatt+Regency+Chennai/@13.0430452,80.2461051,17z/data=!4m10!3m9!1s0x3a5266466c3b5a81:0xfe35b8153aea85fd!5m3!1s2025-03-02!4m1!1i2!8m2!3d13.0430452!4d80.2486854!16s%2Fm%2F0hgp438?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipNvitlq83V58-rGciUn69M5YwWDFcmw_o2fk2xH=w408-h270-k-no"
    },
    {
      name: "Hotel SRR Grand",
      address: "133 GST Road, Otteri, Vandalur, Chennai",
      distance: "15 Km",
      map:"https://www.google.com/maps/place/Hotel+SRR+Grand/@12.882715,80.0762209,17z/data=!3m1!4b1!4m10!3m9!1s0x3a52f60e7a038ef3:0x8ba42dab8e21498!5m3!1s2025-03-02!4m1!1i2!8m2!3d12.882715!4d80.0810865!16s%2Fg%2F11c5wp0d7c?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipNd0lInSZTpSjQFeJECfcWqXwBhvyl5Ja6BRobP=w426-h240-k-no"
    },
    {
      name: "Hotel Ginger",
      address: "No 10, OMR Toll Plaza, Navalur, Chennai, Tamil Nadu – 600130",
      distance: "18 Km",
      map:"https://www.google.com/maps/place/Ginger+Chennai+OMR/@12.8065755,80.1556468,13.21z/data=!4m10!3m9!1s0x3a525b59284cede1:0x621642fc1b47f657!5m3!1s2025-03-02!4m1!1i2!8m2!3d12.8402939!4d80.2279237!16s%2Fg%2F11sjgk7p2d?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh3.googleusercontent.com/gps-proxy/ALd4DhF6t1cn2MW1JxgqYMQibitDvo49R1sYxTci_2fwLORZe_MXZHChDoqtA72HQErMQUm-49MQNIB3F0KbY1zQIJFnn6WmeUNuRgJ80h0WQQhX7xZE3_EnT-2LqeST4RC_kIcKnCTHim145dwnjq2G4YZMIwecH1y77I206bAe-mGE9Chs3-JTqOz9Dg=w408-h271-k-no"
    },
    {
      name: "Hotel Kalyan Grand",
      address: "#247, GST Road, Vandalur, Chennai – 600048",
      distance: "9.6 Km",
      map:"https://www.google.com/maps/place/Kalyan+Grand+-+a+business+hotel/@12.8736119,80.0759564,17z/data=!4m10!3m9!1s0x3a52f61457dbdc1f:0x5e2571e266b7193d!5m3!1s2025-03-02!4m1!1i2!8m2!3d12.8736119!4d80.0785367!16s%2Fg%2F11bx5q79nj?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipPpvUf9ZXsj6FAYzgGmsSxuyvYXm2LyCLDZ0xEF=w408-h272-k-no"
    },
    {
      name: "Hotel Southern Residency",
      address: "130, Kelambakam-Kovalam Road, Kittu Nagar, Kelambakkam, Chennai – 603 103",
      distance: "13.7 Km",
      map:"https://www.google.com/maps/place/Hotel+Southern+Residency/@12.7864761,80.2186097,17z/data=!4m10!3m9!1s0x3a52508d6250c339:0x2cd342dd1c6dd0c!5m3!1s2025-03-02!4m1!1i2!8m2!3d12.7864761!4d80.22119!16s%2Fg%2F1tgf6678?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipMYA7nvLJ9FvkkMdJCMRwzjt3y904MZmMhg75qy=w408-h261-k-no"
    },
    {
      name: "Novotel Chennai OMR",
      address: "IT Expressway, Opp. Elcot SEZ, Sholinganallur, Chennai, Tamil Nadu 600119",
      distance: "17 Km",
      map:"https://www.google.com/maps/place/Novotel+Chennai+OMR/@12.9052408,80.2266236,17z/data=!3m1!5s0x3a525c7dcac43f7b:0x2bdca97fc1c14095!4m10!3m9!1s0x3a525c7c3b310a53:0xf1a81050650e77fc!5m3!1s2025-03-02!4m1!1i2!8m2!3d12.9052408!4d80.2292039!16s%2Fg%2F11g8zzv92y?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D",
      imgurl:"https://lh5.googleusercontent.com/p/AF1QipMVXF7XmEW4ZQmqmbG91yfbZvbvSddauJv0Z95U=w408-h272-k-no"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center gap-8 px-6 py-10">
      <h1 className="text-4xl font-semibold text-[#222121] mb-8 text-center">Nearby Hotels for Your Stay</h1>
      <div className="flex flex-col gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600 flex">
            <img 
              src={hotel.imgurl} 
              alt=""
              className='w-1/6 md:w-1/4 self-center justify-self-center' 
            />
            <div className='ml-10'>
              <a href={hotel.map} target='_blank'>
                <h2 className="text-3xl font-bold text-[#222121] hover:cursor-pointer hover:text-[#4c2222]">{hotel.name}</h2>
              </a>
              <p className="text-lg text-gray-600 mt-3">{hotel.address}</p>
              <p className="text-lg text-gray-500 mt-2">Distance from venue: <strong>{hotel.distance}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
