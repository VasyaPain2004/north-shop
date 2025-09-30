import { Locations } from "@/types/shops";

export const locations: Locations = {
  yakutsk: {
    name: "Якутск",
    center: [62.025664, 129.726213],
    shops: [
      {
        id: 1,
        coordinates: [62.025664, 129.726213],
        name: "Магазин на проспекте Ленина",
      },
    ],
  },
  pokrovsk: {
    name: "Покровск",
    center: [61.480147, 129.146629],
    shops: [
      {
        id: 2,
        coordinates: [61.480147, 129.146629],
        name: "Магазин на орджоникидзе",
      },
    ],
  },
  aldan: {
    name: "Алдан",
    center: [58.606479, 125.373301],
    shops: [
      {
        id: 3,
        coordinates: [58.606479, 125.373301],
        name: "Магазин на комарова",
      },
    ],
  },
  neryngri: {
    name: "Нерюнгри",
    center: [56.658016, 124.713909],
    shops: [
      {
        id: 4,
        coordinates: [56.658016, 124.713909],
        name: "Магазин на дружбы народов",
      },
    ],
  },
};