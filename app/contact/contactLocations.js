export const LOCATION_GROUPS = [
  {
    region: "Europe",
    locations: [
      "Paris, France",
      "Rome, Italy",
      "Barcelona, Spain",
      "Santorini, Greece",
      "London, United Kingdom",
      "Switzerland",
      "Amsterdam, Netherlands",
      "Prague, Czech Republic",
      "Vienna, Austria",
      "Istanbul, Turkey",
    ],
  },
  {
    region: "Asia",
    locations: [
      "Dubai, UAE",
      "Singapore",
      "Tokyo, Japan",
      "Bali, Indonesia",
      "Bangkok, Thailand",
      "Phuket, Thailand",
      "Maldives",
      "Sri Lanka",
      "Vietnam",
      "Malaysia",
      "South Korea",
      "Hong Kong",
    ],
  },
  {
    region: "Africa",
    locations: [
      "Cape Town, South Africa",
      "Marrakech, Morocco",
      "Kenya Safari",
      "Egypt",
      "Mauritius",
      "Zanzibar, Tanzania",
    ],
  },
  {
    region: "Americas",
    locations: [
      "New York, USA",
      "Los Angeles, USA",
      "Rio de Janeiro, Brazil",
      "Canada",
      "Mexico",
      "Argentina",
      "Peru",
    ],
  },
  {
    region: "Oceania",
    locations: [
      "Sydney, Australia",
      "Melbourne, Australia",
      "Queenstown, New Zealand",
      "Auckland, New Zealand",
      "Fiji",
    ],
  },
];

export const ALL_FOREIGN_LOCATIONS = LOCATION_GROUPS.flatMap((g) => g.locations);
