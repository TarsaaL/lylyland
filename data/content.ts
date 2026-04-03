export const flavors = {
  glaces: [
    { name: "Vanille de Madagascar", color: "#F5E6C8", origin: "Madagascar" },
    { name: "Cafe de Colombie", color: "#6F4E37", origin: "Colombie" },
    { name: "Miel-amandes", color: "#DAA520" },
    { name: "Cacahuetes", color: "#C19A6B" },
    { name: "Chocolat Valrhona", color: "#3D1E0E", qualifier: "Valrhona" },
    { name: "Praline", color: "#B87333" },
    { name: "Caramel beurre sale", color: "#C67B30" },
    { name: "Chataigne d'Ardeche", color: "#954535", origin: "Ardeche" },
    { name: "Nutella", color: "#5C3317" },
    { name: "Noix du Royans", color: "#8B7355", origin: "Royans" },
    { name: "Pistache", color: "#93C572" },
    { name: "Stracciatella", color: "#F5F5DC" },
  ],
  sorbets: [
    { name: "Fraise", color: "#FF6B6B" },
    { name: "Abricot", color: "#FBCEB1" },
    { name: "Citron bio", color: "#FFF44F", qualifier: "bio" },
    { name: "Mojito", color: "#98FB98" },
    { name: "Chocolat sorbet", color: "#5C3317" },
    { name: "Poire Williams", color: "#D1E231" },
    { name: "Mandarine verveine", color: "#FF8C00" },
    { name: "Framboise", color: "#E30B5C" },
    { name: "Myrtille", color: "#4F86C6" },
    { name: "Passion", color: "#FFD700" },
    { name: "Mangue", color: "#FF8243" },
    { name: "Coco", color: "#FFFDD0" },
    { name: "Peche blanche", color: "#FFDAB9" },
  ],
};

export const creations = [
  {
    title: "Bubble Waffles",
    description:
      "Nos gaufres a bulles croustillantes garnies de glaces artisanales, fruits frais et toppings gourmands.",
    icon: "waffle",
  },
  {
    title: "Crepes Gourmandes",
    description:
      "Crepes fines et moelleuses, garnies de chocolat Valrhona, fruits de saison ou caramel beurre sale.",
    icon: "crepe",
  },
  {
    title: "Patisseries Maison",
    description:
      "Entremets glaces, buches et creations patissieres preparees avec soin par Lydia.",
    icon: "cake",
  },
];

export const epicerie = {
  items: [
    { name: "Amandes bio d'Andalousie", category: "bio" },
    { name: "Cafe Bio", category: "bio" },
    { name: "The noir Bio", category: "bio" },
    { name: "The vert Bio", category: "bio" },
    { name: "Chocolats Valrhona", category: "chocolat" },
    { name: "Macarons", category: "patisserie" },
  ],
  wines: [
    {
      name: "TerraVentoux",
      description: "Cave cooperative du Ventoux",
    },
    {
      name: "RoccaMaura",
      description: "Cave cooperative du Sud",
    },
  ],
};

export const services = [
  { icon: "Sun", label: "Terrasse", description: "Profitez du soleil du Vercors" },
  { icon: "Truck", label: "Livraison", description: "On vous livre !" },
  { icon: "Baby", label: "Espace enfants", description: "Les petits sont les bienvenus" },
  { icon: "Wifi", label: "WiFi gratuit", description: "Restez connectes" },
  { icon: "Accessibility", label: "Accessible PMR", description: "Acces pour tous" },
  { icon: "ShoppingBag", label: "A emporter", description: "Emportez vos glaces" },
];

export const hours = {
  seasonal: true,
  reopeningDate: "4 avril 2026",
  schedule: [
    { day: "Lundi", open: false },
    { day: "Mardi", open: false },
    { day: "Mercredi", open: false },
    { day: "Jeudi", open: true, hours: "09h00 - 12h00" },
    { day: "Vendredi", open: false },
    { day: "Samedi", open: true, hours: "09h00 - 12h00" },
    { day: "Dimanche", open: false },
  ],
  note: "Horaires saisonniers - consultez-nous pour les horaires d'ete",
};

export const contact = {
  address: "72 avenue de Provence",
  city: "La Chapelle en Vercors",
  postalCode: "26420",
  phone: "+33699769210",
  phoneDisplay: "06 99 76 92 10",
  email: "givert.lydia@orange.fr",
  coordinates: { lat: 44.9666417, lng: 5.4182105 },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=44.9666417,5.4182105",
};

export const navLinks = [
  { label: "Nos Glaces", href: "#glaces" },
  { label: "Creations", href: "#creations" },
  { label: "Epicerie", href: "#epicerie" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Infos", href: "#infos" },
  { label: "Contact", href: "#contact" },
];
