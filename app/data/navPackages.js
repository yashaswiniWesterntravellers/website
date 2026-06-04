/** Shared package links for navbar & mobile bottom nav menus */

export const INTERNATIONAL_PACKAGE_LINKS = [
  { label: "Thailand", href: "/?package=international&region=thailand#destinations" },
  { label: "Myanmar", href: "/?package=international&region=myanmar#destinations" },
  { label: "Malaysia", href: "/?package=international&region=malaysia#destinations" },
  { label: "Singapore", href: "/?package=international&region=singapore#destinations" },
  { label: "Bali", href: "/balii" },
  { label: "Goa", href: "/?package=international&region=goa#destinations" },
];

export const DOMESTIC_PACKAGE_LINKS = [
  { label: "Goa", href: "/?package=domestic&region=goa#destinations" },
  { label: "Kerala", href: "/?package=domestic&region=kerala#destinations" },
  { label: "Rajasthan", href: "/?package=domestic&region=rajasthan#destinations" },
  { label: "Manali", href: "/?package=domestic&region=manali#destinations" },
];

export const PACKAGE_MENU_CONFIG = {
  domestic: {
    title: "Domestic packages",
    viewAllHref: "/?package=domestic#destinations",
    viewAllLabel: "View all domestic destinations",
    links: DOMESTIC_PACKAGE_LINKS,
  },
  international: {
    title: "International packages",
    viewAllHref: "/?package=international#destinations",
    viewAllLabel: "View all international destinations",
    links: INTERNATIONAL_PACKAGE_LINKS,
  },
};
