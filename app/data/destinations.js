export const HOME_SHOWCASE = [
  { id: 101, name: "Dubai", tagline: "The city of life", image: "/popular-destinations/dubai.jpeg" },
  { id: 102, name: "Singapore", tagline: "The lion city", image: "/popular-destinations/singapur.jpeg" },
  { id: 103, name: "Australia", tagline: "Land of down under", image: "/popular-destinations/australia.jpeg" },
  { id: 104, name: "New Zealand", tagline: "The adventure capital", image: "/popular-destinations/roadtrip-coast.png" },
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
