import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AttractionsPage = () => {
  const attractions = [
    {
      name: "Kancheepuram",
      description:
        "A temple town known as the 'City of Thousand Temples' and 'Silk City'. Famous for its silk sarees and temples like the Varadaraja Perumal Temple, Kailasanathar Temple, and Ekambareswarar Temple.",
      distance: "75 km from Chennai Central",
      fee: "Varies depending on the temple",
      image: "/assets/images/attractions/kancheepuram.jpg",
    },
    {
      name: "Mahabalipuram",
      description:
        "A UNESCO World Heritage Site featuring ancient rock-cut temples, monolithic sculptures, and bas-reliefs. Notable attractions include the Shore Temple, Arjuna’s Penance, and the Panch Rathas.",
      distance: "58 km from Chennai Central",
      fee: "INR 40 (Indians), INR 600 (Foreigners)",
      image: "/assets/images/attractions/mahabalipuram.jpg",
    },
    {
      name: "Marina Beach",
      description:
        "India’s largest beach with palm trees, a classic sunrise view, and activities like horse rides, beach games, and kite flying.",
      distance: "Within Chennai city",
      fee: "Free",
      image: "/assets/images/attractions/marina_beach.jpg",
    },
    {
      name: "Dakshina Chitra",
      description:
        "A living-history museum showcasing South Indian culture with traditional houses, art, folk performances, and architecture.",
      distance: "SH 49, Muttukadu, Tamil Nadu",
      fee: "INR 175 (Adults), INR 60 (Children 5-12 yrs), INR 100 (Children 13-18 yrs), INR 350 (Foreigners)",
      image: "/assets/images/attractions/dakshina_chitra.jpg",
    },
    {
      name: "Santhome Church",
      description:
        "A sparkling white church built on the tomb of St. Thomas, featuring stained glass windows, a museum, and a high cross with a sloping red roof.",
      distance: "17.5 km from Chennai Airport",
      fee: "Free",
      image: "/assets/images/attractions/santhome_church.jpg",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-[#222121] mb-4">
          Attractions Near IIITDM Kancheepuram
        </h2>
        <p className="text-gray-600 text-lg">
          Explore nearby attractions to make the most of your visit.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {attractions.map((place, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-[#222121] font-semibold hover:no-underline">
              {place.name}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <img src={place.image} alt={place.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p>{place.description}</p>
              <p className="text-sm text-gray-500 mt-2">Distance: {place.distance}</p>
              <p className="text-sm text-gray-500">Entry Fee: {place.fee}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AttractionsPage;
