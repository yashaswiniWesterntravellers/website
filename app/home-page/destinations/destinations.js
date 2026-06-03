export function enrichDestinationForPackage(dest) {
  const price = dest.price ?? 133500 + (dest.id % 7) * 12000;
  const saveAmount = dest.saveAmount ?? Math.round(price * 0.3);
  const originalPrice = dest.originalPrice ?? price + saveAmount;

  return {
    ...dest,
    duration: dest.duration ?? "6 days & 5 nights",
    rating: dest.rating ?? Math.min(5, 4.5 + (dest.id % 3) * 0.25),
    reviewCount: dest.reviewCount ?? 20 + (dest.id % 40) * 8,
    packageTitle:
      dest.packageTitle ?? `Explore ${dest.name} | ${dest.tagline}`,
    itinerary: dest.itinerary ?? `3D ${dest.name} • 2D Highlights ...+1`,
    originalPrice,
    saveAmount,
    price,
    detailHref: dest.detailHref ?? `#destination-${dest.id}`,
  };
}

export const HOME_SHOWCASE = [
  { id: 101, name: "Srilanka", tagline: "The city of life", image: "/popular-destinations/roadtrip-coast.png" },
  { id: 102, name: "Maldives", tagline: "Tropical paradise", image: "/exploreasia/bali.jpeg" },
  { id: 103, name: "Switzerland", tagline: "Land of alps", image: "/exploreeurope/santorini.jpeg" },
  { id: 104, name: "Thailand", tagline: "Amazing thailand", image: "/exploreasia/tokyo.jpeg" },
  { id: 105, name: "Italy", tagline: "Land of rising sun", image: "/exploreeurope/rome.jpeg" },
];

export function destinationsForGrid(region) {
  return DESTINATIONS.filter((d) => d.region === region).map(
    ({ id, name, tagline, image }) => ({ id, name, tagline, image })
  );
}

export const DESTINATIONS = [
  { id: 1, name: "Paris", tagline: "City of Light", image: "/exploreeurope/paris.jpeg", region: "Europe" },
  { id: 2, name: "Santorini", tagline: "Aegean sunsets", image: "/exploreeurope/santorini.jpeg", region: "Europe" },
  { id: 12, name: "Rome", tagline: "The eternal city", image: "/exploreeurope/rome.jpeg", region: "Europe" },
  { id: 13, name: "Barcelona", tagline: "Mediterranean soul", image: "/exploreeurope/Bareclone.jpeg", region: "Europe" },
  { id: 3, name: "Dubai", tagline: "City of ambition", image: "/exploreasia/dubai.jpeg", region: "Asia" },
  { id: 4, name: "Singapore", tagline: "The Lion City", image: "/exploreasia/singapore.jpeg", region: "Asia" },
  { id: 5, name: "Tokyo", tagline: "Tradition meets future", image: "/exploreasia/tokyo.jpeg", region: "Asia" },
  { id: 16, name: "Bali", tagline: "Island of the gods", image: "/exploreasia/bali.jpeg", region: "Asia" },
  { id: 6, name: "Cape Town", tagline: "Where two oceans meet", image: "/oceania/sydney.webp", region: "Africa" },
  { id: 7, name: "Marrakech", tagline: "Red city rhythms", image: "/exploreasia/dubai.jpeg", region: "Africa" },
  { id: 8, name: "New York", tagline: "The city that never sleeps", image: "/popular-destinations/singapur.jpeg", region: "Americas" },
  { id: 9, name: "Rio de Janeiro", tagline: "Coast and carnival", image: "/popular-destinations/roadtrip-coast.png", region: "Americas" },
  { id: 6, name: "Cape Town", tagline: "Where two oceans meet", image: "/popular-destinations/australia.jpeg", region: "Africa" },
  { id: 7, name: "Marrakech", tagline: "Red city rhythms", image: "/popular-destinations/dubai.jpeg", region: "Africa" },
  { id: 8, name: "New York", tagline: "The city that never sleeps", image: "/popular-destinations/singapur.jpeg", region: "Americas" },
  { id: 9, name: "Rio de Janeiro", tagline: "Coast and carnival", image: "/popular-destinations/roadtrip-coast.png", region: "Americas" },
  { id: 10, name: "Sydney", tagline: "Harbour icons", image: "/oceania/sydney.webp", region: "Oceania" },
  { id: 11, name: "Queenstown", tagline: "Adventure capital", image: "/oceania/Queenstown.webp", region: "Oceania" },
  { id: 14, name: "Melbourne", tagline: "Coffee and culture", image: "/oceania/melbourne.webp", region: "Oceania" },
  { id: 15, name: "Auckland", tagline: "City of sails", image: "/oceania/Auklamd.webp", region: "Oceania" },
];
