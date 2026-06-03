/** Shared trip-style options — same across destinations; only location copy changes. */
export const DEFAULT_TRIP_STYLES = [
  { id: "honeymoon", label: "Honeymoon", hint: "Romance & sunsets", icon: "♥" },
  { id: "solo", label: "Solo", hint: "Explore freely", icon: "✦" },
  { id: "friends", label: "Friends", hint: "Adventure together", icon: "★" },
  { id: "family", label: "Family", hint: "Memories for all", icon: "◆" },
];

export const DEFAULT_BRAND = "Western Travellers";

export function slugifyLocation(location) {
  return location
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Hash / section id for deep links, e.g. bali-trip-styles */
export function tripStyleSectionId(location) {
  return `${slugifyLocation(location)}-trip-styles`;
}

export function tripStyleEyebrow(location, brandName = DEFAULT_BRAND) {
  return `${brandName} · ${location}`;
}

export function tripStyleDescription(location) {
  return `How are you travelling to ${location}? Choose a trip style below and we'll show packages picked for you.`;
}
